<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
// import {useAuthStore} from "stores/auth-store";

// const useAuth = useAuthStore();
export default defineComponent({
  name: 'App',
  // created() {
  //   useAuth().init();
  // }
})
</script>
