<template>
<div class="admin-header"> 

<h2 id="user-name">Claus</h2>
<button type="submit" class="CTA-2" id="logout-button">Log Out</button>

</div>

</template>

<script>
export default {
        name: 'AdminHeader',
        components: {
            
    },
}
</script>

<style>

.CTA-2 {

  font-size: 20px;
  font-weight: 600;
  background-color: #F74755;
  width: 110px;
  height: 45px;
  border-radius: 8px;
  color:#fff;
}

.admin-header {

display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 72px;
}

#user-name{
  font-size: 20px;
  font-weight: 600;
}

</style>