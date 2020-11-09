<template>
  <div ref="aaa" class="ace-container">
    <!-- 官方文档中使用 id，这里禁止使用，在后期打包后容易出现问题，使用 ref 或者 DOM 就行 -->
    <div class="ace—editor" ref="ace"></div>
  </div>
</template>
<script>
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-noconflict/mode-javascript' // 默认设置的语言模式

export default {
  name: 'CodeFormat',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      aceEditor: null,
      themePath: 'ace/theme/textmate',//twilight, // 不导入 webpack-resolver，该模块路径会报错
      modePath: 'ace/mode/html', // 同上
      codeValue: this.value,
    }
  },
  watch: {
    value(newVal) {
      this.aceEditor.setValue(newVal)
    },
  },
  methods:{
    refresh(){
      this.aceEditor.setValue(this.value)
      this.aceEditor.clearSelection();
      this.aceEditor.moveCursorTo(0, 0);
      console.log(this.aceEditor.getValue())
    }
  },
  mounted() {
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
  }
}
</script>