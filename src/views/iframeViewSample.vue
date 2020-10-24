<template>
  <div class="fe-flex-auto">
    <div class="fe-scroll-y">
      <div class="fe-view">
        <!-- <div style="height:1000px;" class="fe-box fe-p">comming-soon</div> -->
        <v-iframe-panel id="external" style="width: 100%;border:0;" :url.sync="url"></v-iframe-panel>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
  color: red;
}
</style>
<script>
export default {
  data() {
    return {
      url: '',
      width: 10,
    }
  },
  mounted() {
    this.url = '/api_plan/canvas-test/menu.html'
    this.sendMessage()
  },
  methods: {
    sendMessage() {
      // console.log(window, document)
      let that = this
      if (window.postMessage) {
        if (window.addEventListener) {
          window.addEventListener(
            'message',
            function(e) {
              if (!isNaN(+e.data)) {
                that.cb(e.data)
              }
            },
            false
          )
        } else if (window.attachEvent) {
          window.attachEvent('onmessage', function(e) {
            that.cb(e.data)
          })
        }

        return function(data) {
          ifr.postMessage(data, '*')
        }
      } else {
        var hash = ''

        setInterval(function() {
          if (window.name !== hash) {
            hash = window.name
            that.cb(hash)
          }
        }, 50)
        return function(data) {
          ifr.name = data
        }
      }
    },
    cb(json) {
      let iframe = document.getElementById('external')
      iframe.height = +json + 10 + this.width + 'px'
    },
  },
}
</script>
