

export const state = () => ({
    daily_bil: {}
  });
  
  export const mutations = {
    add(state, daily){
      state.daily_bil=daily;
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