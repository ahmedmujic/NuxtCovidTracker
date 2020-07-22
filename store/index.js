

export const state = () => ({
    daily_bil: {},
    usa_report:[{}],
    global_cases:0,
    infos:[
      {id:'value1',info:'Total Deaths'},
      {id:'value2',info:'Total Cases'},
      {id:'value3',info:'Total Recovered'},
      {id:'value4',info:'New Cases Today'},
      {id:'value5',info:'Total Affected Countries'}
    ]
  });
  
  export const mutations = {
    add(state, daily){
      state.daily_bil=daily;
    },
    add_usa(state, usa){
      state.usa_report=usa
    }
  };
  
//   export const actions = {
//     setPosts(vuexContext, posts){
//       vuexContext.commit('setPosts', posts);
//     }
//   };
  
  export const getters = {
    loadedPosts(state){
      return state.loadedPosts;
    }
  };