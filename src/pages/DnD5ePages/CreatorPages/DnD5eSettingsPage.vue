<script>
import {defineComponent} from 'vue'
import {useCharacterStore} from "stores/character-store";
import fifthEditionCharacterSheetConverter from "src/models/FifthEditionCharacterSheetConverter";


export default defineComponent({
  name: "DnD5eSettingsPage",
  props: ['id'],
  data() {
    return {
      userStore: useCharacterStore(),
      activeCharacter: {},
      characterName: '',
      saveIcon: false,
      importDialog: false,
      userUpload: null,
      uploadingState: false,
      importErrorDialog: false,
      importError: null,
      infoDialog: false,
      importSuccessDialog: false,
    }
  },
  methods: {
    update() {
      if (this.characterName)
        this.userStore.updateCharacterVariable(this.id, 'name', this.characterName);
      this.saveHandler();
    },

    saveHandler() {
      this.saveIcon = true;
      setTimeout(() => {
        this.saveIcon = false
      }, 500);
    },

    readFile(file) {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {

        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (event) => reject(event.target.error);

        reader.readAsText(file)
      });
    },

    parseXML(xmlString) {
      const parser = new DOMParser();
      return new Promise((resolve, reject) => {
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const errorNode = xmlDoc.querySelector("parsererror");
        if (errorNode) {
          reject('Parser Error', errorNode);
        } else {
          resolve(xmlDoc);
        }
      })
    },

    // parseFile(file) {
    //   // let json = {};
    //   let character = {};
    //
    //   this.readFile(file)
    //     .then((xmlString) => {
    //       console.log('Reader Succeeded');
    //
    //       const parser = new DOMParser();
    //       const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    //       const errorNode = xmlDoc.querySelector("parsererror");
    //       if (errorNode) {
    //         console.warn('Parser Error', errorNode)
    //       } else {
    //         console.log('Parser Succeed', xmlDoc)
    //       }
    //
    //       character = new fifthEditionCharacterSheetConverter(xmlDoc);
    //
    //       // character = new Character(this.id,character);
    //
    //       console.log('File Converted to JSON', character);
    //     })
    //     .catch((error) => {
    //       console.error('Error reading file', error)
    //     })
    //
    //   // Convert JSON to a string with indentation for readability
    //   // const jsonString = JSON.stringify(json, null, 2);
    //   // console.log(jsonString);
    // },

    uploadFile(file) {
      // TODO: add user feedback; let them know if the file was successfully uploaded, or if it failed.
      // we set loading state
      this.uploadingState = true

      this.handleFileImport(file);
      // this.parseFile(file);

      this.uploadingState = false

      // // console.log('file', file)
      // // Perform file upload to Firebase Storage
      // const storageRef = storage.ref();
      // const fileRef = storageRef.child(file.name);
      //
      // fileRef.put(file)
      //   .then(snapshot => {
      //     // Get the download URL
      //     snapshot.ref.getDownloadURL()
      //       .then(downloadURL => {
      //       // Store the downloadURL in Firestore or perform any other action
      //       db.collection('uploads').add({ downloadURL });
      //     });
      //   })
      //   .then(
      //     setTimeout(() => {
      //       // we're done, we reset loading state
      //       this.uploadingState = false
      //       this.uploadDialog = false
      //     }, 1000)
      //   )
      //   .catch(error => {
      //     console.error('Error uploading file:', error);
      //   });
    },
    async handleFileImport(file) {
      let characterJSON = {};

      this.uploadingState = true;

      if (!file) {
        this.abortFileUpload('No file present, please choose a file to import.')
      } else {

        const xmlString = await this.readFile(file).catch((e) => {
          console.warn('Reader Error', e);
          this.abortFileUpload('Error reading file.');
        });

        const xmlDoc = await this.parseXML(xmlString).catch((e) => {
          console.warn('Parser Error', e);
          this.abortFileUpload('Error parsing file. ' +
            '\nThis can happen if there are special characters in your Character Sheet such as "< > &"' +
            '\nPlease ensure you don\'t have them in your characters file. Thank you!');
        });

        characterJSON = new fifthEditionCharacterSheetConverter(xmlDoc);

        console.log(characterJSON);

        setTimeout(() => {this.uploadingState = false; this.importSuccessDialog = true;}, 500)

      }
    },

    abortFileUpload(error){
      this.importError = error;
      this.importErrorDialog = true;
      this.cancelFileUpload();
    },

    cancelFileUpload() {
      this.userUpload = null;
      this.uploadingState = false;
    },

    fileUploadError() {
      this.uploadingState = false;
      this.cancelFileUpload();
    },
  },
  mounted() {
    // this.userStore.activateCharacter(this.id);
    this.activeCharacter = this.userStore.activeCharacter;
    this.characterName = this.activeCharacter.name;
    // console.log('Character ID: ', this.id);
  }
})
</script>

