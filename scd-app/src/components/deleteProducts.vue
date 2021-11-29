<template>
  <div id="listofproducts">
    <AdminHeader></AdminHeader>
    <div class="beer-list">
      <h2 class="adminTitle">Øl</h2>
      <div type="text" class="product-container" v-for="product in products" v-bind:key="product-title">

        <span class="product-titel">{{ product.title }} </span>
        <div class="svg-container">
        <router-link to="productslist/addProduct"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs></defs><g transform="translate(-620 -252)"><path d="M14.19,0H5.81C2.17,0,0,2.17,0,5.81v8.37C0,17.83,2.17,20,5.81,20h8.37c3.64,0,5.81-2.17,5.81-5.81V5.81C20,2.17,17.83,0,14.19,0ZM8.95,15.51a2.578,2.578,0,0,1-1.24.63l-2.46.35a2.452,2.452,0,0,1-.27.02,1.48,1.48,0,0,1-1.06-.41,1.526,1.526,0,0,1-.39-1.34l.35-2.46a2.454,2.454,0,0,1,.63-1.24L8.97,6.6c.08.21.16.42.27.66.1.21.21.43.33.63a5,5,0,0,0,.3.45,3.728,3.728,0,0,0,.32.42,1.363,1.363,0,0,0,.11.14,6.538,6.538,0,0,0,.79.79.917.917,0,0,0,.13.12c.15.12.3.24.43.33a3.738,3.738,0,0,0,.49.32c.2.12.42.23.64.34s.44.19.65.26Zm6.42-6.42-.92.93a.31.31,0,0,1-.22.09.248.248,0,0,1-.09-.01A6.2,6.2,0,0,1,9.91,5.87a.3.3,0,0,1,.08-.3l.93-.93c1.52-1.52,2.97-1.49,4.46,0a3.209,3.209,0,0,1,1.13,2.25A3.243,3.243,0,0,1,15.37,9.09Z" transform="translate(622 254)"/><path class="edit-svg" d="M0,0H24V24H0Z" transform="translate(644 276) rotate(180)"/></g></svg></router-link>
        <router-link to=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs></defs><g transform="translate(-108 -188)"><path d="M18.824,3.98c-1.61-.16-3.22-.28-4.84-.37V3.6l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3H8.434C6.1,0,5.884,1.32,5.724,2.29l-.21,1.28c-.93.06-1.86.12-2.79.21l-2.04.2a.748.748,0,1,0,.14,1.49l2.04-.2a79.729,79.729,0,0,1,15.82.21h.08a.757.757,0,0,0,.75-.68A.766.766,0,0,0,18.824,3.98Z" transform="translate(110.246 189.25)"/><path d="M14.8.39a1.264,1.264,0,0,0-.91-.39H1.252a1.248,1.248,0,0,0-.91.39A1.288,1.288,0,0,0,0,1.33l.62,10.26c.11,1.52.25,3.42,3.74,3.42h6.42c3.49,0,3.63-1.89,3.74-3.42l.62-10.25A1.3,1.3,0,0,0,14.8.39ZM9.232,10H5.9a.75.75,0,0,1,0-1.5h3.33a.75.75,0,0,1,0,1.5Zm.84-4h-5a.75.75,0,0,1,0-1.5h5a.75.75,0,0,1,0,1.5Z" transform="translate(112.428 195.75)"/><path class="trash-svg" d="M0,0H24V24H0Z" transform="translate(132 212) rotate(180)"/></g></svg></router-link>
       </div>
      </div>
    </div>


    <div class="whisky-list">
      <h2 class="adminTitle">Whisky</h2>


    </div>
    <div class="gin-list">
      <h2 class="adminTitle">Gin</h2>


    </div>
    <div class="absinthe-list">
      <h2 class="adminTitle">Absinthe</h2>



    </div>
    <router-link to="productslist/addproduct"><button type="submit" class="CTA-10" id="tilføj-button">Tilføj</button></router-link>
  </div>
</template>

<script>
import AdminHeader from "./adminHeader.vue";

export default {
  name: "DeleteProducts",
  components: {
    AdminHeader,
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
#listofproducts {
  margin: 0px auto;
  width: 300px;
}


.product-container {
  width: 305px;
  height: 50px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  margin-top: 20px;
  position: relative;
}

.product-titel {
  width: 75%;
  display: inline-block;
  line-height: 50px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.svg-container {
  position: absolute;
  right: 5px;
}


.trash-svg {
  fill: none;
  opacity:0;
  }

svg {
  margin-right: 10px;
  }

.edit-svg {
  fill: none;
  opacity:0;
  }

svg:hover {
  opacity: 50%;
}


.input-edit {
  height: 50px;
  width: 305px;
  border: none;
  margin-top: 12px;
  padding-left: 15px;
  background-image: url(../assets/trash.svg), url(../assets/edit.svg);
  background-repeat: no-repeat, no-repeat;
  background-position: center left, center left;
  background-position: calc(95%), calc(83%);
}

.adminTitle {
  margin-top: 30px;
}

.CTA-10 {
  background-color: #3b95ff;
  width: 305px;
  height: 55px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 45px;
}
</style>