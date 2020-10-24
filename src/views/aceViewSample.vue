<template>
  <div class="fe-flex-auto">
    <div class="fe-scroll-y">
      <div class="fe-view fe-flex-column" style="height:100%">
        <div style="height:100%;" class="fe-box">
          <iframe ref="iframe" unselectable="on" src="/api_plan/canvas-test/menu.html"></iframe>
          <!-- <div ref="code" class="ace_editor" style="height: 350px;min-height:inherit;max-height: 800px;"></div> -->
          <code-format :value="jeditor.value"></code-format>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeFormat from '@/components/CodeFormat'
export default {
  data() {
    return {
      jeditor: {
        value: '1111',
      },
    }
  },
  components: {
    CodeFormat,
  },
  methods: {},
  mounted() {
    console.log(new XMLSerializer().serializeToString(this.$refs.iframe.contentDocument))
    this.jeditor.value = new XMLSerializer().serializeToString(this.$refs.iframe.contentDocument)
  },
}
</script>
