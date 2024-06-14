<!-- <template>
    <v-row class="">
      <v-col>
        <v-btn icon flat @click="handleIconClick('bell')"><v-icon size="18">mdi-bell-plus-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('account')"><v-icon size="18">mdi-account-plus-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('palette')"><v-icon size="18">mdi-palette-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('image')"><v-icon size="18">mdi-image-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('archive')"><v-icon size="18">mdi-archive-outline</v-icon></v-btn>
        
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
                @click="handleItemClick(index)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>      </v-col>
    </v-row>
  </template>
  
  <script>
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
  },
  methods: {
    handleIconClick(action) {
      this.$emit('iconClick', action);
    },
    handleItemClick(index) {
      this.$emit('itemClick', index);
    },
  },
    name: 'NoteIcons',
  };
  </script>
  
  <style scoped>
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
    left: 0;
    border:2px solid black;
  }
  
  .hover-icons:hover {
    opacity: 1;
  }
  </style>
   -->


   <template>
    <v-row class="icon-row">
      <v-col class="d-flex">
        <v-btn icon flat @click="handleIconClick('bell')"><v-icon size="18">mdi-bell-plus-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('account')"><v-icon size="18">mdi-account-plus-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('palette')"><v-icon size="18">mdi-palette-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('image')"><v-icon size="18">mdi-image-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('archive')"><v-icon size="18">mdi-archive-outline</v-icon></v-btn>
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
              @click="handleItemClick(index)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </template>
  
  <script>
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
    },
    methods: {
      handleIconClick(action) {
        this.$emit('iconClick', action);
      },
      handleItemClick(index) {
        this.$emit('itemClick', index);
      },
    },
    name: 'NoteIcons',
  };
  </script>
  
  <style scoped>
  .icon-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    bottom:0;
    left:0;
  }
  </style>
  