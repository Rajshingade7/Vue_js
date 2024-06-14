<script>
  import { deleteNote } from '@/Services/NotesService';
  import NoteIcons from './NoteIcons.vue';
  export default {
    components:{
      NoteIcons,
    },
    data() {
      return {
       
        hoveredNote: null,
       
      };
    },
    props: {
    notes: {
      type: Array,
      default: () => [],
    },
  },
    computed:{
      reversedNotes(){
        return[...this.notes].reverse();
      },
    },
    methods: {
      async handleItemClick(index, noteId) {
      if (index === 0) {
        try {
          const data = {
            noteIdList: [noteId],
            isDeleted: true,
          };
          
          const response = await deleteNote(data);
          console.log('Note deleted:', response);
          this.$emit('noteDeleted',noteId);

         
        } catch (error) {
          console.error('Error deleting note:', error);
        }
      }
    },
  },
  };
  </script>

   <template>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="note in reversedNotes"
        :key="note.id"
        @mouseover="hoveredNote = note.id"
        @mouseleave="hoveredNote = note.id"
      >
        <v-card class="note-card2">
          <v-card-title>{{ note.title }}</v-card-title>
          <v-card-text>{{ note.description }}</v-card-text>
          <note-icons
          v-if="hoveredNote === note.id"
          :items="items"
          @itemClick="handleItemClick($event,note.id)"
        />
        <v-icon
          v-if="hoveredNote === note.id"
          icon
          class="check-circle-btn"
          size="24"
        >mdi-check-circle</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  
  
  <style scoped>
  .note-card2 {
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    z-index: 0;
    border:1px solid rgb(197, 193, 193);
    border-bottom: none;
  }
  
  
  .check-circle-btn {
    position: absolute;
    top: -12px; 
    left: -12px; 
    z-index:10;
  }
  </style>
  