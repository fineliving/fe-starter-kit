<template>
  <iframe :src="url"> </iframe>
</template>

<script>
export default {
  // 使用时请使用 :url.sync=""传值
  props: {
    url: {
      required: true,
    },
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>