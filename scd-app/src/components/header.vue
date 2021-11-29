<template>
        <header>
            <a href="/" id="logo-a"><img src="../assets/logo.png" alt="" id="logo"></a>
            <Slide right class="slide">
                <a href="/" id="home"><span>Forside</span></a>
                <a href="/" id="øl"><span>Øl</span></a>
                <a href="/" id="Whisky"><span>Whisky</span></a>
                <a href="/" id="Absinthe"><span>Absinthe</span></a>
                <a href="/" id="Gin"><span>Gin</span></a>
                <a href="/" id="Nyt"><span>Nyt</span></a>
            </Slide>
        </header>
</template>

<script>
import {Slide} from 'vue-burger-menu';

export default {
  name: 'Header',
  components: {
      Slide,
  }
}

</script>

<style>

header {
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 72px;
}

.bm-burger-bars {
    background-color: #fff;
    border-radius: 10px;

}

.bm-overlay {
    background: rgba(0, 0, 0, 1);
}

.bm-burger-button {
    top: 24px;
    display: flex;
    align-items: center;
    color: #fff;
}

.bm-menu {
    background-color: #0C0C0C;
}


#logo {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

#logo-menu {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0px;
    margin: 0px;
}

.menu {
    margin-top: 10px;
    height: 55px;
    width: 235px;
    border-radius: 20px;
    border: none;
    background-color: #5c677D;
    font-size: 20px;
    font-family: 'poppins';
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 500;
    color: #ffffff;
}

#home {
    color: #fff;
}

a {
    font-size: 32px;
}

#logo-a {
    font-size: 0px;
}

</style>