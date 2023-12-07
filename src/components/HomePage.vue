<template>
  <form class="searchPanel" @submit.prevent="submit">
    <v-text-field
      v-model="searchStrEntered"
      density="comfortable"
      class="searchInput"
      variant="outlined"
      placeholder="Search..."
    />
    <label>Select category:</label>
    <v-select
      v-model="category"
      density="comfortable"
      class="selectCategory"
      :items="categories"
      variant="outlined"
    ></v-select>
    <v-btn size="large" type="submit" variant="outlined">Search</v-btn>
    <!-- <label>Order by:</label> -->
    <!-- <v-radio-group v-model="orderBy" @change="submit" inline>
      <v-radio label="Relevance" value="relevance"></v-radio>
      <v-radio label="Newest" value="newest"></v-radio>
    </v-radio-group> -->
  </form>
  <BookList :books="booksFound"></BookList>
</template>
<script>
import BookList from "@/components/BookList";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      orderBy: "relevance",
      maxResults: "10",
      category: "",
      categories: [
        "all",
        "Art",
        "Biography",
        "Computers",
        "History",
        "Medical",
        "Poetry",
        "Fiction",
      ],
    };
  },
  computed: mapGetters(["booksFound"]),

  methods: {
    ...mapActions(["fetchBooks"]),
    ...mapMutations(["updateSearchStr", "updateCategory", "updateSortBy"]),

    submit() {
      this.updateSearchStr(this.searchStrEntered);
      this.updateCategory(this.category);
      this.fetchBooks();
    },
  },

  components: {
    BookList,
  },
};
</script>

<style scoped>
.searchPanel {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.selectCategory {
  min-width: 340px;
}

.searchInput {
  min-width: 340px;
}
</style>
