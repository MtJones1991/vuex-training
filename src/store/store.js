import itemsModule from "./modules/items/index"

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    itemsModule
  }
});