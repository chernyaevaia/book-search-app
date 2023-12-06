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
      type: Response,
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
  max-width: 900px;
  display: flex;
  column-gap: 16px;
  row-gap: 16px;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
