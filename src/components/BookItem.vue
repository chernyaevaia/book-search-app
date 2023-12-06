<template>
  <v-card hover="true" class="bookItem">
    <template v-if="volumeInfo.imageLinks">
      <img :src="volumeInfo.imageLinks.thumbnail" :alt="volumeInfo.title" />
    </template>
    <h4>{{ volumeInfo.title }}</h4>
      <v-card-subtitle>
        By
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
      </v-card-subtitle>
  </v-card>
</template>

<script>
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
};
</script>

<style scoped>

.bookItem {
  min-width: 260px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>