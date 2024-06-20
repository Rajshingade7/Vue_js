<script>
import { createNewNote } from '@/Services/NotesService';
import NoteIcons from '@/components/NoteIcons.vue';
export default {
  components:{
    NoteIcons,
  },
  data() {
    return {
      showContent: false,
      noteTitle: '',
      noteText: '',
      selectedColor:'',
     
    };
  },
  methods: {
    toggleContent() {
      this.showContent = true;
    },
    hideContent() {
      this.showContent = false;
    },
    handleColorSelected(color){
       this.selectedColor=color;
       console.log(this.selectedColor);
    },
    async handleClickOutside() {
      if (this.showContent) {
        const reqData = {
          title: this.noteTitle,
          description: this.noteText,
          color:this.selectedColor,
        };
        try {
          await createNewNote(reqData);
          console.log(this.selectedColor,"here inside of handleclickoutside");
          this.$emit('noteCreated')
          this.noteTitle = '';
          this.noteText = '';
          this.selectedColor='';
          this.hideContent();
        } catch (error) {
          console.error("Failed to create note", error);
        }
      }
    },
   
    
    checkContent() {
      if (this.noteTitle || this.noteText) {
        this.handleClickOutside();
      } else {
        this.hideContent();
      }
    },
  },
  
};
</script>

<template>
  <v-container class="take_note" >
    <v-card class="u-border note-card" :style="{backgroundColor:selectedColor}" >
      <v-text-field
        @click="toggleContent"
        v-if="!showContent"
        label="Take a note..."
        density="compact"
        variant="flat"
        single-line
        class="title1"
        >
        <template #append-inner >
          <v-icon class="innertitleicon">mdi-checkbox-outline</v-icon>
          <v-icon class="innertitleicon">mdi-brush-outline</v-icon>
          <v-icon class="innertitleicon">mdi-image-outline</v-icon>
        </template>
      </v-text-field>
      <div v-else>
        <v-text-field
          v-model="noteTitle"
          label="Title"
          density="compact"
          variant="flat"
          single-line
          class="compact-text-field"
          append-inner-icon="mdi-pin-outline"
        ></v-text-field>
        <v-textarea
          v-model="noteText"
          rows="1"
          label="Take a note..."
          density="compact"
          variant="flat"
          single-line
          class="compact-text-field"
          style="margin-top: 10px;"
        ></v-textarea>
       <v-row class="icon-close-row">
        <v-col class="d-flex align-center">
          <note-icons class="note-icons" @colorSelected="handleColorSelected"></note-icons>
        </v-col>         
         <v-col class="d-flex justify-end align-center">
            <v-btn @click="checkContent" variant="plain">Close</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>


<style scoped>
.note-card {
  width: 600px;
  height: auto;
}
.u-border {
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px;
}
.title1 {
  height: 45px;
}
.take_note {
  display: flex;
  justify-content: center;
}
.compact-text-field {
  margin: 0;
  padding: 0;
}
.icon-close-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
.note-icons {
  display: flex;
  align-items: center;
}
.innertitleicon {
  margin-right: 20px;
}
</style>