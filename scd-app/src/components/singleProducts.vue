<template>
  <div id="single-blog">
    <Header></Header>
    <img :src="products.img" alt="" class="single-product-img" />
    <h2 id="single-product-title">{{ products.title }}</h2>
    <div class="flex">
      <p class="product-p">Alkohol type: {{ products.alcoholType }}</p>
      <p class="product-p">Dato: {{ products.date }}</p>
    </div>
    <article>{{ products.description }}</article>
    <RelatedProducts></RelatedProducts>
  </div>
</template>

<script>
import RelatedProducts from "./relatedProducts.vue";
import Header from "./header.vue";

export default {
  components: {
    RelatedProducts,
    Header,
  },
  data() {
    return {
      id: this.$route.params.id,
      products: {},
    };
  },
  created() {
    this.$http
      .get(
        "https://scd-app-f740a-default-rtdb.europe-west1.firebasedatabase.app/products/" +
          this.id +
          ".json"
      )
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        this.products = data;
      });
  },
};
</script>

<style>
#single-product-title {
  border-bottom: 1px solid #2e2e2e;
  padding-bottom: 10px;
}

.single-product-img {
  margin-top: 25px;
  width: 300px;
  height: 150px;
  border-radius: 10px;
}

.flex {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.product-img {
  width: 80vw;
  height: 150px;
  background-color: #fff;
  display: flex;
  margin: 25px auto;
  border-radius: 10px;
}

#single-blog {
  width: 80vw;
  margin: 0 auto;
}

#single-blog h2 {
  width: 80vw;
}

#single-blog article {
  color: #fff;
  font-size: 12px;
  margin-top: 20px;
}

.product-p {
  color: #6e6e6e;
  font-size: 10px;
}

#related-products {
  position: absolute;
  bottom: 150px;
}

.product-list-container {
  position: absolute;
  top: 612px;
}
</style>