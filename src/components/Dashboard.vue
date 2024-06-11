<script>
export default {
  data() {
    return {
      drawer:true,
      rail:false,
      selectedItem: 'notes',
      showContent: false,
      items: [
        { icon: 'mdi-lightbulb-outline', title: 'Notes', value: 'notes' },
        { icon: 'mdi-bell-outline', title: 'Reminders', value: 'reminders' },
        { icon: 'mdi-pencil-outline', title: 'Edit', value: 'edit' },
        { icon: 'mdi-archive-outline', title: 'Archive', value: 'archive' },
        { icon: 'mdi-delete-outline', title: 'Bin', value: 'bin' },
      ],
      notes: [
        { date: '03/06/2024', text: 'web' },
        { date: '31/08/2023', text: 'Hello web developer' },
        { date: '22/02/2023', text: 'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
        { date: '21/02/2023', text: 'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
        { date: '02/01/2023', text: 'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
        { date: '01/01/2023', text: 'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.rail = !this.rail;
    },
    toggleContent() {
      this.showContent = true;
    },
    hideContent() {
      console.log("hello");
      this.showContent = false;
    },
  },
};
</script>


<template>
    <v-app>
  <v-app-bar app>
    <v-container fluid class="d-flex align-center">
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <v-btn icon @click="toggleDrawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>



        <v-col cols="auto" class="d-flex align-center">
          <v-btn icon>
            <img src="../../public/keep_2020q4_48dp.png" alt="Keep Logo" class="keep-logo">
          </v-btn>
          <span class="ml-2 font-weight-medium">Fundoo</span>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="12" md="6" class="d-flex justify-center">
            <v-text-field
              flat
              prepend-inner-icon="mdi-magnify"
              variant="solo-filled"
              label="Search"
              class="search-box"
            ></v-text-field>
          </v-col>
  

        <v-spacer></v-spacer>



        <v-col cols="auto">
          <v-btn icon>
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-view-stream</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-grid</v-icon>
          </v-btn>
        </v-col>

        <!-- User Avatar -->
        <v-col cols="auto">
          <v-avatar size="32px">
            <img src="../../public/ProfileImage.png" alt="User Avatar">
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
                v-model="drawer "
                app
                expand-on-hover
                :rail = rail
                >

                <v-list dense nav>
                    <v-list-item
                      v-for="item in items"
                      :key="item.value"
                      :prepend-icon="item.icon"
                      :title="item.title"
                      :class="{ 'active-item': selectedItem === item.value }"
                      @click="selectedItem = item.value"
                    ></v-list-item>
                  </v-list>
              </v-navigation-drawer>
              <v-main>
                <v-container>
                  <div class="take_note">
                    <v-card  class="u-border note-card" >
                      <v-text-field
                      @click="toggleContent"
                        v-if="!showContent"
                        label="Take a note..."
                        density="compact"
                        variant="flat"
                        single-line
                        class="title1"
                        append-inner-icon="mdi-checkbox-outline"
                        append-icon="mdi-checkbox-outline"
                        
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
                          rows="1"
                          label="Take a note..."
                          density="compact"
                          variant="flat"
                          single-line
                          class="compact-text-field"
                          style="margin-top: 10px;"
                        ></v-textarea>
                        <v-row class="mt-3">
                          <v-col>
                            <v-btn icon flat><v-icon>mdi-bell-plus-outline</v-icon></v-btn>
                            <v-btn icon flat><v-icon>mdi-account-plus-outline</v-icon></v-btn>
                            <v-btn icon flat><v-icon>mdi-palette-outline</v-icon></v-btn>
                            <v-btn icon flat><v-icon>mdi-image-outline</v-icon></v-btn>
                            <v-btn icon flat ><v-icon>mdi-archive-outline</v-icon></v-btn>
                            <v-btn icon flat><v-icon>mdi-dots-vertical</v-icon></v-btn>
                          </v-col>
                          <v-col class="d-flex justify-end">
                            <v-btn @click="hideContent" variant="plain">Close</v-btn>
                          </v-col>
                        </v-row>
                      </div>
                  </v-card>
                  </div>
                  
                
                
                  <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3" v-for="note in notes" :key="note.date">
                      <v-card class="note-card2">
                        <v-card-title>{{ note.date }}</v-card-title>
                        <v-card-text>{{ note.text }}</v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-main>
</v-app>
</template>



<style scoped>
.keep-logo {
    height: 40px;
    width: auto;
  }
  .search-box {
    width: 100%;
    height:50px;
  }
  
  .v-text-field .v-input__control{
    max-width: 50%;
    max-height: 20%;
  }
  .main{
    height: 100;
    width:100vw;
  }
  .active-item {
    background-color: rgba(249, 212, 143, 0.867);
    border-radius: 30px; 

  }
  
  .v-list-item--active .v-list-item__content .v-list-item__title {
    color: blue !important;
    
  }
  
  .v-list-item {
    transition: all 0.3s;
  }
  .note-card2{
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .note-card{
    width:700px;
    height:auto;
  }
  
    
  .u-card {
    width: 500px !important;
    height: 150px !important;
  }
  
  .v-input__details {
    display: none;
  }
  
  .u-align-center {
    align-items: center;
    justify-content: space-between;
  }
  
  .ml-auto {
    margin-left: auto;
  }
  
  .u-border {
    
    border-radius: 8px;
    padding: 0;
    cursor: pointer;
    margin-top:20px;
    margin-bottom: 40px;
  }
  .compact-text-field {
    margin: 0;
    padding: 0;
  }
  .compact-textarea {
    margin: 0;
    padding: 0;
  }
  .title1{
    height: 45px;
  }
  .take_note{
    display:flex;
    justify-content: center;
  }
  
</style>
