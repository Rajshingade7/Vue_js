<template>
  <v-dialog v-model="localDialog" max-width="600px">
    <v-card> 
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="localNote.title"
                label="Title"
                required
                variant="flat"
                rows="1"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="localNote.description"
                label="Description"
                rows="1"
                required
                variant="flat"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="saveNote">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { updateNote } from '@/Services/NotesService';

export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
    dialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      localNote: { ...this.note },
      localDialog: this.dialog,
    };
  },
  watch: {
    dialog(val) {
      this.localDialog = val;
    },
    localDialog(val) {
      this.$emit('update:dialog', val);
    },
    note(val) {
      this.localNote = { ...val };
    },
  },
  methods: {
    async saveNote() {
      try {
        const payload = {
          noteId: this.localNote.id,
          title: this.localNote.title,
          description: this.localNote.description,
        };
        await updateNote(payload);
        this.$emit('noteUpdated', this.localNote);
        this.closeDialog();
      } catch (error) {
        console.error('Error updating note:', error);
      }
    },
    closeDialog() {
      this.localDialog = false;
    },
  },
};
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
