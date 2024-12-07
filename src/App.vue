<template>
  <router-view v-if="authStore.isLoaded"/>
  <div v-else class="loading text-h1 text-bold">Loading...</div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import { useAuthStore } from "stores/auth-store";
import {auth} from "boot/firebase";
import AuthUser from "src/models/AuthUser";

export default defineComponent({
  name: 'App',
  data(){
    return {
      authStore: useAuthStore(),
    }
  },
  created() {
    auth
      .onAuthStateChanged(user => {
        this.authStore.setUser(user ? new AuthUser(user) : null);
        this.authStore.isLoaded = true;
      })
  }
})
</script>
