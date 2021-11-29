<template>
      <div id="show-products">
        <h1>{{ product.alcoholType }}</h1>
        <div v-for="product in products" v-bind:key="product.title" class="single-product">
            <router-link class="flex-container" v-bind:to="'/products/' + product.alcoholType.id">
                <div class="card-text">
                    <h3>{{ product.alcoholType.title }}</h3>
                    <p class="product-description-p"> {{ product.alcoholType.description }}</p>
                </div>
              <img :src='product.img' alt="" class="billede">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
        components: {
            Category,
    },
    data () {
        return {
            products: {},
        }
    },
    created() {
        this.$http.get('https://my-json-server.typicode.com/Frisdahl/jsonapi/products/').then(function(data){
            this.products = data.body.slice(0,10);
            console.log(data.body);
        });
    }
}
</script>

<style>

</style>