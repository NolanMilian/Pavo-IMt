<template>
  <q-layout view="hHh lpR fFf" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
    <div class=""></div>

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <span class="appTitle cursor-pointer" @click="this.$router.push({name: 'index'})">
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            {{ appName }}
          </span>
          <q-badge class="q-ml-md" color="orange"> v{{ appVersion }}-alpha</q-badge>
        </q-toolbar-title>

<!--        <q-btn v-if="authUser" color="purple" label="Account Settings">-->
        <q-avatar v-if="authUser" class="cursor-pointer q-mr-lg">
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md"> Settings   <q-btn flat round icon="settings" @click="pushToSiteSettings"><q-tooltip>Site Settings</q-tooltip></q-btn> </div>
                <q-toggle disable v-model="darkMode" label="Dark Mode" />
<!--                <q-toggle v-model="bluetooth" label="Bluetooth" />-->
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar class="cursor-pointer" size="72px" @click="pushToProfileSettings">
                  <q-tooltip>Profile Settings</q-tooltip>
                  <img :src="authUser.photoURL">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">{{ authUser.displayName }}</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  icon-right="logout"
                  no-wrap
                  push
                  size="sm"
                  @click="logout"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
          <q-tooltip>Profile</q-tooltip>
          <img :src="authUser.photoURL">  <!-- @click="" redirect to profile page -->
        </q-avatar>
<!--        </q-btn>-->


        <q-avatar v-else class="cursor-pointer q-mr-lg">
          <q-tooltip>Login</q-tooltip>
          <q-icon name="login" @click="login"></q-icon>
        </q-avatar>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay elevated>
            <q-list>
              <q-img v-if="authUser" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
                <div class="absolute-bottom bg-transparent col">
                  <q-avatar size="56px" class="q-mb-sm" @click="pushToProfileSettings">
                    <q-tooltip>Profile</q-tooltip>
                    <img class="cursor-pointer" :src="authUser.photoURL" @click="console.log('profile click')">
                  </q-avatar>
                  <div class="text-weight-bold">{{ authUser.displayName }}</div>
                  <div>{{ authUser.email }}</div>
                </div>

                <div class="absolute-top-right transparent cursor-pointer">
                  <q-icon name="settings" size="24px" @click="pushToSiteSettings">
                    <q-tooltip>
                      Site Settings
                    </q-tooltip>
                  </q-icon>
                </div>

                <div class="absolute-bottom-right transparent cursor-pointer">
                  <q-icon v-if="authUser" name="logout" size="24px" @click="logout">
                    <q-tooltip>
                      Logout
                    </q-tooltip>
                  </q-icon>
                </div>
            </q-img>
              <div v-else class="q-mt-md q-px-lg justify-center cursor-pointer" @click="login">
                <q-icon class="" name="login" size="24px" >
                  <q-tooltip>
                    Login
                  </q-tooltip>
                </q-icon>
                <span class="text-bold text-subtitle1">
                  Login
                </span>
              </div>

<!--              <q-item-label-->
<!--                header-->
<!--              >-->
<!--                Essential Links-->
<!--              </q-item-label>-->

              <EssentialLink
                v-for="link in essentialLinks"
                :key="link.title"
                v-bind="link"
              />
            </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { version, productName } from '../../package.json';
import EssentialLink from "components/EssentialLink.vue";
import {auth} from "boot/firebase";
import firebase from "firebase";
import AuthUser from "src/models/AuthUser";
import { useAuthStore } from "stores/auth-store";

const linksList = [
  {
    title: 'Characters',
    caption: 'My Characters',
    icon: 'groups',
    link: '/characters',
    auth: true,
  },
  // {
  //   title: 'Game',
  //   caption: 'Temp Game Page',
  //   icon: 'code',
  //   link: '/game',
  //   // newTab: false // opens link in a new tap
  // }
]

export default defineComponent({
  name: 'MainLayout',
  components: {EssentialLink},
  methods: {
    pushToProfileSettings() {
      this.$router.push({name: 'profile-settings'})
    },
    pushToSiteSettings() {
      this.$router.push({name: 'site-settings'})
    },
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .catch(function (error) {
          console.error('Error signing in: ', error)
        })
    },

    logout() {
      console.log('logout')
      auth.signOut()
        .catch(function (error){})
    },
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  },
  created() {
    // this.authStore.onAuthStateChange();
    auth
      .onAuthStateChanged(user => {
        this.authUser = user ? new AuthUser(user) : null;
        this.authStore.authUser = user ? new AuthUser(user) : null;
        console.log('logged in as: ', this.authUser)
      })
  },

  data () {
    // let leftDrawerOpen = false

    return {
      authUser: null,
      authStore: useAuthStore(),
      essentialLinks: linksList,
      appVersion:version,
      appName:productName,
      leftDrawerOpen: false,
      darkMode: false,

    }
  }
})
</script>
