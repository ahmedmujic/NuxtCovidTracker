<template>
  <div class="wellcome">
    <div class="title ">
        <div>
            <img :src="this.daily_bilten.report.flag">
            <h2>Covid 19 tracker</h2>
            <h4>{{$route.params.id}}</h4>
        </div>
        <div class="toast show h-50  mt-0 float-right" role="alert" aria-live="assertive" aria-atomic="true" >
            <div class="toast-header ">
                <strong class="mr-auto text-danger" >COVID-19!</strong>
                <small class="text-dark">{{new Date() | datify}}</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body text-dark">
                Help stop the spread of coronavirus by keeping your distance. Stay safe!
            </div>
        </div>
    </div>
    <div class="main_info">
        <div class="f_info">
            <div class="death live">
                <img class="stat_img" src="https://image.flaticon.com/icons/svg/2713/2713357.svg">
                <h3>{{this.daily_bilten.report.deaths}} </h3>
            </div>
            <div class="rec live">
                <img class="stat_img" src="https://image.flaticon.com/icons/svg/3182/3182152.svg">
                <h3>{{this.daily_bilten.report.recovered}} </h3>
            </div>
            <div class="cases live">
                <img class="stat_img" src="https://image.flaticon.com/icons/svg/2659/2659980.svg">
                <h3>{{this.daily_bilten.report.cases}} </h3>
            </div>
            <div class="critic live">
                <img class="stat_img" src="https://image.flaticon.com/icons/svg/3209/3209018.svg">
                <h3>{{this.daily_bilten.report.active_cases[0].criticalStates}} </h3>
            </div>
        </div>
    </div>
    <div class="table1">
        <table class="table">
            <thead>
                <tr>
                <th>State</th>
                <th>Total Cases</th>
                <th>Total Deaths</th>
                <th>Active cases</th>
                <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>United States of America</td>
                <td>
                    <div class="add_info">
                        {{usa.TotalCases}}
                            <div>
                                <img class="arrow" :src=" usa.NewCases>0 ? require('@/assets/images/arrow_up.png') : require('@/assets/images/arrow_down.png') ">{{usa.NewCases | numerise}}
                            </div>
                    </div>
                </td>
                <td >
                    <div class="add_info">
                        {{usa.TotalDeaths}}
                            <div>
                                <img class="arrow" :src=" usa.NewCases>0 ? require('@/assets/images/arrow_up.png') : require('@/assets/images/arrow_down.png') ">{{usa.NewDeaths | numerise}}
                            </div>
                    </div>
                </td>
                <td>
                    <div class="add_info">
                        {{usa.ActiveCases}}
                            <div>
                                <img class="arrow" :src=" usa.NewCases>0 ? require('@/assets/images/arrow_up.png') : require('@/assets/images/arrow_down.png') ">{{usa.NewCases | numerise}}
                            </div>
                    </div>
                </td>
                <td>{{(usa.TotalCases)-10}}</td>
                </tr>
                <tr v-for="zemlja in zemlje" :key="zemlja.index">
                    <td>
                        <div class="add_info">
                            <p>{{zemlja.country}}</p>
                            <img class="flag" :src="zemlja.flag">
                        </div>
                    </td>
                    <td>
                        {{zemlja.cases}}
                    </td>
                    <td>{{zemlja.deaths}}</td>
                    <td>
                        <div class="add_info">
                            {{zemlja.active_cases[0] | sum}}
                            <div>
                                <img class="arrow" :src=" zemlja.recovered < 0 ? require('@/assets/images/arrow_up.png') : require('@/assets/images/arrow_down.png') ">{{zemlja.recovered}}
                            </div>
                        </div>
                    </td>
                    <td>
                        {{zemlja.recovered}}
                    </td>
                    <td></td>
                </tr>
                
            </tbody>
        </table>
     </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    
    middleware:'find',
    data(){
        return{
            daily_bilten: this.$store.state.daily_bil
        }
    },
    filters:{
        datify(date){
            
            let modified = new Date(date)
            return modified.getDate() + '/' + modified.getMonth() + '/' + modified.getFullYear()
        },
        numerise(num){
            return num.substring(1,num.length)
        },
        sum(num){
            return (num.currently_infected_patients+num.inMidCondition+num.criticalStates)
        }
    },
    async asyncData(){
        {
            const amer_data = await axios.get(`https://covid19api.io/api/v1/CasesInAllUSStates`)
            const china = await axios.get(`https://covid19api.io/api/v1/ReportsByCountries/China`)
            const germany = await axios.get(`https://covid19api.io/api/v1/ReportsByCountries/Germany`)
            const india = await axios.get(`https://covid19api.io/api/v1/ReportsByCountries/India`)
            const canada = await axios.get(`https://covid19api.io/api/v1/ReportsByCountries/Canada`)
            const brazil = await axios.get(`https://covid19api.io/api/v1/ReportsByCountries/Brazil`)
            const argentina = await axios.get(`https://covid19api.io/api/v1/ReportsByCountries/Argentina`)
            const mex = await axios.get(`https://covid19api.io/api/v1/ReportsByCountries/Mexico`)
            const spain = await axios.get(`https://covid19api.io/api/v1/ReportsByCountries/Spain`)
            return{
                usa:amer_data.data.data[0].table[0],
                zemlje:[
                    china.data.report,
                    germany.data.report,
                    india.data.report,
                    canada.data.report,
                    brazil.data.report,
                    argentina.data.report,
                    mex.data.report,
                    spain.data.report
                ]

            }
            
        }
        },
    methods:{
        difference:function(cases,recovered){
            return (cases-recovered)
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
    background-image: url("https://cdn.pixabay.com/photo/2020/03/14/08/09/coronavirus-4929978_1280.png");
    background-size:cover;
    width: 100%;
    height: 100vh;
}
.title{
    display: flex;
    justify-content: space-between;
    padding: 50px;
    height: 38%;
    position: relative;
    img{
        margin-bottom: 20px;
    }
    animation-name: fadeIn;
    animation-duration: 4s;
}
@keyframes fadeIn{
    from{
        opacity: 0;
    }
    to{
        opacity:1;
    }
}
.f_info{
    width: 15%;
    height: 25%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    width: 90%;
    position: absolute;
    margin-top: -180px;
    
    .death{
        @include grid_position(1,2,1,2);
        h3{
            color: rgb(255, 0, 0);
        }
    }
    .rec{
        @include grid_position(2,3,1,2);
        h3{
            color: rgb(67, 190, 88);
        }
    }
    .cases{
        @include grid_position(3,4,1,2);
        h3{
            color: rgb(172, 175, 13);
        }
    }
    .critic{
        @include grid_position(4,5,1,2);
        h3{
            color: rgb(133, 0, 0);
        }
    }
}
.main_info{
    @include centriranje;
    margin-top:10%;
    h2{
            opacity: 0.5;
        }
}
.stat_img{
    height: 130px;
    width: 130px;
    
}
@keyframes slide{
    0%{
       
        top:-100px;
    }
    100%{
        top:0px;
    }
}
.live{
    @include centriranje;
    flex-direction: column;
    h3{
        margin-top: 10px;
        font-weight: 700;
    }
    position: relative;
    animation-name: slide;
    animation-duration: 1s;
    animation-fill-mode: none;
}
.arrow{
    width: 20px;
    height: 20px;
    margin-left:5px;
}
.add_info{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.flag{
    width: 40px;
    height: 25px;
    margin-left: 10px;
}
.table1{
    height: 370px;
    overflow:scroll;
    overflow-x: hidden;
}
#bootstrap-overrides .toast-body {
    color: black;
}
.live:hover{
    animation-name: zumiraj;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    cursor: pointer;
}
@keyframes zumiraj{
    50%{
        transform: scale(0.5);
    }
    100%{
        transform: scale(1);
    }
}
</style>
