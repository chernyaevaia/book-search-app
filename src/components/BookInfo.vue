<template>
  <div class="header">
    <RouterLink style="text-decoration: none" :to="`/`">
      <v-btn class="backBtn" variant="tonal"> BACK </v-btn>
    </RouterLink>
  </div>
  <v-progress-circular
    v-if="isLoading"
    class="spinner"
    indeterminate
    color="primary"
    model-value="20"
    :size="55"
    :width="5"
  ></v-progress-circular>
  <v-card v-else class="bookItem">
    <img
      :src="bookInfo?.volumeInfo?.imageLinks?.thumbnail"
      :alt="bookInfo?.volumeInfo?.title"
    />
    <text-body-1 class="font-weight-bold"
      >Title: {{ bookInfo?.volumeInfo?.title }}</text-body-1
    >
    <text-body-1 class="font-italic"
      >Author:
      {{
        bookInfo?.volumeInfo?.authors &&
        bookInfo?.volumeInfo?.authors.length === 1
          ? bookInfo?.volumeInfo?.authors[0]
          : bookInfo?.volumeInfo?.authors
          ? bookInfo?.volumeInfo?.authors.toString().split(",").join(", ")
          : "unknown"
      }}</text-body-1
    >
    <text-body-1 class="font-italic"
      >Categories:
      {{
        bookInfo?.volumeInfo?.categories &&
        bookInfo?.volumeInfo?.categories.length === 1
          ? bookInfo?.volumeInfo?.categories[0]
          : bookInfo?.volumeInfo?.categories
          ? bookInfo?.volumeInfo?.categories.toString().split(",").join(", ")
          : "no"
      }}</text-body-1
    >
    <text-body-1>{{
      bookInfo?.volumeInfo?.description
    }}</text-body-1>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  computed: mapGetters(["bookInfo"]),

  methods: {
    ...mapActions(["fetchBookInfo"]),
    ...mapMutations(["updateBookId"]),
  },

  created() {
    this.updateBookId(this.$route.path.slice(1));
    this.fetchBookInfo().finally(() => (this.isLoading = false));
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #2c456b;
}
.bookItem {
  width: 560px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 26px 49px;
  margin-top: 50px;
  text-align: left;
}

.spinner {
  margin-top: 30px;
}
.backBtn {
  color: white;
  margin-top: 20px;
  margin-left: 50px;
}
</style>
