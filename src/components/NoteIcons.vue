<template>
  <v-row class="icon-row">
    <v-col class="iconcol">
      <div class="allicon">
        <v-icon size="18" class="icon-btn" @click="handleIconClick('bell')" >mdi-bell-plus-outline</v-icon>
        <v-icon size="18" class="icon-btn" @click="handleIconClick('account')">mdi-account-plus-outline</v-icon>
        <v-menu v-model="showColorPicker" offset-y>
          <template v-slot:activator="{ props }">
            <v-icon size="18" class="icon-btn" v-bind="props" v-on="on">mdi-palette-outline</v-icon>
          </template>
          <v-list class="color-list">
            <v-list-item v-for="(color, index) in colors" :key="index" class="color-list-item" @click="selectColor(color)">
              <v-avatar size="24">
                <v-icon size="24" :color="color">mdi-circle</v-icon>
              </v-avatar>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-icon size="18" class="icon-btn" @click="handleIconClick('image')" >mdi-image-outline</v-icon>
        <v-icon size="18" class="icon-btn" @click="archiveNote" >mdi-archive-outline</v-icon>
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-icon size="18" class="icon-btn" v-bind="props" >mdi-dots-vertical</v-icon>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index" @click="handleItemClick(index)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      
    </v-col>
  </v-row>
</template>
  
  <script>
  import { changeColorForNote } from '@/Services/NotesService';
  export default {
    props: {
      items: {
        type: Array,
        default: () => [
          { title: 'Delete note' },
          { title: 'Add label' },
          { title: 'Add drawing' },
          { title: 'Make a copy' },
          { title: 'Show tick boxes' },
          { title: 'Version history' },
        ],
      },
      colors: {
      type: Array,
      default: () => [
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#FFFF00',
        '#FF00FF',
        '#00FFFF',
        '#FFA500',
        '#800080',
        '#008000',
        '#808000',
        '#800000',
        '#008080',
        '#FFC0CB',
        '#800000',
        '#000080',
        '#808080',
        '#FFFFFF',
        '#000000',
        '#FFD700',
        '#8B4513',
      ],
    },
    noteId:{
      type: String,
      required: true,
    },
    },
    data() {
      return {
        showColorPicker: false,
        selectedColor:'',
 
      };
    },
    methods: {
      handleIconClick(action) {
        if (action === 'palette') {
          this.showColorPicker = !this.showColorPicker;   
        
        }
        else if(action==='archive'){
          this.archiveNote();
        } 
        else {
          this.$emit('iconClick', action);
        }
      },
      handleItemClick(index) {
        if(index===0){
          this.$emit('itemClick', index);
        }
        
      },
      async selectColor(color) {
        this.selectedColor=color;
        try {
          if(this.noteId){
            console.log(noteIdList,"noteidlist");
            const response = await changeColorForNote({
          noteIdList: [this.noteId],
          color,
        });
        console.log('Note color changed:', response);

          }
        

        this.$emit('colorSelected', color);
      } catch (error) {
        console.error('Error changing note color:', error);
      }
      this.showColorPicker = false;

      },
        
      archiveNote() {
        this.$emit('noteArchived');
      },

    },
    name: 'NoteIcons',
  };
  </script>

  <style scoped>
  .icon-row {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    bottom: 0;
    left: 0;
  }
  .icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .color-list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0;
  }
  .color-list-item {
    margin: 0 0;
  }
  .iconcol{
    display:flex;
    padding:10px;
  }
  .allicon{
    display:flex;
    justify-content:space-around;
    width:100%;
  }
  </style>
