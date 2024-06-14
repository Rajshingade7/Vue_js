<template>
    <v-container>
      <create-note @noteCreated="refreshNotes"></create-note>
      <display-notes :notes="notes" @noteDeleted="handleNoteDeleted"></display-notes>
    </v-container>
  </template>

  
  <script>
  import CreateNote from './CreateNote.vue';
  import DisplayNotes from './DisplayNotes.vue';
  import { GetNotesList } from '@/Services/NotesService';
  export default {
    components: {
      CreateNote,
      DisplayNotes,
    },
    data() {
    return {
      notes: [],
    };
  },
    methods:{
      async fetchNotes() {
      try {
        const response = await GetNotesList();
        this.notes = response.data.data;
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    },
    async handleNoteDeleted(noteId) {
      try {
       
        this.notes = this.notes.filter(note => note.id !== noteId);
        
        await this.fetchNotes();//optinal section

        console.log(`Note with ID ${noteId} deleted.`);
      } catch (error) {
        console.error('Error handling note deletion:', error);
      }},

      refreshNotes(){
        this.fetchNotes();
      },
      
    },
    mounted() {
    this.fetchNotes();
  },
  };
  </script>
  
  <style scoped>
  </style>
  