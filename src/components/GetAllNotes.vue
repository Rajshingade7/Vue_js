<script>
import CreateNote from './CreateNote.vue';
import DisplayNotes from './DisplayNotes.vue';
import UpdateNote from './UpdateNote.vue';
import EditLabelDialog from './EditLabelDialog.vue';
import { getAllLabels } from '@/Services/LabelService';
import { GetNotesList,GetArchivedNotesList,GetTrashedNotelist } from '@/Services/NotesService';
export default {
  props:['selectedItem'],
  components: {
    CreateNote,
    DisplayNotes,
    UpdateNote,
    EditLabelDialog,
  },
  data() {
  return {
    showLabelDialog:false,
    selectedNote: null,
    dialog: false,
    notes: [],
    archivedNotes: [],
    trashNotes:[],
    labels:[],
    showArchivedNotes: false,
  };
},
computed: {
  filteredNotes() {
    return this.notes.filter(note => note.isDeleted === false && note.isArchived===false);
  },
  deletedNotes(){
    return this.notes.filter(note => note.isDeleted === true);
  }
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
  async fetchArchivedNotes() {
    try {
      const response = await GetArchivedNotesList();
      this.archivedNotes = response.data.data;
    } catch (error) {
      console.error('Error fetching archived notes:', error);
    }
  },
  async fetchTrashNotes(){
    try {
      const response = await GetTrashedNotelist();
      this.trashNotes = response.data.data;
    } catch (error) {
      console.error('Error fetching trashed notes:', error);
    }
  },
  async fetchLabels() {
      try {
        const response = await getAllLabels();
        this.labels = response.data.data.details;
        console.log(this.labels);
      } catch (error) {
        console.error('Error fetching labels:', error);
      }
    },
    openLabelDailog(){
     this.showLabelDialog = true;
     this.fetchLabels();
      },
    closeLabelDialog(){
      this.showLabelDialog = false;
      },
      
  async handleNoteDeleted(noteId) {
    try {
      this.notes = this.notes.filter(note => note.id !== noteId);
      console.log(`Note with ID ${noteId} deleted.`);
    } catch (error) {
      console.error('Error handling note deletion:', error);
    }},
    async refreshNotes(){
      await Promise.all([this.fetchNotes(), this.fetchArchivedNotes(), this.fetchTrashNotes(), this.fetchLabels()]);

    },
    openUpdateDialog(note) {
    this.selectedNote = note;
    this.dialog = true;
  },
  async handleNoteArchived(noteId) {
    await this.refreshNotes();
  },
    
  },
  watch: {
  dialog(val) {
    if (!val) {
      this.selectedNote = null;
    }
  },
  selectedItem(val) {
      if (val === 'edit') {
        this.openLabelDailog();
      }
    },

},
  mounted() {
  this.refreshNotes();
},


};
</script>

<template>
    <v-container>
      <create-note v-if="selectedItem === 'notes'" @noteCreated="refreshNotes"></create-note>
      <display-notes
      v-if="selectedItem === 'notes'"
      :notes="filteredNotes"
      @noteDeleted="handleNoteDeleted"
      @openUpdateDialog="openUpdateDialog"
      @noteArchived="handleNoteArchived"
    ></display-notes>
    <display-notes
      v-if="selectedItem === 'archive'"
      :notes="archivedNotes"
      @noteDeleted="handleNoteDeleted"
      @openUpdateDialog="openUpdateDialog"
      @noteArchived="handleNoteArchived"
    ></display-notes>
    <display-notes
    v-if="selectedItem === 'bin'"
    :notes="deletedNotes"
    @noteDeleted="handleNoteDeleted"
    @openUpdateDialog="openUpdateDialog"
    @noteArchived="handleNoteArchived"
  ></display-notes>
      <update-note v-if="selectedNote" :note="selectedNote" :dialog.sync="dialog" @noteUpdated="refreshNotes"></update-note>
      <edit-label-dialog
      v-if="showLabelDialog"
      :ilabels="labels"
      @closevent="closeLabelDialog"
      @refreshLabel="refreshNotes"
    />   
  </v-container> 
  </template>

  
  <style scoped>
  </style>
  