<template>
  <div class="flex flex-center column">
    <!-- Character Import -->
    <div class="characterImport column text-center q-mb-lg">
      <span class="label text-h5 text-bold q-pb-sm">
        Have an existing character you want to upload?
      </span>
      <div class="">
        <q-btn class="bg-primary text-white" icon="upload" @click="importDialog = true">Upload Character</q-btn>
      </div>
    </div>
    <!-- character Name -->
    <div class="characterName column">
      <span class="label text-h6">
        <strong>Character Name</strong>
      </span>
      <q-input v-model="characterName" debounce="500" standout style="width: 300px" @blur="update">
        <template v-slot:append>
          <q-icon v-if="saveIcon" name="save"/>
        </template>
      </q-input>
    </div>
  </div>

  <!-- Character Import Dialog -->
  <q-dialog v-model="importDialog" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Character Sheet Import</div>
        <div class="">
          <q-btn flat round dense icon="info" @click="infoDialog = true"/>
          Currently we only import characters from the app <span class="text-green text-weight-bold no-wrap text-italic">Fifth Edition Character Sheet</span> with some limitations.
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-file v-model="userUpload" accept=".json" bottom-slots counter filled label="character_file.json" max-files="1">
          <!--          <template v-slot:prepend>-->
          <!--            <q-icon name="cloud_upload" @click.stop.prevent />-->
          <!--          </template>-->
          <template v-slot:append>
            <q-icon class="cursor-pointer" name="close" @click.stop.prevent="userUpload = null"/>
          </template>
          <template v-slot:loading>
            <q-icon class="cursor-pointer" name="close" @click.stop.prevent="userUpload = null"/>
          </template>

          <template v-slot:hint>
            Only .JSON files are accepted
          </template>
        </q-file>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn v-close-popup flat label="Cancel" @click="cancelFileUpload"/>
        <!--        <q-btn flat label="Upload Character" @click="uploadFile(userUpload)" />-->
        <q-btn :loading="uploadingState" color="primary" flat label="Upload Character" @click="handleFileImport(userUpload)">
          <!--        Button-->
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left"/>
            Uploading...
          </template>
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>

<!-- Error Dialog -->
  <q-dialog v-model="importErrorDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-negative">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ importError }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

<!-- Success Dialog -->
  <q-dialog v-model="importSuccessDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-positive">Success!</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Your character was successfully imported!
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

<!--  Info dialog about character file upload -->
  <q-dialog v-model="infoDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Formatting For Success</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="">
          Please ensure your character is free of the following symbols: <span class="no-wrap text-weight-bold">&lt; &gt; &amp;</span><br>
          These symbols are used in parsing the file and will result in an error if used.<br>
          Places to check for these symbols would be in the notes section of the app.<br>
          <br>
          When formatting the different Proficiencies(Armor, Weapon, Tool), Languages Known, and your Equipment on the <strong>Notes Page</strong>;
          it is best to leave one item per line, without commas. (Items with commas may not import properly)
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-negative">Limitations</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="">
          The following items from Fifth Edition Character Sheet currently either can't be imported, or are imported in a limited capacity. <br>
          <ul>
            <li>Weapons</li>
            <li>Spells</li>
          </ul>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>


</style>
