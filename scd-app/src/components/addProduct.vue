<template>
  <div class="add-product">
    <AdminHeader></AdminHeader>
    <h1 id="add-product-h1">Tilføj produkt</h1>

    <form action="" class="form">
      <h2 id="title-h2">Titel</h2>
      <input type="text" name="" id="titel-input" />

      <h2 id="description-h2">Beskrivelse</h2>
      <input type="text" name="" id="description-input" />

      <h2 id="description-h2">Indtast Url link til billede</h2>
      <input type="text" name="" id="url-input" />

      <div class="radio-btns">
        <input type="radio" class="radio-btn" name="fav_language" value="Øl" />
        <label for="html">Øl</label><br />

        <input
          type="radio"
          class="radio-btn"
          name="fav_language"
          value="Whisky"
        />
        <label for="html">Whisky</label><br />

        <input type="radio" class="radio-btn" name="fav_language" value="Gin" />
        <label for="html">Gin</label><br />

        <input
          type="radio"
          class="radio-btn"
          name="fav_language"
          value="Absinthe"
        />

        <label for="html">Absinthe</label><br />
      </div>
      <button class="save-btn">Gem</button>
    </form>
  </div>
</template>

<script>
import AdminHeader from "./adminHeader.vue";

export default {
  name: "AddProduct",
  components: {
    AdminHeader,
  },
};
</script>

<style>
.form {
  margin-top: 30px;
}

.add-product {
  width: 305px;
  margin: 25px auto;
}

#add-product-h1 {
  margin-top: 50px;
}

#titel-input {
  width: 305px;
  height: 50px;
  padding-left: 10px;
}

#title-input {
  font-weight: 400;
}

#title-h2 {
  font-weight: 400;
  margin-bottom: 12px;
}

#description-h2 {
  margin-top: 30px;
  font-weight: 400;
  margin-bottom: 12px;
}

#description-input {
  width: 305px;
  height: 115px;
  padding-left: 10px;
  padding-bottom: 75px;
}

#url-input {
  height: 75px;
  width: 305px;
  padding-bottom: 40px;
  padding-left: 10px;
}

.radio-btns {
  margin-top: 30px;
}

label {
  color: #fff;
  margin-left: 15px;
  font-weight: 600;
}

.radio-btn {
  margin-top: 15px;
}

.save-btn {
  width: 305px;
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>