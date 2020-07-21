

export const state = () => ({
    daily_bil: {},
    usa_report:[{}]
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