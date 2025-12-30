<script>
import {defineComponent} from 'vue'
import {useCharacterStore} from "stores/character-store";
import xmlToJson from "src/js/xmlToJson";
import fifthEditionCharacterSheetConverter from "src/models/FifthEditionCharacterSheetConverter";
import {storage, db} from "boot/firebase";
import Character from "src/models/Character";


export default defineComponent({
  name: "DnD5eSettingsPage",
  props: ['id'],
  data() {
    return {
      userStore: useCharacterStore(),
      activeCharacter: {},
      characterName: '',
      saveIcon: false,
      uploadDialog: false,
      userUpload: null,
      uploadingState: false,

    }
  },
  methods: {
    update(){
      if (this.characterName)
        this.userStore.updateCharacterVariable(this.id, 'name', this.characterName);
      this.saveHandler();
    },
    saveHandler(){
      this.saveIcon = true;
      setTimeout(() => {this.saveIcon = false},500);
    },

    readFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (event) => reject(event.target.error);

        reader.readAsText(file)
      });
    },

    parseXML(xmlString) {
      return new Promise((resolve, reject) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(file, "text/xml");
        const errorNode = xmlDoc.querySelector("parsererror");
        if (errorNode) {
          reject('Parser Error');
        } else {
          resolve(xmlDoc);
        }
      })
    },

    parseFile(file){
      let json = {};
      let character = {};

      this.readFile(file)
        .then((xmlString) => {
          console.log('Reader Succeeded');

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlString, "text/xml");
          const errorNode = xmlDoc.querySelector("parsererror");
          if (errorNode) {
            console.warn('Parser Error', errorNode)
          } else {
            console.log('Parser Succeed', xmlDoc)
          }

          const characterElement = xmlDoc.getElementsByTagName('character')[0];

          json = xmlToJson(characterElement);

          character = new fifthEditionCharacterSheetConverter(xmlDoc);


          console.log('File Converted to JSON', character);
        })
        .catch((error) => {
          console.error('Error reading file', error)
        })

      // Convert JSON to a string with indentation for readability
      // const jsonString = JSON.stringify(json, null, 2);
      // console.log(jsonString);
    },
    uploadFile(file){
      // TODO: add user feedback; let them know if the file was successfully uploaded, or if it failed.
      // we set loading state
      this.uploadingState = true

      // this.handleUserFile(file);

      this.parseFile(file);

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
    handleUserFile(file){
      let characterJSON= {};
      this.readFile(file)
        .then((xmlString) => {
          this.parseXML(xmlString)
            .then((xmlDoc) => {
              const characterElement = xmlDoc.getElementsByTagName('character')[0];
              characterJSON = xmlToJson(characterElement);
              console.log(characterJSON);
            })
            .catch((error) => {console.warn('Parser Error', error)})
        })
        .catch((error) => {console.error('Reader Error', error)})
    },

    cancelFileUpload(){
      this.userUpload = null;
    }
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
    <div class="characterImport column text-center q-mb-lg">
      <span class="label text-h5 text-bold q-pb-sm">
        Have an existing character you want to upload?
      </span>
      <div class="">
        <q-btn class="bg-primary text-white" icon="upload" @click="uploadDialog = true">Upload Character</q-btn>
      </div>
    </div>
    <div class="characterName column">
      <span class="label text-h6">
        <strong>Character Name</strong>
      </span>
      <q-input standout debounce="500" v-model="characterName" @blur="update" style="width: 300px">
        <template v-slot:append>
          <q-icon v-if="saveIcon" name="save"/>
        </template>
      </q-input>
    </div>
  </div>


  <q-dialog v-model="uploadDialog" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Character Sheet</div>
        <div class="">Currently we only support Fifth Edition Character Sheet</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-file filled bottom-slots v-model="userUpload" label="Label" counter max-files="1" accept=".json">
<!--          <template v-slot:prepend>-->
<!--            <q-icon name="cloud_upload" @click.stop.prevent />-->
<!--          </template>-->
          <template v-slot:append>
            <q-icon name="close" @click.stop.prevent="userUpload = null" class="cursor-pointer" />
          </template>
          <template v-slot:loading>
            <q-icon name="close" @click.stop.prevent="userUpload = null" class="cursor-pointer" />
          </template>

          <template v-slot:hint>
            Field hint
          </template>
        </q-file>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup @click="cancelFileUpload" />
<!--        <q-btn flat label="Upload Character" @click="uploadFile(userUpload)" />-->
        <q-btn flat :loading="uploadingState" color="primary" @click="uploadFile(userUpload)" label="Upload Character">
<!--        Button-->
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Uploading...
        </template>
      </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>



</style>
