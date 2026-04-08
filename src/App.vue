<template>
  <router-view v-if="authStore.isLoaded" />
  <div v-else class="loading text-h1 text-bold">Loading...</div>
</template>

<script>
import {defineComponent} from 'vue'
import { useAuthStore } from "stores/auth-store";
import {auth} from "boot/firebase";
import AuthUser from "src/models/AuthUser";
import { useQuasar } from "quasar";

export default defineComponent({
  name: 'App',
  data(){
    return {
      authStore: useAuthStore(),
      $q: useQuasar(),
    }
  },
  methods: {
    showLoading () {
      this.$q.loading.show({
        message: 'Loading user profile. Hang on...',
      })
    },

    endLoading() {
      this.$q.loading.hide()
    },

  },
  beforeUnmount() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  },
  mounted() {
    this.showLoading()
    this.authStore.init().then(() => {setTimeout(() => {this.endLoading()}, 100)});
    // auth
    //   .onAuthStateChanged(user => {
    //     this.authStore.setUser(user ? new AuthUser(user) : null);
    //     this.authStore.isLoaded = true;
    //   })

  }
})
</script>

<style>
.loading {
  background-color: #0d47a1;
}
</style>
