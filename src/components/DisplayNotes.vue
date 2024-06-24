<!-- <template>
  <masonrywall
    :cols="{ 'default': 4, '1100': 3, '700': 2, '500': 1 }"
    :gutter="20"
    :column-width="250"
    :gap="6"
    class="masonry-container"
  >
    <div
      class="masonry-item"
      v-for="note in pinnedNotes"
      :key="note.id"
      @click="openUpdateDialog(note)"
      @mouseover="hoveredNote = note.id"
      @mouseleave="hoveredNote = note.id"
    >
      <v-card class="note-card2" :style="{ backgroundColor: note.color || '#ffffff' }">
        <v-card-title class="note-title">{{ note.title }}</v-card-title>
        <v-card-text class="note-description">{{ note.description }}</v-card-text>
        <div class="note-labels">
          <span
          v-for="notes in note.noteLabels"

            class="note-label"
          >
            {{ notes.label }}
          </span>
        </div>
        <div class="icon-container">
          <note-icons
            @colorSelected="changeCardColor($event, note.id)"
            v-if="hoveredNote === note.id"
            :items="items"
            :noteId="note.id"
            @itemClick="handleItemClick($event, note.id)"
            @noteArchived="handleNoteArchived(note.id)"
          />
         
        </div>
        <v-icon
        v-if="hoveredNote === note.id"
        class="check-circle-btn"
        size="24"
      >
        mdi-check-circle
      </v-icon>
      <v-icon
        v-if="hoveredNote === note.id"
        size="24"
        class="pin-icon"
        @click.stop="togglePin(note.id)"

      >
        mdi-pin-outline
      </v-icon>
      <div v-if="showLabelList && selectedNoteId === note.id" class="label-list" ref="labelList">
        <v-list dense>

        <v-header class="label-subheader">Label Note</v-header> 

        
          <v-text-field
        placeholder="Create new label"
        density="compact"
        variant="flat"
        append-inner-icon="mdi-magnify"
      ></v-text-field>
     
        <v-list-item v-for="label in labels" :key="label.id" >
          <div class="label-list-item">
            <v-checkbox
            :input-value="selectedLabels.includes(label.id)"
            @change="toggleLabel(label.id)"
          ></v-checkbox>
          <v-list-item-content>{{ label.label }}</v-list-item-content>
          </div>
          
        </v-list-item>
          
        </v-list>
        
      </div>
      </v-card>
      
    </div>
   </masonrywall>
