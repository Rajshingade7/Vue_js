<template>
  <masonrywall
    :cols="{ 'default': 4, '1100': 3, '700': 2, '500': 1 }"
    :gutter="20"
    :column-width="250"
    :gap="6"
    class="masonry-container"
  >
    <div
      class="masonry-item"
      v-for="note in reversedNotes"
      :key="note.id"
      @click="openUpdateDialog(note)"
      @mouseover="hoveredNote = note.id"
      @mouseleave="hoveredNote = note.id"
    >
      <v-card class="note-card2" :style="{ backgroundColor: note.color || '#ffffff' }">
        <v-card-title class="note-title">{{ note.title }}</v-card-title>
        <v-card-text class="note-description">{{ note.description }}</v-card-text>
        <note-icons
          @colorSelected="changeCardColor($event, note.id)"
          v-if="hoveredNote === note.id"
          :items="items"
          :noteId="note.id"
          @itemClick="handleItemClick($event, note.id)"
          @noteArchived="handleNoteArchived(note.id)"

        />
        <v-icon
          v-if="hoveredNote === note.id"
          class="check-circle-btn"
          size="24"
          style="position: absolute; top: -10px; left: -10px;"
        >
          mdi-check-circle
        </v-icon>
        <v-icon
        v-if="hoveredNote === note.id"
        size="24"
        style="position: absolute; top: 10px; right: 10px;">
          mdi-pin
        </v-icon>
      </v-card>
    </div>
  </masonrywall>
</template>

<script>
import { deleteNote, archiveNote } from '@/Services/NotesService';
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
    
    changeCardColor(color, noteId) {
      console.log(noteId,"notecolordisplay");
      const note = this.notes.find((note) => note.id === noteId);
      if (note) {
        note.color = color;
      }
},
    async handleNoteArchived(noteId) {
      try {
        const data = {
          noteIdList: [noteId],
          isArchived: true,
        };

        const response = await archiveNote(data);
        console.log('Note archived:', response);
        this.$emit('noteArchived', noteId);
      } catch (error) {
        console.error('Error archiving note:', error);
      }
    },
  },
};
</script>

<style scoped>
.masonry-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.check-circle-btn{
  position:absolute;
  z-index:10000;
}
.note-card2 {
  position: relative;
  z-index:0;
  overflow: visible !important;
}
.masonry-item {
  width: 100%;
  margin-bottom: 20px;
}

@media (min-width: 500px) {
  .masonry-item {
    width: calc(50% - 20px);
  }
}

@media (min-width: 700px) {
  .masonry-item {
    width: calc(33.33% - 20px);
  }
}

@media (min-width: 1100px) {
  .masonry-item {
    width: calc(25% - 20px);
  }
}
</style>
