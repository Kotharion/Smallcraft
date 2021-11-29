<template>
  <div id="show-products">
    <Header></Header>
    <h1 id="show-products">Nyligt tilføjet</h1>
    <div
      v-for="product in products"
      v-bind:key="product.title"
      class="single-product"
    >
      <router-link class="flex-container" v-bind:to="'/products/' + product.id">
        <div class="card-text">
          <h3>{{ product.title }}</h3>
          <p class="product-description-p">{{ product.description }}</p>
        </div>
        <img :src="product.img" alt="" class="billede" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      products: {},
    };
  },
  created() {
    this.$http
      .get(
        "https://scd-app-f740a-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      )
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        var productsArray = [];
        for (let key in data) {
          data[key].id = key;
          productsArray.push(data[key]);
        }
        this.products = productsArray;
      });
  },
};
</script>

<style scoped>
#show-products h1 {
  margin-top: 25px;
}

.single-product {
  padding: 20px;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  background-color: #171c24;
  cursor: pointer;
  font-size: 12px;
  text-decoration: none;
  height: 150px;
  overflow: hidden;
  border-radius: 20px;
  width: 300px;
}

.product-description-p {
  padding-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  max-height: 60px;
}

#show-products {
  margin: 0px auto;
  width: 300px;
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.billede {
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 20px;
  object-fit: cover;
}

.card-text {
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>