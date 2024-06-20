<script>
import { addLabels, deleteLabels, updateLabels } from '../Services/LabelService'

export default {
  data() {
    return {
      hoverIndex: null,
      editingIndex: null,
      title: ''
    }
  },
  methods: {
    closeevent() {
      this.$emit('closevent')
    },
    startEditing(index) {
      this.editingIndex = index
    },
    stopEditing() {
      this.editingIndex = null
    },
    addNewLabel(val) {
      console.log('Added Label:' + val)
      const userid = localStorage.getItem('userId')
      const newlabel = {
        label: this.title,
        isDeleted: false,
        userId: userid
      }
      console.log(newlabel)
      addLabels(newlabel)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
      this.$emit('refreshLabel')
      this.title = ''
    },
    editLabel(id, label) {
      const updateLabelData = {
        label: label
      }
      updateLabels(id, updateLabelData)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    },
    deleteLabel(id) {
      deleteLabels(id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
      this.$emit('refreshLabel')
    }
  },
  props: {
    Ilabels: Array
  }
}
</script>

<template>
  <v-card title="Edit labels" class="u-card">
    <div class="d-flex">
      <div class="pa-2 pb-2">
        <v-icon icon="mdi-window-close"></v-icon>
      </div>
      <v-text-field
        v-model.trim="title"
        placeholder="Create new label"
        density="compact"
        variant="flat"
      ></v-text-field>
      <div class="pa-2 pb-2">
        <v-icon @click="addNewLabel(title)" icon="mdi-check"></v-icon>
      </div>
    </div>
    
    <div
      v-for="(item, index) in Ilabels"
      :key="index"
      class="d-flex"
      @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = null"
    >
      <div class="pa-2 pb-2">
        <v-icon
          @click="deleteLabel(item.id)"
          :icon="hoverIndex === index ? 'mdi-trash-can' : 'mdi-label'"
        ></v-icon>
      </div>
      <v-text-field
        v-model="item.label"
        density="compact"
        variant="flat"
        @focus="startEditing(index)"
        @blur="stopEditing"
      ></v-text-field>
      <div class="pa-2 pb-2">
        <v-icon
          @click="editLabel(item.id, item.label)"
          :icon="editingIndex === index ? 'mdi-check' : 'mdi-pencil'"
        ></v-icon>
      </div>
    </div>
    <v-card-actions>
      <v-btn text @click="closeevent()">Done</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.u-card {
  width: 300px !important;
  min-height: 250px !important;
  height: auto !important;
}

.v-dialog > .v-overlay__content > .v-card,
.v-dialog > .v-overlay__content > .v-sheet,
.v-dialog > .v-overlay__content > form > .v-card,
.v-dialog > .v-overlay__content > form > .v-sheet {
  --v-scrollbar-offset: 0px;
  border-radius: 1px;
}

.v-icon {
  color: #808080;
}
</style>