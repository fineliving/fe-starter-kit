<template>
  <section class="fe-page">
    <div style="position: absolute;right:16px;margin: 16px;z-index: 1;">
      <div class="show-code-btn cursor-pointer" @click="openShowEditor">
        <i :class="codeBtnIcon"></i>
        <span style="margin-left:4px">{{codeBtn}}</span>
        </div>
    </div>
    <el-row class="fe-page">
      <el-col v-if="showEditor" :span="10" style="height: 100%;">
        <div class="code-format-tool">
            <span>源代码编辑器</span>
            <div class="editor-btn text-primary cursor-pointer" @click="run">
              <i class="el-icon-video-play"></i>
              运行
            </div>
            <div class="editor-btn text-primary cursor-pointer" @click="refresh">
              <i class="el-icon-refresh-left"></i>
              重置
            </div>
        </div>
        <!-- <code-format ref="codeFormat" :value="jeditor.value"></code-format> -->
        <div class="ace—editor" ref="ace"></div>
      </el-col>
      <el-col :span="span" style="height: 100%;">
        <iframe ref="iframe" style="width: 100%;height:100%;border:0;" unselectable="on" src=""></iframe>
        </el-col>
    </el-row>
  </section>
</template>

<script>
// import CodeFormat from '@/components/CodeFormat'
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-noconflict/mode-javascript' // 默认设置的语言模式
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  // components: {
  //   CodeFormat,
  // },
  data() {
    return {
      aceEditor: null,
      themePath: 'ace/theme/textmate',//twilight, // 不导入 webpack-resolver，该模块路径会报错
      modePath: 'ace/mode/html', // 同上
      codeValue: '1111',
      codeBtn:'收缩',
      codeBtnIcon:'el-icon-turn-off',
      showEditor:true,
      span:14
    }
  },
  watch: {
    url() {
      this.initEditor().then(()=>{
        this.aceEditor.setValue(this.codeValue)
        this.run()
      })
    }
  },
  methods: {
    initEditor(){
      this.aceEditor = ace.edit(this.$refs.ace, {
        maxLines: this.$parent.$el.clientHeight/16, // 最大行数，超过会自动出现滚动条
        minLines: this.$parent.$el.clientHeight/16, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
        fontSize: 12, // 编辑器内字体大小
        theme: this.themePath, // 默认设置的主题
        mode: this.modePath, // 默认设置的语言模式
        tabSize: 4, // 制表符设置为 4 个空格大小
        readOnly: false,
        highlightActiveLine: true,//false,
        useWrapMode:true,
        value: this.codeValue,
      })
      this.aceEditor.setOption("wrap", "free") // 设置自动换行
      this.aceEditor.clearSelection();
      this.aceEditor.moveCursorTo(0, 0);
      if (this.url) {
        return this.$http.get(this.url).then((response) => {
          this.codeValue = response.data
        })
        .catch(() => {
          this.html = '加载失败'
        })
      }
    },
    openShowEditor(){
      this.showEditor = !this.showEditor
      this.codeBtnIcon = this.codeBtnIcon === 'el-icon-turn-off'?'el-icon-open':'el-icon-turn-off'
      this.codeBtn = this.codeBtn === '收缩'?'源码':'收缩'
      this.span = this.span === 14?this.span = 24:this.span = 14
    },
    run(){
      let iframeDocument =this.$refs.iframe.contentWindow.document
      iframeDocument.open();
      console.log(this.aceEditor.getValue())
      iframeDocument.write(this.aceEditor.getValue());
      iframeDocument.close();
    },
    refresh(){
      this.aceEditor.setValue(this.codeValue)
      this.aceEditor.clearSelection();
      this.aceEditor.moveCursorTo(0, 0);
      this.run()
    }
  },
  mounted() {
      this.initEditor()
      this.aceEditor.setValue(this.codeValue)
      this.run()
  }
}
</script>
<style lang="scss" scoped>
.show-code-btn{
  // cursor: pointer;
  z-index: 900;
  position: absolute;
  top: 4px;
  right: 0;
  padding: 0 10px;
  min-width: 54px;
  height: 30px;
  width: 70px;
  line-height: 30px;
  margin: 4px;
  text-align: center;
  background-color: rgba(34, 45, 50, 0.7);
  color: #fff;
}
.code-format-tool{
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 24px;
  z-index: 800;
  background-color: white;
  padding: 8px 22px;
  box-shadow: 0 2px 10px #dddddd;
}
.editor-btn{
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  float: right;
}
</style>
