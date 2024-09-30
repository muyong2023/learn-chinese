<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/courses">Courses</RouterLink>
    </nav>
    <RouterView /> <!-- This will render the Home or Courses component -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  padding: 10px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
</style>

