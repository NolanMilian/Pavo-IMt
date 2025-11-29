<script>
import {defineComponent} from 'vue'
import {useCharacterStore} from "stores/character-store";
import {storage, db} from "boot/firebase";


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
    uploadFile(file){
      // console.log('file', file)
      // Perform file upload to Firebase Storage
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);

      fileRef.put(file)
        .then(snapshot => {
          // Get the download URL
          snapshot.ref.getDownloadURL().then(downloadURL => {
            // Store the downloadURL in Firestore or perform any other action
            db.collection('uploads').add({ downloadURL });
          });
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
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
        <q-uploader
        label="Character Upload"
        auto-upload
        max-files="1"
        @added="uploadFile"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Add address" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>



</style>
