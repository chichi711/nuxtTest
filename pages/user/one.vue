<template>
  <p>5555555</p>
</template>
<script>
export default {
  asyncData(context) {
    // called every time before loading the component
    return { name: "World" };
  },
  fetch() {
    // The fetch method is used to fill the store before rendering the page
  },
  head() {
    // Set Meta Tags for this Page
  },
  // and more functionality to discover
  layout: "blog",
  loading: '~/components/LoadingBar.vue',
  transition: 'default',
//   mounted() {
//     this.$nextTick(() => {
//       setTimeout(() => this.$nuxt.$loading.finish(), 500);
//     });
//   }
};
</script>
