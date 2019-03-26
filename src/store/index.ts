import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import state, {State} from './state';
import mutations from './mutations';



Vue.use(Vuex);


const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default new Vuex.Store<State>({
  state,
  mutations,
  plugins: [vuexLocal.plugin],
});
