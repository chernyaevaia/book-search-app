<template>
  <form class="searchPanel" @submit.prevent="searchBooks">
    <v-text-field
      v-model="searchStr"
      density="comfortable"
      class="selectCategory"
      variant="outlined"
      placeholder="Search..."
      v-on:keyup.enter="searchBooks"
    />
    <label>Select category:</label>
    <v-select
      v-model="category"
      density="comfortable"
      class="selectCategory"
      :items="[
        'all',
        'Art',
        'Biography',
        'Computers',
        'History',
        'Medical',
        'Poetry',
        'Fiction',
      ]"
      variant="outlined"
    ></v-select>
    <v-btn size="large" variant="outlined" @click="searchBooks">Search</v-btn>
    <label>Order by:</label>
    <v-radio-group v-model="orderBy" @change="searchBooks" inline>
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
      category: "all",
      maxResults: "10",
      searchStr: "",
    };
  },
  methods: {
    async searchBooks() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${this.searchStr}&subject:${this.category}&orderBy=${this.orderBy}&key=AIzaSyDDbQUszd9s7Kd6i5-4LnIa053GW5YG01c`
        );
        const books = await response.json();
        const booksArray = books.items;
        this.books = booksArray;
        console.log(books.items);
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

<style scoped>
.searchPanel {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.selectCategory {
  min-width: 340px;
}
</style>
