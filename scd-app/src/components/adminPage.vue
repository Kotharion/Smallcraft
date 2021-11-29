<template>
  <form class="admin-form" @submit.prevent="Login">
    <div id="admin-logo-img">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="admin-login">
      <h2 id="login-h2">Admin</h2>
      <input
        type="email"
        class="input"
        id="username"
        placeholder="Email"
        v-model="email"
      />
      <input
        type="password"
        class="input"
        id="password"
        v-model="password"
        placeholder="Kodeord"
      />
      <div class="flex">
        <a class="cta-help" id="ny-bruger">Ny bruger</a>
        <router-link to="/admin/forgot"> Glemt adgangskode?</router-link>
      </div>
        <input type="submit" value="Login" class="CTA-1" id="admin-button"/>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase/compat/auth';
import {ref} from 'vue';

export default {
  name: "AdminPage",
  components: {},

  data() {
    return {
      id: this.$route.params.id,
      products: {},

    };
  },

  setup() {
    const email = ref("");
    const password = ref("");
  

  const Login = () => {
    firebase
        .auth()
        .signInWithEmailAndPasswords(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => alert(err.message))
    }

    return {
      Login, 
      email,
      password,
      
    }
  }
};
</script>

<style scoped>
#admin-logo-img {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 55px;
  height: 100px;
  margin-top: 100px;
}

.admin-login {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.input {
  height: 50px;
  width: 235px;
  border: none;
}

#username {
  margin-bottom: 15px;
  background-image: url(../assets/user.svg);
  background-repeat: no-repeat;
  background-position: center left;
  background-position: calc(0% + 10px);
  padding-left: 45px;
}

#password {
  background-image: url(../assets/lock.svg);
  background-repeat: no-repeat;
  background-position: center left;
  background-position: calc(0% + 10px);
  padding-left: 45px;
}

#login-h2 {
  text-align: center;
  margin-bottom: 10px;
}

.CTA-1 {
  font-size: 15px;
  font-weight: 600;
  background-color: #3b95ff;
  width: 235px;
  height: 50px;
  border-radius: 8px;
  color: #fff;
}

.flex {
  display: flex;
  justify-content: space-between;
  width: 235px;
  padding-top: 5px;
  margin-bottom: 20px;
}

.flex a {
  color: #fff;
  font-size: 10px;
}
</style>