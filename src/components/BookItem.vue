<template>
  <RouterLink style="text-decoration: none" :to="`/${book.id}`">
    <v-card height="100%" hover="true" class="bookItem" @click="updateBookId(book.id)">
      <v-card-subtitle v-if="bookCategory"
        >Category: {{ bookCategory }}
      </v-card-subtitle>
      <img
        v-if="volumeInfo.imageLinks.thumbnail"
        :src="volumeInfo.imageLinks.thumbnail"
        :alt="volumeInfo.title"
      />
      <h4>{{ volumeInfo.title }}</h4>
      <v-card-subtitle>
        {{ bookAuthor }}
      </v-card-subtitle>
    </v-card>
  </RouterLink>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    volumeInfo() {
      return this.book.volumeInfo;
    },

    bookAuthor() {
      if (this.book.volumeInfo.authors) {
        if (this.book.volumeInfo.authors.lenght === 1) {
          return this.book.volumeInfo.authors[0];
        } else {
          return this.book.volumeInfo.authors.toString().split(",").join(", ");
        }
      } else {
        return "";
      }
    },

    bookCategory() {
      if (this.book.volumeInfo.categories) {
        return this.book.volumeInfo.categories[0];
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapMutations(["updateBookId"]),
  },
};
</script>

<style scoped>
.bookItem {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  justify-content: start;
  text-align: center;
  width: 260px;
  padding: 16px;
}
</style>
