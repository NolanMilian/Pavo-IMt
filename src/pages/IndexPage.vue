<template>
  <div class="text-center q-ma-xl index text-h1 text-cyan text-bold">
    Welcome to <br> TTE!
  </div>
  <q-page class="flex flex-block justify-center ">
    <div v-if="authStore.authUser" class="authenticated text-h3">
      Pick up where you left off.
      <q-btn class="bg-primary text-white" @click="this.$router.push({name: 'characters'})">My Characters</q-btn>
    </div>
    <div v-else class="notAuthenticated text-h3 text-center">
      You're not logged in. 😢 <br> For the full experience we recommend that you login/signup. <br>
      <q-btn class="text-white bg-primary" @click="authStore.signInWithPopup()">Login/Signup</q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import {useAuthStore} from "stores/auth-store";

export default defineComponent({
  name: 'IndexPage',
  data(){
    return {
      authStore: useAuthStore(),
    }
  }
})
</script>
<style scoped>

</style>
