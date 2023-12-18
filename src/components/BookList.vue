<template>
  <div class="bookList">
    <BookItem v-for="book in books" :key="book.id" :book="book" />
  </div>
  <v-btn
    v-if="books.length > 0"
    block
    rounded="lg"
    class="loadmoreBtn"
    variant="tonal"
    @click="loadBooks"
  >
    load more
  </v-btn>
  <div class="spinner">
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="primary"
      model-value="20"
      :size="55"
      :width="5"
    ></v-progress-circular>
  </div>
</template>

<script>
import BookItem from "./BookItem";
import { mapActions, mapMutations } from "vuex";

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
  data() {
    return {
      currentPage: 1,
      isLoading: false,
    };
  },

  computed: {},

  methods: {
    ...mapActions(["loadMoreBooks"]),
    ...mapMutations(["updateStartIndex"]),

    loadBooks() {
      this.isLoading = true;
      this.updateStartIndex((this.currentPage + 1) * 30);
      this.loadMoreBooks().finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style scoped>
.bookList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;
}

.loadmoreBtn {
  margin: 20px 0;
  color: #2c456b;
}

.spinner {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
