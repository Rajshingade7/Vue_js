<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Loginfile from './components/Loginfile.vue'
import Signup from './components/SignUp.vue'
</script>

<template>
  <v-app>
    <!-- <router-view></router-view> -->
    <Loginfile/>
    <SignUp/>

  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>