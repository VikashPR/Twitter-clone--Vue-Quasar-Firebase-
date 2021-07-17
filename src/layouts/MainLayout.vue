<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-weight-bold">
          Tweetkar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :width="283" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-icon name="fas fa-poo-storm" class='q-pa-md' size="5rem" color="primary" />
      <q-list>
        <q-item clickable v-ripple to='/'>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class='text-h5'>Home</q-item-section>
        </q-item>
        <!-- about -->
        <q-item clickable v-ripple to='/about'>
          <q-item-section avatar>
            <q-icon name="live_help" size="md" />
          </q-item-section>
          <q-item-section class='text-h5'>About</q-item-section>
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
        <q-item-label header class='text-grey'>Following</q-item-label>
        <q-item class='q-pa-md' clickable v-ripple >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Brunch this weekend?</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Janet</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            1 min ago
          </q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item class='q-pa-md' clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Linear Project</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">John</span>
              -- Can we schedule a call for tomorrow?
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            14 min ago
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

  export default {
    setup() {
      const leftDrawerOpen = ref(false)
      const rightDrawerOpen = ref(false)

      return {
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },

        rightDrawerOpen,
        toggleRightDrawer() {
          rightDrawerOpen.value = !rightDrawerOpen.value
        }
      }
    }
  }

</script>
