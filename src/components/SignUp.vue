<script>
  import { ref } from 'vue'

  export default {
    name: 'Login',
    setup() {
      const firstName = ref('')
      const lastName = ref('')
      const username = ref('')
      const password = ref('')
      const confirmPassword = ref('')
      const showPassword = ref(false)
      const form = ref(null)

      const rules = {
        required: value => !!value || 'Required.',
      }

      const handleLogin = () => {
        if (form.value.validate()) {
          alert(
            `First Name: ${firstName.value}, Last Name: ${lastName.value}, Username: ${username.value}, Password: ${password.value}`
          )
        }
      }

      const handleNext = () => {
        // Handle next button action here
      }

      return {
        firstName,
        lastName,
        username,
        password,
        confirmPassword,
        showPassword,
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
      <v-col cols="12" md="8">
        <v-card class="pa-6">
          <v-row>
            <!-- Form Section -->
            <v-col cols="12" md="6">
              <v-img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                contain
                height="30"
                class="mb-4"
                style="display: flex; justify-content: left"
              ></v-img>
              <v-card-title class="headline mb-1 text-center">
                Create your Google account
              </v-card-title>
              <v-form @submit.prevent="handleLogin" ref="form">
                <v-row>
                  <v-col cols="12" sm="6">
                    <div class="input-with-label">
                      <label>First name</label>
                      <v-text-field
                        v-model="firstName"
                        :rules="[rules.required]"
                        required
                        outlined
                        dense
                        class="blue-border"
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div class="input-with-label">
                      <label>Last name</label>
                      <v-text-field
                        v-model="lastName"
                        :rules="[rules.required]"
                        required
                        outlined
                        dense
                        class="blue-border"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
                <div class="input-with-label">
                  <label>Username</label>
                  <v-text-field
                    v-model="username"
                    :rules="[rules.required]"
                    required
                    outlined
                    dense
                    class="blue-border"
                  ></v-text-field>
                  <div class="help-text" align="left">
                    You can use letters, numbers, and periods.
                  </div>
                  <a href="#" class="use-current-email" align="left">
                    Use my current email address instead
                  </a>
                </div>
                <br />
                <v-row>
                  <v-col cols="12" sm="6">
                    <div class="input-with-label">
                      <label>Password</label>
                      <v-text-field
                        v-model="password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[rules.required]"
                        required
                        outlined
                        dense
                        class="blue-border"
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div class="input-with-label">
                      <label>Confirm Password</label>
                      <v-text-field
                        v-model="confirmPassword"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[rules.required]"
                        required
                        outlined
                        dense
                        class="blue-border"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
                <div class="help-text" align="left">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </div>
              </v-form>
              <br />
              <div class="d-flex justify-space-between">
                <span class="forgot-email-text">Sign in instead</span>
                <v-btn color="primary" @click="handleNext">Next</v-btn>
              </div>
            </v-col>
            <!-- Image and Text Section -->
            <v-col cols="12" md="6" class="additional-section">
              <v-img
                src="../assets/logo.svg"
                contain
                height="150"
                class="mb-4"
              ></v-img>
              <div class="additional-section-text">
                <h2>One account, All of google working of you</h2>
              </div>
            </v-col>
          </v-row>
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
    max-width: 800px;
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

  .help-text {
    font-size: 12px;
    color: #5f6368;
    margin-top: -10px;
    margin-bottom: 8px;
  }

  .use-current-email {
    display: block;
    font-size: 12px;
    color: #1a73e8;
    cursor: pointer;
    text-decoration: none;
  }

  .use-current-email:hover {
    text-decoration: underline;
  }

  .additional-section {
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .additional-section-text h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
  }

  .additional-section-text p {
    font-size: 14px;
    color: #5f6368;
    margin-top: 8px;
  }
</style>
