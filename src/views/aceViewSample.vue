<template>
  <div class="fe-flex-auto">
    <div class="fe-scroll-y">
      <div class="fe-view fe-page" >
        <div class="fe-box fe-page">
          <div style="position: absolute;right:16px;margin: 16px;z-index: 1;">
            <el-button type="primary" icon="el-icon-search" @click="openShowEditor">搜索</el-button>
          </div>
          <el-row class="fe-page">
            <el-col v-if="showEditor" :span="10" style="height: 100%;">
              <div class="codePaneTool">
                  <span>源代码编辑器</span>
                  <div class="text-primary" @click="run()">重置</div>
                  <div class="text-primary" @click="refresh()">运行</div>
              </div>
              <code-format :value="jeditor.value"></code-format>
              </el-col>
            <el-col :span="span" style="height: 100%;"><iframe ref="iframe" style="width: 100%;height:100%;border:0;" unselectable="on" src="/api_plan/canvas-test/menu.html"></iframe></el-col>
          </el-row>
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
      showEditor:true,
      span:14
    }
  },
  components: {
    CodeFormat,
  },
  methods: {
    initEditor(val){
      this.jeditor.value = val
    },
    openShowEditor(){
      this.showEditor = !this.showEditor
      if (this.span === 14) {
        this.span = 24
      }else{
        this.span = 14
      }
    },
    run(){
      console.log('run')
    },
    refresh(){
      console.log('refresh')
    }
  },
  mounted() {
    this.$http.get('/api_plan/canvas-test/menu.html').then((response) => {
      this.initEditor(response.data)
    })
    .catch(() => {
      this.html = '加载失败'
    })
  }
}
</script>
<style lang="scss" scoped>
.codePaneTool{
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 24px;
  z-index: 800;
  background-color: white;
  padding: 8px 22px;
  box-shadow: 0 2px 10px #dddddd;
}
</style>
