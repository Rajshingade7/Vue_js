
<script>
  import { ref } from 'vue'

  export default {
    name: 'Login',
    setup() {
      const email = ref('')
      const password = ref('')
      const form = ref(null)

      const rules = {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      }

      const handleLogin = () => {
        if (form.value.validate()) {
          alert(`Email: ${email.value}, Password: ${password.value}`)
        }
      }

      const handleNext = () => {
        // Handle next button action here
      }

      return {
        email,
        password,
        handleLogin,
        handleNext,
        rules,
        form,
      }
    },
  }
</script>

<template>
  <v-container class="login-container" align="center" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-6">
          <v-img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            contain
            height="30"
            class="mb-4"
             style="display: flex; justify-content: left;"
          ></v-img>
          <v-card-title class="headline mb-1 text-center">Sign in</v-card-title>
          <v-card-subtitle class="mb-6 text-center subtitle">
            Use your Google Account
          </v-card-subtitle>
          <v-form @submit.prevent="handleLogin" ref="form">
            <div class="input-with-label">
              <label>Email or phone</label>
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                required
                outlined
                dense
                class="blue-border"
              ></v-text-field>
            </div>
            <div class="input-with-label">
              <label>Password</label>
              <v-text-field
                v-model="password"
                :rules="[rules.required]"
                required
                outlined
                dense
                class="blue-border"
                type="password"
              ></v-text-field>
            </div>
          </v-form>
          <div class="forgot-email" align="left">
            <span class="forgot-email-text">Forgot email?</span>
            <br/><br>
            <span class="additional-text">
              Not your computer? Use Guest mode to sign in privately.
              <br />
              <a href="#" class="learn-more">Learn more</a>
            </span>
          </div>
          <br>
          <div class="d-flex justify-space-between">
            <span class="forgot-email-text">Create Account</span>
            <v-btn color="primary" @click="handleNext">Next</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

  .login-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .v-card {
    max-width: 400px;
    width: 100%;
  }

  .text-center {
    text-align: center;
  }

  .subtitle {
    font-weight: bold;
  }

  .v-btn {
    text-transform: none;
  }

  .v-btn.text {
    color: #1a73e8;
  }

  .forgot-email-text {
    text-transform: none;
    color: #1a73e8;
    cursor: pointer;
  }

  .additional-text {
    display: block;
    font-size: 12px;
    color: #5f6368;
    margin-top: 8px;
  }

  .learn-more {
    text-decoration: none;
    color: #1a73e8;
  }

  .input-with-label {
    position: relative;
    margin-bottom: 16px;
  }

  .input-with-label label {
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: white;
    padding: 0 4px;
    font-size: 12px;
  }

  .blue-border .v-text-field--outlined .v-input__control {
    border-color: #1a73e8;
  }

  .forgot-email-btn {
    color: #1a73e8;
  }

  .forgot-email-btn:hover {
    background-color: transparent;
    color: #1a73e8;
  }
</style>
