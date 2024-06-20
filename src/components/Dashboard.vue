<script>
import GetAllNotes from './GetAllNotes.vue'
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
     
      
    };
    
  },
  components: {
      GetAllNotes
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
    selectItem(value) {
      this.selectedItem = value;
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

        <v-col cols="12" md="6" class="search">
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
                      @click="selectItem(item.value)"
                    ></v-list-item>
                  </v-list>
              </v-navigation-drawer>
              <v-main>
                <GetAllNotes :selected-item="selectedItem"/>
              </v-main>
</v-app>
</template>



<style scoped>

.keep-logo {
    height: 40px;
    width: auto;
  }
  .search{
    display: flex;
    justify-content:center ;
    height: 60px;
  }
  .search-box .v-input__control {
    height: 20px; 
  }
  .search-box input {
    font-size: 14px; 
    padding: 8px; 
    height: 20px;  
  }
  element.style {
    height: 45px!important;
    margin-top: 10px!important;
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
    border-radius: 0 30px 30px 0;
    left:-5px;
    top:0;
    width:calc(100%+100px);
  }
  
  .v-list-item--active .v-list-item__content .v-list-item__title {
    color: blue !important;
    
  }
  
  .v-list-item {
    transition: all 0.3s;
  }
  
  
    

  
  .v-input__details {
    display: none;
  }
  
  
  
  .ml-auto {
    margin-left: auto;
  }
  
  
 
  
</style>
