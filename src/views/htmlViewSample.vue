<template>
  <div>
    <v-html-panel :url.sync="url"></v-html-panel>
  </div>
</template>
<style scoped>
p {
  color: red;
}
</style>
<script>
export default {
  data () {
    return {
      url: '',
      width: '100%'
    }
  },
  mounted () {
    this.url = '/api_plan/canvas-test'
  },
  methods: {},
}
</script>
