<template>
  <router-view v-if="authStore.isLoaded" />
<!--  <div v-else class="loading text-h1 text-bold">Loading...</div>-->
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
      timer: null,
    }
  },
  methods: {
    showLoading () {
      this.$q.loading.show()

      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 2000)
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
    auth
      .onAuthStateChanged(user => {
        this.authStore.setUser(user ? new AuthUser(user) : null);
        this.authStore.isLoaded = true;
      })
    setTimeout(() => {this.endLoading()}, 100)
  }
})
</script>
