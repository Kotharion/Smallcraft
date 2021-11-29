<template>
  <div id="nav-bar">
    <a href="#" class="a-menu">Øl</a>
    <a href="#" class="a-menu">Whisky</a>
    <a href="#" class="a-menu">Absinthe</a>
    <a href="#" class="a-menu">Gin</a>
    <a href="#" class="a-menu">Nyt</a>
    <img src="../assets/logo.png" alt="" />
  </div>
</template>




<script scoped>
export default {
  name: "NavBar",
  components: {},
};
</script>

<style>
#nav-bar {
  position: absolute;
  top: 0px;
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: #0c0c0c;
  opacity: 100%;
  align-items: center;
  display: none;
}

.a-menu {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid black;
  border-bottom: 1px solid #f3f3f3;
  width: 100px;
  text-align: center;
  line-height: 50px;
  margin-bottom: 10px;
  margin-top: 25px;
}

img {
  margin-top: 25px;
  width: 75px;
}
</style>
