<template>
  <router-view />
</template>

<script>
import {defineComponent, onMounted} from 'vue'
// in case i want to use pinia persistent
// import { provide } from 'pinia';
// import {useAuthStore} from "stores/auth-store";

export default defineComponent({
  name: 'App',
  // in case I want to use pinia persistent
  // setup(){
  //   provide('pinia', useAuthStore())
  // }
  // preFetch() {
  //   // const useAuth = useAuthStore()
  //   const userStore = useUserStore();
  //   userStore.getCharacters();
  // }
})
</script>
