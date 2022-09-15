export default {
  namespaced: true,
  state: {
    book: [
        // {
        //     volumeInfo: {
        //         descrpition: "",
        //         imageLinks: "",
        //         previewLinks: "",
        //     }
        // }
    ],
  },
  getter: {
    // bookChosen(state) {
    //     return state.book
    // }
  },
  mutations: {
    BOOK_CHOSEN(state, bookdata) {
        state.book = bookdata
        console.log('this is bookchosen state', state.book)
        console.log('this is book data element', bookdata)
    }
  },
  actions: {
    bookChosen({ commit },bookdata) {
        // console.log('dispatched with data:', bookdata)
        commit('BOOK_CHOSEN', bookdata)
    }
  },
};
