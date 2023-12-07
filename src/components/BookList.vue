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
  width: 100%;
  display: flex;
  column-gap: 16px;
  row-gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 100px;
}
</style>
