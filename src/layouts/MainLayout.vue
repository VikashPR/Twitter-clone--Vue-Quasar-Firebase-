<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{$route.name}}</span>
          <q-icon name="fas fa-poo-storm" class='q-pa-md lt-md header-icon' size="2.6rem" color="primary" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :width="283" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-icon name="fas fa-poo-storm" class='q-pa-md' size="5rem" color="primary" />
      <!-- Home -->
      <q-list>
        <q-item exact clickable to='/'>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class='text-h5'>Home</q-item-section>
        </q-item>
        <!-- about -->
        <q-item exact clickable to='/about'>
          <q-item-section avatar>
            <q-icon name="live_help" size="md" />
          </q-item-section>
          <q-item-section class='text-h5'>About</q-item-section>
        </q-item>

        <!-- Login -->
        <q-item v-if="isLogin" exact clickable  @click="signOut">
          <q-item-section avatar>
            <q-icon name="fas fa-sign-in-alt" size="md" />
          </q-item-section>
          <q-item-section class='text-h5'>Logout</q-item-section>
        </q-item>

        <!-- Logout -->
        <q-item v-else exact clickable   @click="signIn">
          <q-item-section avatar>
            <q-icon name="fas fa-user" size="md" />
          </q-item-section>
          <q-item-section class='text-h5'>Login</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <!-- !right drawer -->
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- Serach bar -->
      <q-input class='q-ma-md' dense outlined rounded color="teal" placeholder="Search Twet">
        <template v-slot:prepend>
          <q-icon name="travel_explore" />
        </template>
      </q-input>
      <!-- Feeds -->
      <q-list bordered class="rounded-borders" style="max-width: 350px">
        <q-item-label header class='text-h5 text-weight-bold'>Feeds</q-item-label>
        <q-item-label header class='text-grey'>Trending</q-item-label>

        <q-item>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-badge color="teal" label="10k" />
          </q-item-section>
        </q-item>

        <q-separator inset="item" />
        <q-item>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-badge color="teal" label="10k" />
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  import {
    ref
  } from 'vue'
import { useAuth } from 'src/boot/firebase'


  export default {
    setup() {
      const leftDrawerOpen = ref(false)
      const rightDrawerOpen = ref(false)
      const { user, isLogin, signOut, signIn } = useAuth()

      return {
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },

        rightDrawerOpen,
        toggleRightDrawer() {
          rightDrawerOpen.value = !rightDrawerOpen.value
        },
        user, isLogin, signOut, signIn,
      }
    }
  }

</script>

<style lang="scss">
  .header-icon {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

</style>
