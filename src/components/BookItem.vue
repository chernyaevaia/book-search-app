<template>
  <RouterLink :to="`/${book.id}`">
    <v-card hover="true" class="bookItem" @click="updateBookId(book.id)">
      <img :src="volumeInfo.imageLinks.thumbnail" :alt="volumeInfo.title" />
      <h4>{{ volumeInfo.title }}</h4>
      <v-card-subtitle
        v-for="(author, index) in volumeInfo.authors"
        :key="index"
      >
        {{
          index + 1 !== volumeInfo.authors.length &&
          index + 1 !== book.volumeInfo.authors.length - 1
            ? author + ", "
            : index + 1 == book.volumeInfo.authors.length && index + 1 !== 1
            ? " and " + author
            : author
        }}
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
  },

  methods: {
    ...mapMutations(["updateBookId"]),
  },
};
</script>

<style scoped>
.bookItem {
  width: 260px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
