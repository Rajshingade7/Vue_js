<template>
    <v-container>
      <create-note></create-note>
      <display-notes></display-notes>
    </v-container>
  </template>
  
  <script>
  import CreateNote from './CreateNote.vue';
  import DisplayNotes from './DisplayNotes.vue';
  
  export default {
    components: {
      CreateNote,
      DisplayNotes,
    },
  };
  </script>
  
  <style scoped>
  </style>
  