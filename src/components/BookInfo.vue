<template>
  <v-card class="bookItem">
    <img
      :src="bookInfo?.volumeInfo?.imageLinks?.thumbnail"
      :alt="bookInfo?.volumeInfo?.title"
    />
    <text-body-1 class="font-weight-bold"
      >Title: {{ bookInfo?.volumeInfo?.title }}</text-body-1
    >
    <text-body-1 class="font-italic"
      >Author: {{ bookInfo?.volumeInfo?.authors[0] }}</text-body-1
    >
    <text-body-1 class="description">{{
      bookInfo?.volumeInfo?.description
    }}</text-body-1>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  computed: mapGetters(["bookInfo"]),

  methods: {
    ...mapActions(["fetchBookInfo"]),
    ...mapMutations(["updateBookId"]),
  },

  created() {
    this.updateBookId(this.$route.path.slice(1));
    this.fetchBookInfo();
  },
};
</script>

<style scoped>
.bookItem {
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 26px 49px;
  margin-top: 50px;
  text-align: left;
}

.description {
  margin-top: 16px;
}
</style>
