<template>
  <div class="wrapper">
    <form class="searchPanel" @submit.prevent="submit">
      <h1 class="heading">BOOK SEARCH</h1>
      <div class="searchParams">
        <v-text-field
          v-model="searchStrEntered"
          density="comfortable"
          class="searchInput"
          variant="solo"
          placeholder="Search..."
        />
        <div>
          <label>Select category:</label>
          <v-select
            :items="categories"
            v-model="category"
            item-title="label"
            item-value="value"
            class="selectCategory"
            variant="solo"
            density="comfortable"
          ></v-select>
        </div>
        <v-btn size="large" type="submit" variant="tonal" class="searchBtn"
          >Search</v-btn
        >
      </div>
      <div>
        <label>Order by:</label>
        <v-radio-group
          color="indigo-darken-3"
          v-model="orderBy"
          @change="submit"
          inline
        >
          <v-radio
            color="indigo-darken-3"
            label="Relevance"
            value="relevance"
          ></v-radio>
          <v-radio label="Newest" value="newest"></v-radio>
        </v-radio-group>
      </div>
    </form>
  </div>
  <div class="resultWrapper">
    <text-button v-if="booksNumber" class="searchResult"
      >{{ booksNumber }} books</text-button
    >
    <BookList :books="booksFound"></BookList>
  </div>
  <div>
    <v-progress-circular
      v-if="isLoading"
      class="spinner"
      indeterminate
      color="primary"
      model-value="20"
      :size="55"
      :width="5"
    ></v-progress-circular>
  </div>
</template>
<script>
import BookList from "@/components/BookList";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      orderBy: "relevance",
      category: "",
      isLoading: false,
      categories: [
        { label: "all", value: "" },
        { label: "Art", value: "Art" },
        { label: "Biography", value: "Biography" },
        { label: "Computers", value: "Computers" },
        { label: "History", value: "History" },
        { label: "Medical", value: "Medical" },
        { label: "Poetry", value: "Poetry" },
        { label: "Fiction", value: "Fiction" },
      ],
    };
  },
  computed: mapGetters(["booksFound", "booksNumber"]),

  methods: {
    ...mapActions(["fetchBooks"]),
    ...mapMutations(["updateSearchStr", "updateCategory", "updateSortBy"]),

    submit() {
      this.isLoading = true;
      this.updateSortBy(this.orderBy);
      this.updateSearchStr(this.searchStrEntered);
      this.updateCategory(this.category);
      this.fetchBooks().then(() => (this.isLoading = false));
    },
  },

  components: {
    BookList,
  },
};
</script>

<style scoped>
.heading {
  color: #1b2d48;
  margin-top: 10px;
}
.wrapper {
  width: 100%;
  background-color: #2c456b;
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
.searchPanel {
  min-width: 60%;
  display: flex;
  flex-direction: column;
  background-color: #7b9ac7;
  padding: 0 40px;
  border-radius: 20px;
}

.searchParams {
  display: flex;
  margin-top: 20px;
  column-gap: 26px;
  align-items: center;
}

.selectCategory {
  width: 240px;
  margin-bottom: 22px;
}

.searchInput {
  min-width: 240px;
}

.searchBtn {
  margin-bottom: 22px;
  color: #1b2d48;
}

.resultWrapper {
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.searchResult {
  margin: 20px 0;
  font-weight: bold;
}

.spinner {
  margin-top: 20px;
}
</style>
