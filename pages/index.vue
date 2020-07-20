<template>
  <div class="container">
    <nuxt/>
    <home></home>
  </div>
</template>

<script>
import home from '~/components/home.vue'
export default {
  components:{
    home
  }
}
</script>

<style scoped>
*
{
  box-sizing: border-box;
}
.container{
  height: 100vh;
  box-sizing: border-box;
  width: 100vw;
  max-width: 100%;
  background-image: url("https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80");
  background-size: cover;
}
</style>
