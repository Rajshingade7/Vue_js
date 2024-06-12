<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Loginfile from './components/Loginfile.vue'
import Signup from './components/SignUp.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import Dashboard from './components/Dashboard.vue'
</script>

<template>
  <v-app>
    <!-- <dashboard></dashboard> -->
     <router-view></router-view>
    <!-- <Loginfile/> -->
    <!-- <ForgotPassword/> -->
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>