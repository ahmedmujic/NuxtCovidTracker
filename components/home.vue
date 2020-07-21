<template>
  <div class="wellcome">
      <h1>COVID 19 live statistics</h1>
      <div class="main" @submit.prevent="submit">
          <form class="form-group">
            <label for="formGroupExampleInput">Unesite državu</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Država..." v-model="drzava">
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            drzava:''
        }
    },
    methods:{
        submit(e){
            this.$router.push(`results/${this.drzava}`)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.wellcome{
    color:rgb(241, 53, 53);
    font-family: $font-family;
    height: 100vh;
    @include centriranje;
    flex-direction: column;
    h1{
        font-weight: 700;
        font-size: 90px;
    }
}
</style>
