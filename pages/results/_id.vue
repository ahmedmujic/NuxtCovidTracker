<template>
  <div class="wellcome">
      <!-- Selam alejk{{$route.params.id}}
      {{$store.state.daily_bil}} -->
    <div class="title">
        <div>
            <h2>Covid 19 tracker</h2>
            <h4>{{$route.params.id}}</h4>
            <h5>Last updated: {{this.daily_bilten.locations[0].last_updated | datify}}</h5>
        </div>
    </div>
    <div class="main_info">
        <div class="f_info">
            <div class="death">
                <h2>DEATHS</h2>
                <h3>{{this.daily_bilten.locations[0].latest.deaths}} </h3>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    
    middleware:'find'
    ,
    data(){
        return{
            daily_bilten: this.$store.state.daily_bil
        }
    },
    filters:{
        datify(date){
            let modified = new Date(date)
            return modified.getDate() + '/' + modified.getMonth() + '/' + modified.getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
*{
    font-family: $font-family;
    color: white;
}
.wellcome{
    border:1px solid red;
    width: 100%;
    height: 100vh;
}
.title{
    padding: 50px;
    height: 38%;
    background-image: url("https://cdn.pixabay.com/photo/2020/02/10/04/56/virus-4835301_960_720.jpg");
    background-size: cover;
    background-position-y:center;
    position: relative;
}
.f_info{
    width: 15%;
    height: 55%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1px 1px;
    width: 40%;
    border: 4px solid green;
    position: absolute;
    margin-top: -50px;
    .death{
        @include grid_position(1,2,1,2);
        border:1px solid red;
    }
}
.main_info{
    @include centriranje;
    margin-top:10%;
}

</style>
