<template>
  <section class="container">
    <div v-for="article in articles" :key="article.id">
      <p>{{ article.title }}</p>
      <a :href="article.url" target="_blank">
        <!-- <img :src="article.media[0]['media-metadata'][0].url" alt> -->
      </a>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  asyncData({ $axios }) {
    const url =
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=a8a7bea8b95f4ef986e504ec99287013";
    return axios.get(url).then(res => {
      return { articles: res.data.results };
    });
  },
  fetch() {
    // The fetch method is used to fill the store before rendering the page
  },
  head() { // if head == func , can use this get data val
    // Set Meta Tags for this Page
    title: '77電商 - 巧克力不烺妮'
  },
  head: {
      // head can be obj
  },
  // and more functionality to discover
  layout: "blog",
  loading: "~/components/LoadingBar.vue",
  transition: "default"
  //   mounted() {
  //     this.$nextTick(() => {
  //       setTimeout(() => this.$nuxt.$loading.finish(), 500);
  //     });
  //   }
};
</script>
