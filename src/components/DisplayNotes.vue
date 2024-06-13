

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
          <div class="hover-icons">
            <v-btn icon flat><v-icon size="18">mdi-bell-plus-outline</v-icon></v-btn>
            <v-btn icon flat><v-icon size="18">mdi-account-plus-outline</v-icon></v-btn>
            <v-btn icon flat><v-icon size="18">mdi-palette-outline</v-icon></v-btn>
            <v-btn icon flat><v-icon size="18">mdi-image-outline</v-icon></v-btn>
            <v-btn icon flat><v-icon size="18">mdi-archive-outline</v-icon></v-btn>
            <v-menu offset-y>
              <template v-slot:activator="{ props }">
                <v-btn icon flat v-bind="props">
                  <v-icon size="18">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>           
          </div>
          
          
            <v-icon
            v-if="hoveredNote === note.id"
            icon
            class="check-circle-btn" size="24">mdi-check-circle</v-icon>
          
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import { reactive, onMounted } from 'vue';
  import { GetNotesList } from '@/Services/NotesService';
  
  export default {
    data() {
      return {
        notes: [],
        loading: false,
        error: null,
        hoveredNote: null,
        items: [
        { title: 'Delete note' },
        { title: 'Add label' },
        { title: 'Add drawing' },
        { title: 'Make a copy' },
        {title:'Show tick boxes'},
        {title:'Version history'},
      ],
      };
    },
    computed:{
      reversedNotes(){
        return[...this.notes].reverse();
      },
    },
    methods: {
      async fetchNotes() {
        try {
          const response = await GetNotesList();
          console.log(response);
          this.notes = response.data.data;
        } catch (error) {
          this.error = error.message;
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      this.fetchNotes();
    },
  };
  </script>
  
  <style scoped>
  .note-card2 {
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    padding-bottom: 40px;
    z-index: 0;
  }
  
  .hover-icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 5px;
  }
  
  .note-card2:hover .hover-icons {
    opacity: 1;
  }
  
  .check-circle-btn {
    position: absolute;
    top: -12px; /* Adjust to position the icon outside the card */
    left: -12px; /* Adjust to position the icon outside the card */
    z-index:10;
  }
  </style>
  