<template>
    <v-container class="take_note">
      <v-card class="u-border note-card">
        <v-text-field
          @click="toggleContent"
          v-if="!showContent"
          

          label="Take a note..."
          density="compact"
          variant="flat"
          single-line
          class="title1"
          append-inner-icon="mdi-checkbox-outline"
          
        > 
      </v-text-field>
        <div v-else>
          <v-text-field
            
            label="Title"
            density="compact"
            variant="flat"
            single-line
            class="compact-text-field"
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
          <v-row class="mt-0">
            <v-col>
              <v-btn icon flat><v-icon>mdi-bell-plus-outline</v-icon></v-btn>
              <v-btn icon flat><v-icon>mdi-account-plus-outline</v-icon></v-btn>
              <v-btn icon flat><v-icon>mdi-palette-outline</v-icon></v-btn>
              <v-btn icon flat><v-icon>mdi-image-outline</v-icon></v-btn>
              <v-btn icon flat><v-icon>mdi-archive-outline</v-icon></v-btn>
              <v-btn icon flat><v-icon>mdi-dots-vertical</v-icon></v-btn>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn @click="hideContent" variant="plain">Close</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
       
      
        showContent: false,
      };
    },
    methods: {
      toggleContent() {
        this.showContent = true;
      },
      hideContent() {
        this.showContent = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .note-card {
    
    width: 600px;
    height:auto;
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
  </style>


