import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      article: {}
    },
    getters: {
      article (state) {
        return state.article
      }
    },
    mutations: {
      setArticle (state, data) {
        state.article = data
      }
    },
    actions: {
      setArticle (context, data) {
        setTimeout(() => {
          context.commit('setArticle', data)
        }, 100)
      }
    }
  })
}

export default createStore
