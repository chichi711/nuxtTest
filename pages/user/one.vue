<template>
  <section class="container">
    <p v-for="user in users" :key="user.id">{{ user.name }}</p>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  asyncData({ $axios }) {

    // called every time before loading the component
    return axios.get('http://localhost:3000/api/users').then(res => {
    // return axios.get('api/users').then(res => {
      // console.log(res.data)
      return { users: res.data.data };
    });

  },
  fetch() {
    // The fetch method is used to fill the store before rendering the page
  },
  head() {
    // Set Meta Tags for this Page
  },
  // and more functionality to discover
  layout: "blog",
  loading: "~/components/LoadingBar.vue",
  transition: "default",
    mounted() {
      // this.$nextTick(() => {
      //   setTimeout(() => this.$nuxt.$loading.finish(), 500);
      // });
    //   axios.get('api/users').then(res => {
    //   console.log(res.data)
    // });
    }
};
</script>
