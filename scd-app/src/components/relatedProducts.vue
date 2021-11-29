<template>
  <div id="show-products">
    <h2>Relaterende produkter</h2>
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
export default {
  name: "RelatedProducts",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      products: {},
    };
  },
  created() {
    this.$http
      .get(
        "https://scd-app-f740a-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      )
      .then(function (data) {
        this.products = data.body.slice(0, 3);
        console.log(data.body);
      });
  },
};
</script>

<style>
</style>