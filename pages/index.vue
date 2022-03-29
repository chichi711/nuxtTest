<template>
  <h1>Hi ! {{ title }}</h1>
  <!-- <Tutorial /> -->
</template>

<script>
export default {
  layout: "blog",
  name: "IndexPage",
  loading: "~/components/LoadingBar.vue",
  transition: "intro",
  asyncData () {
    return fetch('http://localhost:3000/api/hello', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        // asyncData 方法獲取的數據會與組件數據合併，所以這裡返回對象
        return {
          title: res.title
        }
      })
  }
  // mounted() {
  //   this.$nextTick(() => {
  //     setTimeout(() => this.$nuxt.$loading.finish(), 500);
  //   });
  // }
};
</script>
