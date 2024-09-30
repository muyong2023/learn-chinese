<template>
  <div>
    <h2>Chinese Courses</h2>
    <ul v-if="courses.length">
      <li v-for="course in courses" :key="course.id">
        <strong>{{ course.title }} </strong> - {{ course.description }}
      </li>
    </ul>
    <p v-else>Loading courses...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/courses') // Adjust this URL for production
      .then(response => {
        this.courses = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
</style>

