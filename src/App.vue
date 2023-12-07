<template>
  <div class="appContainer">
    <h1>Book Search</h1>
    <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from "./components/HomePage";

export default {
  components: {
    HomePage,
  },
};
</script>

<style scoped>
.appContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
