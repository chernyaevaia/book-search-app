import { createStore } from "vuex";

export const store = createStore({
  actions: {
    async fetchBooks(ctx) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchStr}+subject:${this.state.category}
          &key=AIzaSyDDbQUszd9s7Kd6i5-4LnIa053GW5YG01c`
        );
        const books = await response.json();
        const booksArray = books.items;
        ctx.commit("updateBooks", booksArray);
        this.books = booksArray;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    updateBooks(state, books) {
      state.books = books;
    },
    updateSearchStr(state, str) {
      state.searchStr = str;
    },
    updateCategory(state, category) {
      state.category = category;
    },
    updateSortBy(state, order) {
      state.order = order;
    },
  },
  state: {
    books: [],
  },
  getters: {
    booksFound(state) {
      return state.books;
    },
  },
});
