<template>
    <div class="label-dialog" v-if="isOpen">
      <div class="label-dialog-content">
        <h2>Edit Label</h2>
        <form @submit.prevent="saveLabel">
          <label for="labelName">Label Name:</label>
          <input type="text" id="labelName" v-model="labelName">
          <div class="button-container">
            <button type="button" @click="cancel">Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        labelName: '' // Assuming you have a label name to edit
      };
    },
    methods: {
      open() {
        this.isOpen = true;
        // You can optionally fetch initial data or perform other actions when opening
      },
      close() {
        this.isOpen = false;
      },
      saveLabel() {
        // Here you would typically save the label using an API call or local storage
        // For demo purposes, we'll just log the labelName
        console.log(`Saving label: ${this.labelName}`);
        this.close();
      },
      cancel() {
        // Optionally handle cancel action
        this.close();
      }
    },
    mounted() {
      // You may want to trigger open/close based on props or events
    }
  };
  </script>
  
  <style scoped>
  .label-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure it appears above other content */
  }
  
  .label-dialog-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .button-container {
    margin-top: 20px;
    text-align: right;
  }
  
  .button-container button {
    margin-left: 10px;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .button-container button:first-child {
    background-color: #ccc;
  }
  
  .button-container button:last-child {
    background-color: #007bff;
    color: white;
    border: none;
  }
  </style>
  