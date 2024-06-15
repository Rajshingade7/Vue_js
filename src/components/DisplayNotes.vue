<template>
  <masonry
    :cols="{ 'default': 4, '1100': 3, '700': 2, '500': 1 }"
    :gutter="20"
  >
    <div
      class="masonry-item"
      v-for="note in reversedNotes"
      :key="note.id"
      @click="openUpdateDialog(note)"
      @mouseover="hoveredNote = note.id"
      @mouseleave="hoveredNote = null"
    >
      <v-card class="note-card2">
        <v-card-title class="note-title">{{ note.title }}</v-card-title>
        <v-card-text class="note-description">{{ note.description }}</v-card-text>
        <note-icons
          v-if="hoveredNote === note.id"
          :items="items"
          @itemClick="handleItemClick($event, note.id)"
        />
        <v-icon
          v-if="hoveredNote === note.id"
          class="check-circle-btn"
          size="24"
        >
          mdi-check-circle
        </v-icon>
      </v-card>
    </div>
  </masonry>
</template>
  <script>
import { deleteNote } from '@/Services/NotesService';
import NoteIcons from './NoteIcons.vue';
import MasonryWall from '@yeger/vue-masonry-wall';
export default {
  components: {
    NoteIcons,
    MasonryWall,
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
  computed: {
    reversedNotes() {
      return [...this.notes].reverse();
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
          this.$emit('noteDeleted', noteId);
        } catch (error) {
          console.error('Error deleting note:', error);
        }
      }
    },
    openUpdateDialog(note) {
      this.$emit('openUpdateDialog', note);
    },
  },
};
</script> 

 
<style scoped>
.note-card2 {
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  display:none;
}
.note-card2:hover .check-circle-btn {
  display: block; 
}
.masonry-item {
  margin-bottom: 20px;
  
 
}
</style>