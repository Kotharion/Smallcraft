<template>
  <div id="forgottenpassword">
    <div class="lockimg">
      <img src="../assets/lock.png" alt="" id="forgot-lock" />
    </div>

    <div class="new-password">
      <h2 id="nopass">Forgot Password?</h2>
      <h3>Type your email to reset your password</h3>

      <input type="text" class="input-email" value="E-mail Adress" />
      <router-link to="/admin/">
        <button type="submit" class="CTA-1" id="send-password">
          Send New Password
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgottenPassword",
};
</script>

<style>
#forgottenpassword {
  margin: 50px auto;
  width: 300px;
  display: columns;
}

.lockimg {
  text-align: center;
  margin-bottom: 10%;
}

#nopass {
  margin-bottom: 20px;
}

.new-password {
  display: columns;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.CTA-1 {
  font-size: 15px;
  font-weight: 600;
  background-color: #3b95ff;
  width: 235px;
  height: 50px;
  border-radius: 8px;
  color: #fff;
  margin-top: 30px;
}

.input-email {
  height: 50px;
  width: 305px;
  border: none;
  margin-top: 12px;
  padding-left: 15px;
}

#forgot-lock {
  height: 100px;
}
</style>