</template> -->
<template>
  <div>
    <h5>Pinned</h5>
    <masonrywall
      :cols="{ 'default': 4, '1100': 3, '700': 2, '500': 1 }"
      :gutter="20"
      :column-width="250"
      :gap="6"
      class="masonry-container"
    >
      <div
        class="masonry-item"
        v-for="note in pinnedNotes"
        :key="note.id"
        @click="openUpdateDialog(note)"
        @mouseover="hoveredNote = note.id"
        @mouseleave="hoveredNote = note.id"
      >
        <v-card class="note-card2" :style="{ backgroundColor: note.color || '#ffffff' }">
          <v-card-title class="note-title">{{ note.title }}</v-card-title>
          <v-card-text class="note-description">{{ note.description }}</v-card-text>
          <div class="note-labels">
            <span v-for="label in note.noteLabels" :key="label.id" class="note-label">{{ label.label }}</span>
          </div>
          <div class="icon-container">
            <note-icons
              @colorSelected="changeCardColor($event, note.id)"
              v-if="hoveredNote === note.id"
              :items="items"
              :noteId="note.id"
              @itemClick="handleItemClick($event, note.id)"
              @noteArchived="handleNoteArchived(note.id)"
            />
          </div>
          <v-icon
            v-if="hoveredNote === note.id"
            class="check-circle-btn"
            size="24"
            @click.stop="togglePin(note.id)"
          >
            mdi-check-circle
          </v-icon>
          <v-icon
            v-if="hoveredNote === note.id"
            size="24"
            class="pin-icon"
            @click.stop="togglePin(note.id)"
          >
            mdi-pin
          </v-icon>
          <div v-if="showLabelList && selectedNoteId === note.id" class="label-list" ref="labelList" v-click-outside="closeLabelList">
        <v-list dense>

        <v-header class="label-subheader">Label Note</v-header> 

        
          <v-text-field
        placeholder="Create new label"
        density="compact"
        variant="flat"
        append-inner-icon="mdi-magnify"
      ></v-text-field>
     
        <v-list-item v-for="label in labels" :key="label.id" >
          <div class="label-list-item">
            <v-checkbox
            :input-value="selectedLabels.includes(label.id)"
            @change="toggleLabel(label.id)"
          ></v-checkbox>
          <v-list-item-content>{{ label.label }}</v-list-item-content>
          </div>
          
        </v-list-item>
          
        </v-list>
        
      </div>
        </v-card>
      </div>
    </masonrywall>

    <h5>Others</h5>
    <masonrywall
      :cols="{ 'default': 4, '1100': 3, '700': 2, '500': 1 }"
      :gutter="20"
      :column-width="250"
      :gap="6"
      class="masonry-container"
    >
      <div
        class="masonry-item"
        v-for="note in otherNotes"
        :key="note.id"
        @click="openUpdateDialog(note)"
        @mouseover="hoveredNote = note.id"
        @mouseleave="hoveredNote = note.id"
      >
        <v-card class="note-card2" :style="{ backgroundColor: note.color || '#ffffff' }">
          <v-card-title class="note-title">{{ note.title }}</v-card-title>
          <v-card-text class="note-description">{{ note.description }}</v-card-text>
          <div class="note-labels">
            <span v-for="label in note.noteLabels" :key="label.id" class="note-label">{{ label.label }}</span>
          </div>
          <div class="icon-container">
            <note-icons
              @colorSelected="changeCardColor($event, note.id)"
              v-if="hoveredNote === note.id"
              :items="items"
              :noteId="note.id"
              @itemClick="handleItemClick($event, note.id)"
              @noteArchived="handleNoteArchived(note.id)"
            />
          </div>
          <v-icon
            v-if="hoveredNote === note.id"
            class="check-circle-btn"
            size="24"
            @click.stop="togglePin(note.id)"
          >
            mdi-check-circle
          </v-icon>
          <v-icon
            v-if="hoveredNote === note.id"
            size="24"
            class="pin-icon"
            @click.stop="togglePin(note.id)"
          >
            mdi-pin-outline
          </v-icon>
        <div v-if="showLabelList && selectedNoteId === note.id" class="label-list" ref="labelList" v-click-outside="closeLabelList">
        <v-list dense>

        <v-header class="label-subheader">Label Note</v-header> 

        
          <v-text-field
        placeholder="Create new label"
        density="compact"
        variant="flat"
        append-inner-icon="mdi-magnify"
      ></v-text-field>
     
        <v-list-item v-for="label in labels" :key="label.id" >
          <div class="label-list-item">
            <v-checkbox
            :input-value="selectedLabels.includes(label.id)"
            @change="toggleLabel(label.id)"
          ></v-checkbox>
          <v-list-item-content>{{ label.label }}</v-list-item-content>
          </div>
          
          
        </v-list-item>
          
        </v-list>
        
          
        
      </div>
        </v-card>
      </div>
    </masonrywall>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';
import { deleteNote, archiveNote } from '@/Services/NotesService';
import NoteIcons from './NoteIcons.vue';
import MasonryWall from '@yeger/vue-masonry-wall';
import AddLabelPopup from './AddLabelPopup.vue'
import { getAllLabels,addLabelToNote,removeLabelFromNote } from '@/Services/LabelService';


