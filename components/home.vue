<template>
<div>
    <div :class="validirano ? 'mistake-nonactive':
        'mistake-active alert alert-danger'" id="val">
        <h3>{{greska}}</h3>
    </div>  
    <div class="wellcome">
        <div class="search">
            <div class="main" @submit.prevent="submit">
                <form class="form-group " id="formma" >
                    <label for="formGroupExampleInput" class="text-muted">In the following field insert your country</label>
                    <input type="text" class="form-control" id="formGroupExampleInput " placeholder="Country..." v-model="drzava">
                </form>
            </div>
            <div class="src_img" @click="anim()"> 
            <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png"  ><p class="text-muted mt-2">Search by country</p>
            </div>
        </div>
        <h1 class="text-dark">COVID 19 LIVE STATISTICS</h1>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            drzava:'',
            prikaz:false,
            clicked:false,
            greska:'',
            validirano:true
        }
    },
    methods:{
        submit(e){
            if(this.validate()){
                this.$router.push(`results/${this.drzava}`)
                document.getElementById("val").classList.remove('mistake-nonactive');
            }
            else{
                document.getElementById("val").setAttribute("class",'mistake-active alert alert-danger')
            }
            
        },
        anim(){
            if (process.browser && this.clicked==false){
                this.clicked=true
                document.getElementById("formma").setAttribute('class','main-visible')
            }
            else if(process.browser && this.clicked==true){
                this.clicked=false
                document.getElementById("formma").setAttribute('class','main-nonvisible')
            }
        },
        validate:function(){
            let patern_number=/\d/g;
            var patern_string = /[^a-ž ^A-Ž]/g;
            var strr = this.drzava.match(patern_string);
            let numr = this.drzava.match(patern_number)
            this.greska = (numr != null) ? 'Unijeli ste broj unutar riječi':
            (this.drzava.length == 0) ? 'Unijeli ste prazno polje':
            (strr!=null) ? 'Nisu dozvoljeni specijalni znakovi (@,€,$...)':
            null;
            
            if(this.greska!=null)
            {
                this.validirano=false;
                return false;
            } 
            else if(this.greska==null){
                this.validirano=true
                return true
            }
            else return true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.wellcome{
    
    
    height: 100vh;
    @include centriranje;
    flex-direction: column;
    h1{
        font-weight: 800;
        font-size: 90px;
    }
}
.search{
    position: fixed;
    top:0;
    left:0;
    img{
        width: 50px;
        height: 50px;
    }
    cursor: pointer;
    .main{
        padding: 0px;
    }
}
.main-visible{
    animation:trans;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    
    
}
@keyframes trans{
    from{
        transform: translateY(-300px);
        opacity: 0;
        
    }
    to{
        transform: translateY(300px);
        opacity: 1;
    }
}
.main-nonvisible{
    transition: transform 0.5s linear;
    animation:trans_non;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    
    
}
@keyframes trans_non{
    from{
        transform: translateY(300px);
        opacity: 1;
    }
    to{
        transform: translateY(-300px);
        opacity: 0;
    }
}
#formma{
    position: absolute;
    opacity: 0;
    left:300px;
    width: 300px;
}
.mistake-nonactive{
    animation:providnost1;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
@keyframes providnost{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
    
}
.mistake-active{
    text-align: center;
    position: sticky;
    max-width: 100%;
    width: 100vw;
    opacity: 0.5;
    animation:providnost;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    

}
@keyframes providnost{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    
}
.src_img{
    display: flex;
    flex-direction: row ;
    align-items: center;
}
@media screen and (max-width: 600px) {
  .wellcome {
    h1{
        font-size: 50px;
    }
  }
  #formma{
      left: 10px;
  }
  @keyframes trans{
    from{
        transform: translateY(-100px);
        opacity: 0;
        
    }
    to{
        transform: translateY(100px);
        opacity: 1;
    }
    }
    @keyframes trans_non{
        from{
            transform: translateY(100px);
            opacity: 1;
        }
        to{
            transform: translateY(-100px);
            opacity: 0;
        }
    }
  
}
</style>
