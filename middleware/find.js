import axios from 'axios'

export default function({params,store}){
    return axios.get(`https://covid19api.io/api/v1/ReportsByCountries/${params.id}`)
    .then((response)=>{
        store.commit('add',response.data)
       
    })
}
