<template>
    <div class="reset-password">
      <h2>Reset Password</h2>
      <form @submit.prevent="resetPassword">
        <div class="form-group">
          <label for="password">Password <span class="required">*</span></label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password <span class="required">*</span></label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Reset Password</button>
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: '',
        confirmPassword: '',
        errorMessage: '',
      };
    },
    methods: {
      resetPassword() {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match!';
        } else {
          this.errorMessage = '';
          // Logic to handle password reset
          // For example, you can make an API call to reset the password here
          console.log('Password reset successfully!');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .reset-password {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1em;
  }
  
  .form-group {
    margin-bottom: 1em;
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  
  .required {
    color: red;
  }
  
  .form-control {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    width: 100%;
    padding: 0.75em;
    border: none;
    border-radius: 4px;
    background-color: #f0ad4e;
    color: #fff;
    font-size: 1em;
  }
  
  .error-message {
    color: red;
    margin-top: 1em;
    text-align: center;
  }
  </style>
  