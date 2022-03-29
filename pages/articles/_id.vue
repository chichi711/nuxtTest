<template>
  <div>{{ title }}</div>
</template>

<script>
// Page Component 該怎麼拆？

// 觀察頁面組成，多個頁面重複使用，挪到 /layouts
// 各區塊切為單一元件，挪進 /components
// 觀察資料與頁面的關係，定義 props

export default {
  data() {
    return { title: 1 };
  },
  asyncData({ params }, callback) {
    callback(null, { title: 2 });
  },
  validate({params, query, store}) {
      return /^d+$/.test(params.id);
        // return false;
  },
  fetch() {},
  layout: "front",
  mounted() {
    console.info(this.title);
  }
};
</script>

<style>
</style>
