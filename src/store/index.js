import { createStore } from "vuex";

export const store = createStore({
  actions: {
    async fetchBooks(ctx) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchStr}+subject:${this.state.category}&maxResults=30&orderBy=${this.state.order}`
        );
        const books = await response.json();
        const booksArray = books.totalItems === 0 ? [] : books.items;
        const bookNumber = books.totalItems;
        ctx.commit("updateNewBooks", booksArray);
        ctx.commit("updateBooksNumber", bookNumber);
      } catch (error) {
        console.error(error);
        throw new Error("Something went wrong during search");
      }
    },

    async loadMoreBooks(ctx) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchStr}+subject:${this.state.category}&startIndex=${this.state.startIndex}&maxResults=30&orderBy=${this.state.order}`
        );
        const books = await response.json();
        const booksArray = books.items;
        ctx.commit("updateMoreBooks", booksArray);
      } catch (error) {
        console.error(error);
        throw new Error("Something went wrong during loading");
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
        throw new Error("Something went wrong when loading information");
      }
    },
  },
  mutations: {
    updateNewBooks(state, books) {
      state.books = books;
    },
    updateMoreBooks(state, books) {
      state.books = [...state.books, ...books];
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
    updateBooksNumber(state, number) {
      state.booksNumber = number;
    },
    updateStartIndex(state, index) {
      state.startIndex = index;
    },
  },
  state: {
    books: [],
    bookInfo: {},
    bookId: "",
    booksNumber: null,
    startIndex: 0,
  },
  getters: {
    booksFound(state) {
      return state.books;
    },

    bookInfo(state) {
      return state.bookInfo;
    },
    booksNumber(state) {
      return state.booksNumber;
    },
  },
});
