<template>
  <router-view v-if="isLoaded"/>
  <div v-else class="loading text-h1 text-bold">Loading...</div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import { auth } from "boot/firebase";
import AuthUser from "src/models/AuthUser";
import { useAuthStore } from "stores/auth-store";

export default defineComponent({
  name: 'App',
  data(){
    return {
      isLoaded: false,
      authStore: useAuthStore(),
    }
  },
  created() {
    auth
      .onAuthStateChanged(user => {
        this.authUser = user ? new AuthUser(user) : null;
        this.authStore.authUser = user ? new AuthUser(user) : null;
        this.isLoaded = true;
        console.log('logged in as: ', this.authUser)
      })
  }
})
</script>
