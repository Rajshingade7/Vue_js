<script>
import { ref } from 'vue'
// import { forgotUser } from '../Services/UserService' 

export default {
  name: 'Forgot',
  setup() {
    const email = ref('')
    const form = ref(null)

    const rules = {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    }

    const handleForgot = () => {
      if (form.value.validate()) {
        const reqData = {
          email: email.value,
        };

        forgotUser(reqData)
          .then(data => {
            console.log(data);
            alert('Password reset link has been sent to your email.');
            console.log('Response:', data);
          })
          .catch(error => {
            alert('Failed to send reset link');
            console.error('Error:', error);
          });
      }
    }

    return {
      email,
      handleForgot,
      rules,
      form,
    }
  },
}
</script>

<template>
  <v-container class="forgot-container" align="center" fluid>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="pa-6">
          <v-img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            contain
            height="30"
            class="mb-4"
          ></v-img>
          <v-card-title class="headline mb-1 text-center">Account recovery</v-card-title>
          <v-card-subtitle class="mb-6 text-center subtitle">
            Recover your Google Account
          </v-card-subtitle>
          <v-form @submit.prevent="handleForgot" ref="form">
            <v-text-field
              variant="outlined"
              label="Email or phone"
              v-model="email"
              :rules="[rules.required, rules.email]"
              required
              outlined
              dense
              class="blue-border mb-4"
            ></v-text-field>
            <v-btn color="primary" @click="handleForgot">Next</v-btn>
          </v-form>
          <div class="additional-links mt-4">
            <div class="forgot-email-text">
              Forgot email? <a href="#" class="forgot-email-link">Get help here</a>.
            </div>
            <div class="need-help-text mt-2">
              <a href="#" class="need-help-link">Need further help?</a>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.forgot-container {
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
  width: 100%;
}

.v-btn.text {
  color: #1a73e8;
}

.forgot-email-text, .need-help-text {
  text-transform: none;
  color: #1a73e8;
  cursor: pointer;
}

.forgot-email-link, .need-help-link {
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

.mb-4 {
  margin-bottom: 1rem !important;
}

.mt-4 {
  margin-top: 1rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}
</style>
