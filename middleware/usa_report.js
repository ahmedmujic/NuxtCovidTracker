import axios from 'axios'

export default function({store}){
    return axios.get(`https://covid19api.io/api/v1/CasesInAllUSStates`)
    .then((response)=>{
        store.commit('add_usa',response.data)
        console.log(response.data)
    })
}
