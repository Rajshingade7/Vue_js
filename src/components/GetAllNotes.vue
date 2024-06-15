<template>
    <v-container>
      <create-note @noteCreated="refreshNotes"></create-note>
      <display-notes :notes="filteredNotes" @noteDeleted="handleNoteDeleted" @openUpdateDialog="openUpdateDialog"></display-notes>
      <update-note :note="selectedNote" :dialog.sync="dialog" @noteUpdated="refreshNotes"></update-note>
    </v-container>
  </template>

  
  <script>
  import CreateNote from './CreateNote.vue';
  import DisplayNotes from './DisplayNotes.vue';
  import UpdateNote from './UpdateNote.vue';
  import { GetNotesList } from '@/Services/NotesService';
  export default {
    components: {
      CreateNote,
      DisplayNotes,
      UpdateNote,
    },
    data() {
    return {
      selectedNote: null,
      dialog: false,
      notes: [],
    };
  },
  computed: {
    filteredNotes() {
      return this.notes.filter(note => note.isDeleted=true);
    },
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
        
       // await this.fetchNotes();

        console.log(`Note with ID ${noteId} deleted.`);
      } catch (error) {
        console.error('Error handling note deletion:', error);
      }},
      refreshNotes(){
        this.fetchNotes();
      },
      openUpdateDialog(note) {
      this.selectedNote = note;
      this.dialog = true;
    },
      
    },
    watch: {
    dialog(val) {
      if (!val) {
        this.selectedNote = null;
      }
    },
  },
    mounted() {
    this.fetchNotes();
  },
  };
  </script>
  
  <style scoped>
  </style>
  