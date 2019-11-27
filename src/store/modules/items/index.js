const state = {

items: ['34234234', '23423423']

};

const mutations = {
  addUsername(state, payload) {
    state.items.push(payload)
  },

}


const itemsModule = {
  // namespaced: true,
  state,
  mutations,
}

export default itemsModule;

