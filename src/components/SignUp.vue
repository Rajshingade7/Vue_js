<script>
 import { ref } from 'vue'
import { signupUser } from '../Services/UserService' // Make sure to adjust the path as needed
export default {
  
  name: 'Signup',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const showPassword = ref(false)
    const form = ref(null)

    const rules = {
      required: value => !!value || 'Required.',
      minLength: v => v.length >= 8 || 'Password must be at least 8 characters long.',
      confirmPassword: value => value === password.value || 'Passwords must match.',
      email: value => {
        const pattern = /^[a-zA-Z0-9_]+$/
        return pattern.test(value) || 'Invalid email. Only letters, numbers, and underscores are allowed.'
      }
    }

    const handleSignup = async () => {
      if (form.value.validate()) {
        try {
          const reqData = {
            "firstName": firstName.value,
            "lastName": lastName.value,
            "email": email.value,
            "password": password.value,
            "service":"advance"
          }
          console.log(reqData);
          const response = await signupUser(reqData)
          alert('Signup successful')
          console.log('Response:', response)
        } catch (error) {
          alert('Signup failed')
          console.error('Error:', error)
        }
      }
    }

    const handleNext = () => {
      // Handle next button action here
    }

    return {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      showPassword,
      handleSignup,
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
              <v-form @submit.prevent="handleSignup" ref="form">
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
                    v-model="email"
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
                        :rules="[rules.required, rules.minLength]"
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
                        :rules="[rules.required, rules.confirmPassword]"
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
                <br />
                <div class="d-flex justify-space-between">
                  <span class="forgot-email-text">Sign in instead</span>
                  <v-btn color="primary" type="submit">Next</v-btn>
                </div>
              </v-form>
            </v-col>

            <v-col cols="12" md="6" class="additional-section">
              <v-img
                
                src="../../public/Screenshot (10).png" alt="Signup"
                contain
                height="150"
                class="mb-4 additionalimage"
              ></v-img>
              <div class="additional-section-text">
                <h2>One account, All of Google working for you</h2>
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
  .additionalimage{
    width:60%;
    max-height:40%;
  }
  @media(max-width: 800px) {
    .additional-section{
      display:none;
    }
    
  }
</style>