export default {
  directives: {
    'click-outside': vClickOutside.directive
  },
  components: {
    NoteIcons,
    MasonryWall,
    AddLabelPopup,
  },
  data() {
    return {
      hoveredNote: null,
      selectedNoteId: null,
      showLabelList: false,
      labels: [],
      selectedLabels: [],
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
    pinnedNotes() {
    return this.notes.filter(note => note.isPinned);
  },
  otherNotes() {
    return this.notes.filter(note => !note.isPinned);
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
      else if(index===1){
       this.openLabelList(noteId);
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
    async openLabelList(noteId) {
      this.selectedNoteId = noteId;
      this.showLabelList = true;
      this.selectedLabels=[];
      try {
        const response = await getAllLabels();
        this.labels = response.data.data.details;
      } catch (error) {
        console.error('Error fetching labels:', error);
      }
      document.addEventListener('click', this.handleClickOutside);

    },
    async toggleLabel(labelId) {

      try {
      const selectedNote = this.reversedNotes.find(note => note.id === this.selectedNoteId);
      const labelExists = selectedNote.noteLabels.some(label => label.id === labelId);

      if (labelExists) {
        console.log("calling remove label from note api");
        await removeLabelFromNote(this.selectedNoteId, labelId);
        selectedNote.noteLabels = selectedNote.noteLabels.filter(label => label.id !== labelId);
      } else {
        console.log("calling add label to note api");
        await addLabelToNote(this.selectedNoteId, labelId);
        selectedNote.noteLabels.push({ id: labelId, label: this.labels.find(label => label.id === labelId).label });
      }

    } catch (error) {
      console.error("Error toggling label:", error);
    }
    },
    saveLabels(noteId) {
      console.log('Selected labels for note', noteId, ':', this.selectedLabels);
      this.closeLabelList();
    },
    closeLabelList() {
      this.showLabelList = false;
      this.selectedNoteId = null;
      document.removeEventListener('click', this.handleClickOutside);

    },
    handleClickOutside(event) {
      const labelList = this.$refs.labelList;
      if (Array.isArray(labelList)) {
    const isOutside = labelList.every(element => !element.contains(event.target));
    if (isOutside) {
      this.saveLabels(this.selectedNoteId);
    }
  } else if (labelList && typeof labelList.contains === 'function' && !labelList.contains(event.target)) {
    this.saveLabels(this.selectedNoteId);
  }
    },
    getNoteLabels(noteId) {
      return this.labels.filter((label) => this.selectedLabels.includes(label.id));
    },
    togglePin(noteId) {
    const note = this.notes.find(note => note.id === noteId);
    if (note) {
      note.isPinned = !note.isPinned;
      this.$emit('notePinned', note);  
    }
  },
  
  },
  watch: {
  selectedNoteId(newNoteId) {
    const selectedNote = this.reversedNotes.find(note => note.id === newNoteId);
    this.selectedLabels = selectedNote ? selectedNote.noteLabels.map(label => label.id) : [];
  }
},

};
</script>

<style scoped>
.masonry-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.note-card2 {
  position: relative;
  z-index: 0;
  overflow: visible !important;
  padding-bottom: 40px;
  margin:10px;
}
.icon-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
}
.check-circle-btn {
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 10000;
}
.pin-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10000;
}
.masonry-item {
  width: 100%;
  margin-bottom: 20px;
  position: relative;

}
.label-list {
  position: absolute ;
  width:100px;
  height:auto;
  padding:0;
  margin:0;
  left:0;
  top:100%;
  background-color: white;
  z-index: 10001;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: visible !important;
  overflow:scroll;
  min-width: 200px;
}
.label-list-item{
  display:flex;
  flex-direction: row;
  align-items: center;
  
}
.v-list-item-content {
  flex-grow: 10;
}
.v-checkbox{
  margin-top: 20px;
}
.label-subheader{
  font-weight: 500;
  padding: 15px;
}
.note-labels {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 10px;
}
.note-label {
  
  background-color: #f1f1f1b9;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 12px;
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
