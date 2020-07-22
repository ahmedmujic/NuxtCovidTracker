<template>
  <div>
    <div class="bcg">
      <div class="container">
        <nuxt/>
        <home></home>
      </div>
      <div class="info1" id="inf">
        <div class="facts">
          <h1>COVID-19 FACTS</h1>
          <div class="text-dark basic_text">
            <p >Coronaviruses are viruses that circulate among animals with some of them also known to infect humans.</p>
            <p>The incubation period for COVID-19 (i.e. the time between exposure to the virus and onset of symptoms) is<br> currently estimated to be between one and 14 days. </p>
            <p>Symptoms of human coronaviruses can:<br>
                &bull; take up to 14 days to appear after exposure to the virus<br>
                &bull; be very mild or more serious<br>
                &bull; vary from person to person<br>
            </p>
          </div>
        </div>
        <div class="covid_img mt-5">
          <img src="https://cdn4.iconfinder.com/data/icons/coronavirus-information/128/Artboard_12-256.png" >
        </div>
      </div>
    </div>
    <div id="value">
      <h1>Total cases in world</h1>
      <hr class="hr_title">
      <ul class="num_info">
        <li class="ul_content" v-for="info in infos" :key="info.index" id="show">
          <img :src="img_load(info.id)" class="mb-3">
          <h2 :id="info.id">0</h2>
          <h4>{{info.info}}</h4>
        </li>
        
      </ul>
    </div>
      
  </div>
</template>

<script>
import home from '~/components/home.vue'
import axios from 'axios'
var b=0;
export default {
  components:{
    home
  },
  data(){
    return{
      globally: 0,
      infos: this.$store.state.infos
    }
  },
    created () {
      if (process.browser){
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    beforeUpdate (){
      if (process.browser){
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    async asyncData(){
      const asyncData = await axios.get(`https://api.thevirustracker.com/free-api?global=stats`)
      return {glob:asyncData.data}

    },
    methods: {
      img_load:function(index){
        return index=='value1' ? require('@/assets/images/death_ind.png') :
        index=='value2' ? require('@/assets/images/virus_ind.png'):
        index=='value3' ? require('@/assets/images/recovered_ind.png'):
        index=='value4' ? require('@/assets/images/today_ind.png'):
        require('@/assets/images/world_mp_ind.png')
      },
      handleScroll: function (event) {
        let $this=this;
        window.onscroll = function(ev) {
        if (((window.scrollY + window.innerHeight) >= document.getElementById("show").offsetTop) && b==0) {
          
          $this.animateValue("value1",0,$this.glob.results[0].total_deaths,2000); 
          $this.animateValue("value2",0,$this.glob.results[0].total_cases,2000);
          $this.animateValue("value3",0,$this.glob.results[0].total_recovered,2000);
          $this.animateValue("value4",0,$this.glob.results[0].total_new_cases_today,2000);
          $this.animateValue("value5",0,$this.glob.results[0].total_affected_countries,2000);
          
        }
        else if((window.scrollY + window.innerHeight) <= document.getElementById("value").offsetTop){
          b=0;
        }
      }
    },
    
    animateValue:function (id, start, end, duration) {
      if (process.browser){
      b++;
      var objekat_time = document.getElementById(id);
      // razlika krajnje i pocetne vrijednosti
      var range = end - start;
      // minimalno vrijeme trajanja animacije
      var minTimer = 50;
      // vrijeme za svaki korak tj vrijeme za svaki broj 
      var stepTime = Math.abs(Math.floor(duration / range));
      //ukoliko je vrijeme manje od minimalnog uzima se predodredjeno minimalno vrijeme
      stepTime = Math.max(stepTime, minTimer);
      //pocetak
      var startTime = new Date().getTime();
      //kraj
      var endTime = startTime + duration;
      var timer;
      function run() {
          var now = new Date().getTime();
          //preostalo vremena za animaciju
          var remaining = Math.max((endTime - now) / duration, 0);
          // trenutna vrijednost broja 
          var value = Math.round(end - (remaining * range));
          // upis u DOM 
          objekat_time.innerHTML = value;
          // brojevi su dosli do kraja tj kad remainig dosegne onda ce remaining * range biti 0, zatim u tom trenutku je value jednak nasoj zeljenoj vrijednosti 
          // i tu se zaustavlja interval 
          if (value == end) {
              clearInterval(timer);
          }
      }
      //pocetak animacije 
      timer = setInterval(run, stepTime);
      run();
        }
      },
    }
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
*
{
  box-sizing: border-box;
}
.bcg{
  background-image: url("../assets/images/corona_back1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 45px;
}
.info1{
  
  height: 800px;
  max-width: 100%;
  width: 100vw;
  @include centriranje;
}
.container{
  height: 100vh;
  max-width: 100%;
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
#value{
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 600px;
  max-width: 100%;
  font-family: $font-family;
  h1{
    font-weight: 800;
   
  }
  .num_info{
    height: 60%;
    width: 100%;
    .ul_content{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color:rgb(59, 64, 133);
      width: 20%;
      margin: 0px;
      color: white;
    }
  }
}
ul{
  list-style: none;
  display: flex;
  margin: 0px;
  padding: 0px;
}
hr{
  margin-top: -1px;
  width: 20%;
  height: 2px;
  background-color: white;
}
.hr_title{
  margin-top: -50px;
  width: 12%;
  height: 2px;
  background-color: rgb(50,51,119);
}
@media screen and (max-width: 600px) {
  .covid_img img {
    display: none;
  }
  .facts h1{
      font-size: 60px;
  }
  .num_info{
    display: flex;
    flex-direction: column;

  }
  .ul_content{
    width: 100% !important;
  }
  
}
</style>
