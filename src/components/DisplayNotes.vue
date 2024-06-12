<template>
  <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="note in notes" :key="note.id">
      <v-card class="note-card2">
        <v-card-title>{{ note.title }}</v-card-title>
        <v-card-text>{{ note.description }}</v-card-text>
        <div class="hover-icons">
          <v-btn icon flat><v-icon size="18">mdi-bell-plus-outline</v-icon></v-btn>
          <v-btn icon flat><v-icon size="18">mdi-account-plus-outline</v-icon></v-btn>
          <v-btn icon flat><v-icon size="18">mdi-palette-outline</v-icon></v-btn>
          <v-btn icon flat><v-icon size="18">mdi-image-outline</v-icon></v-btn>
          <v-btn icon flat><v-icon size="18">mdi-archive-outline</v-icon></v-btn>
          <v-btn icon flat><v-icon size="18">mdi-dots-vertical</v-icon></v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
  
  <script>
  import { reactive, onMounted } from 'vue';
import { GetNotesList } from '@/Services/NotesService';

export default {
  data() {
    return {
      notes: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchNotes() {
      try {
        const response = await GetNotesList();
        this.notes=response.data.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchNotes();
  },
};
  </script>
  
  <style scoped>
  .note-card2 {
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow:hidden;
    padding-bottom:40px;
    

  }
  .hover-icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
    position: absolute;
    bottom: 0; /* Adjust position */
    right: 0;
    left:5px; /* Adjust position */
    
  }
  .note-card2:hover .hover-icons {
    opacity:1;
  }
  </style>
  