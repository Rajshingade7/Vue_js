

   <template>
    <v-row class="icon-row">
      <v-col class="d-flex">
        <v-btn icon flat @click="handleIconClick('bell')"><v-icon size="18">mdi-bell-plus-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('account')"><v-icon size="18">mdi-account-plus-outline</v-icon></v-btn>
        <v-btn icon flat @click="handleIconClick('palette')" ref="paletteBtn"><v-icon size="18">mdi-palette-outline</v-icon></v-btn>
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
    data(){
      return{
        showColorPicker: false,
        colors: [
        '#FF0000', // Red
        '#00FF00', // Green
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
        '#FFA500', // Orange
        '#800080', // Purple
        '#008000', // Dark green
        '#808000', // Olive
        '#800000', // Maroon
        '#008080', // Teal
        '#FFC0CB', // Pink
        '#800000', // Brown
        '#000080', // Navy
        '#808080', // Gray
        '#FFFFFF', // White
        '#000000', // Black
        '#FFD700', // Gold
        '#8B4513', // Saddle brown
      ],
      }
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
  