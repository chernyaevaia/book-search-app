<template>
  <div class="bookList">
    <BookItem v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookItem from "./BookItem";

export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  components: {
    BookItem,
  },
};
</script>

<style>
.bookList {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  row-gap: 16px;
  flex-wrap: wrap;
  padding: 20px 100px;
}
</style>
