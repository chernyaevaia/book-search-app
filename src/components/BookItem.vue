<template>
  <RouterLink style="text-decoration: none" :to="`/${book.id}`">
    <v-card
      height="100%"
      hover="true"
      class="bookItem"
      @click="updateBookId(book.id)"
    >
      <img
        v-if="volumeInfo.imageLinks"
        :src="volumeInfo.imageLinks.thumbnail"
        :alt="volumeInfo.title"
      />
      <div v-if="bookCategory" class="bookCategory">
        Category: {{ bookCategory }}
      </div>
      <h4>{{ volumeInfo.title }}</h4>
      <div class="bookAuthor">
        {{ bookAuthor }}
      </div>
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
  overflow-wrap: break-word;
  justify-content: start;
  text-align: center;
  width: 260px;
  padding: 16px;
}

.bookCategory {
  font-size: 14px;
  text-align: center;
  color: gray;
}

.bookAuthor {
  font-style: italic;
}
</style>
