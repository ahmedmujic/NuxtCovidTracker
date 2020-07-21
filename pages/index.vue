<template>
  <div>
    <div class="container">
      <nuxt/>
      <home></home>
    
    </div>
    <div class="info1">
      <div class="facts">
        <h1>COVID-19 FACTS</h1>
        <div class="text-dark basic_text">
        <p >Coronaviruses are viruses that circulate among animals with some of them also known to infect humans.</p>
        <p>The incubation period for COVID-19 (i.e. the time between exposure to the virus and onset of symptoms) is<br> currently estimated to be between one and 14 days. </p>
        </div>
      </div>
      <div class="covid_img mt-5">
        <img src="https://cdn4.iconfinder.com/data/icons/coronavirus-information/128/Artboard_12-256.png" >
      </div>
    </div>
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

<style lang="scss" scoped>
@import '@/assets/main.scss';
*
{
  box-sizing: border-box;
}
.info1{
  background-image: url("../assets/images/corona_back1.svg");
  background-size: cover;
  height: 800px;
  max-width: 100%;
  width: 100vw;
  @include centriranje;
  // img {
  //   position:absolute;
  //   top: 0;
  //   right: 0;
  //   margin-top: 60px;
  //   margin-right: 40px;
  // }
}
.container{
  height: 100vh;
  max-width: 100%;
  background-image: url("https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80");
  background-size: cover;
}
.facts{
  width: 80%;
  h1{
    font-size: 70px;
    font-weight: 800;

  }
  
}
.covid_img{
    height: 100%;
  }
.basic_text{
  font-size: 20px;
}
</style>
