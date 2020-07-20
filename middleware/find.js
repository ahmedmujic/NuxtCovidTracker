import axios from 'axios'

export default function({params,store}){
    return axios.get(`https://coronavirus-tracker-api.herokuapp.com/v2/locations?country=${params.id}`)
    .then((response)=>{
        store.commit('add',response.data)
        console.log(response.data)
    })
}