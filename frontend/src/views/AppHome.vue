<template>
  <div>
    <h1>Welcome to Learn Chinese!</h1>
    <p>This is the Home page where you can learn basic Chinese words and phrases.</p>
    <RouterLink  to="/courses">Go to Courses</RouterLink >
  </div>
</template>

<script>
export default {
  name: "AppHome",
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>

