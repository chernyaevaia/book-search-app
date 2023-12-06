<template>
  <form @submit.prevent="search">
    <div>
      <v-text-field variant="outlined" placeholder="Search..." />
      <v-btn variant="outlined">Search</v-btn>
    </div>
    <v-select
      :items="[
        'all',
        'art',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry',
      ]"
      variant="outlined"
    ></v-select>
    <label>Order by</label>
    <v-radio-group inline>
      <v-radio label="Relevance" value="relevance"></v-radio>
      <v-radio label="Newest" value="newest"></v-radio>
    </v-radio-group>
  </form>
</template>

<script></script>

<style scoped></style>
