<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>

export default {

  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  width: 375px;
  height: 100vh;
  background-color: #0c0c0c;
  font-family: "poppins";
}

#show-products a {
  text-decoration: none;
  color: #fff;
}

h1 {
  font-family: "Poppins";
  font-size: 2em;
  font-weight: 600;
  color: #f3f3f3;
}

h2 {
  font-size: 1.5em;
  color: #fff;
}

h3 {
  font-size: 13px;
  color: #fff;
}

p {
  color: #fff;
  font-size: 10px;
}

article {
  font-size: 12px;
  line-height: 28px;
}

input {
  border-radius: 8px;
  background-color: #fff;
  font-family: "poppins";
  font-size: 15px;
  font-weight: 600;
  border: none;
}

button {
  font-size: 15px;
  font-weight: 600;
  background-color: #3b95ff;
  width: 235px;
  height: 50px;
  border-radius: 8px;
  color: #fff;
  border: none;
}
</style>
