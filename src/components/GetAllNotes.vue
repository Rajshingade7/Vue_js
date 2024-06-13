<template>
    <v-container>
      <create-note @noteCreated="refreshNotes"></create-note>
      <display-notes ref="displayNotes"></display-notes>
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
    methods:{
      refreshNotes(){
        this.$refs.displayNotes.fetchNotes();
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  