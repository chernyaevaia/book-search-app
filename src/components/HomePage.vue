<template>
  <form @submit.prevent="searchBooks">
    <div>
      <v-text-field variant="outlined" placeholder="Search..." />
      <v-btn variant="outlined" @click="searchBooks">Search</v-btn>
    </div>
    <v-select
      :items="[
        'all',
        'art',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry',
      ]"
      variant="outlined"
    ></v-select>
    <label>Order by</label>
    <v-radio-group inline>
      <v-radio label="Relevance" value="relevance"></v-radio>
      <v-radio label="Newest" value="newest"></v-radio>
    </v-radio-group>
  </form>
  <BookList :books="books"></BookList>
</template>

<script>
import BookList from "@/components/BookList";

export default {
  data() {
    return {
      books: [],
      keyword: "",
      orderBy: "newest",
      maxResults: "10",
    };
  },
  methods: {
    async searchBooks() {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key&key=AIzaSyDDbQUszd9s7Kd6i5-4LnIa053GW5YG01c"
        );
        const books = await response.json();
        const booksArray = books.items;
        this.books = booksArray
        console.log(books.items)
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    BookList,
  },
};
</script>

<style scoped></style>
