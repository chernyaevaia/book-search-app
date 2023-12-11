import { createStore } from "vuex";

export const store = createStore({
  actions: {
    async fetchBooks(ctx) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchStr}+subject:${this.state.category}&maxResults=30&orderBy=${this.state.order}`
        );
        const books = await response.json();
        const booksArray = books.items;
        ctx.commit("updateBooks", booksArray);
        this.books = booksArray;
      } catch (error) {
        console.error(error);
      }
    },

    async fetchBookInfo(ctx) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${this.state.bookId}`
        );
        const bookInfo = await response.json();
        ctx.commit("updateBookInfo", bookInfo);
        this.bookInfo = bookInfo;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    updateBooks(state, books) {
      state.books = books;
    },
    updateBookInfo(state, bookInfo) {
      state.bookInfo = bookInfo;
    },
    updateBookId(state, bookId) {
      state.bookId = bookId;
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
    bookInfo: {},
    bookId: "",
  },
  getters: {
    booksFound(state) {
      return state.books;
    },

    bookInfo(state) {
      return state.bookInfo;
    },
  },
});
