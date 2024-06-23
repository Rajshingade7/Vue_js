<template>
    <div v-if="visible" class="label-popup">
      <v-card>
        <v-card-title>
          <span class="headline">Label note</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="labelName"
            label="Enter label name"
          ></v-text-field>
          <v-list>
            <v-list-item v-for="label in labels" :key="label.id">
              <v-checkbox
                :input-value="selectedLabels.includes(label.id)"
                @change="toggleLabel(label.id)"
              ></v-checkbox>
              <v-list-item-content>{{ label.label }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveLabels">Save</v-btn>
          <v-btn @click="closePopup">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  <script>
  import { getAllLabels } from '@/Services/LabelService';
  
  export default {
    props: {
      noteId: {
        type: Number,
        required: true,
      },
      visible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        labelName: '',
        labels: [],
        selectedLabels: [],
      };
    },
    watch: {
      visible(val) {
        if (val) {
          this.fetchLabels();
        }
      },
    },
    methods: {
      async fetchLabels() {
        try {
          const response = await getAllLabels();
          this.labels = response.data.data.details;
          console.log(response);
        } catch (error) {
          console.error('Error fetching labels:', error);
        }
      },
      toggleLabel(labelId) {
        const index = this.selectedLabels.indexOf(labelId);
        if (index === -1) {
          this.selectedLabels.push(labelId);
        } else {
          this.selectedLabels.splice(index, 1);
        }
      },
      async saveLabels() {
        this.$emit('saveLabels', this.selectedLabels);
        this.closePopup();
      },
      closePopup() {
        this.$emit('update:visible', false);
      },
    },
  };
  </script>
  
  <style scoped>
  .label-popup {
    position: absolute;
    z-index: 1000;
    top: 10px;
    right: 10px;
    width: 250px;
  }
  </style>
  