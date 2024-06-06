
<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Handle login logic here
    }
  }
};
</script>
<template>
  <div class="login-container">
    <div class="login-box">
      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" class="logo">
      <h2>Sign in</h2>
      <p>Use your Google Account</p>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <input type="email" v-model="email" placeholder="Email or phone" required>
        </div>
        <div class="input-group">
          <input type="password" v-model="password" placeholder="Enter your password" required>
        </div>
        <button type="submit" class="login-button">Next</button>
      </form>
      <div class="links">
        <a href="#">Forgot email?</a>
        <a href="#">Create account</a>
      </div>
    </div>
  </div>
</template>



<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.logo {
  width: 92px;
  margin-bottom: 20px;
}

h2 {
  margin: 0;
  margin-bottom: 10px;
}

p {
  margin: 0;
  margin-bottom: 20px;
  color: #555;
}

.input-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #357ae8;
}

.links {
  margin-top: 20px;
}

.links a {
  color: #4285f4;
  text-decoration: none;
  margin: 0 5px;
}

.links a:hover {
  text-decoration: underline;
}
</style>
