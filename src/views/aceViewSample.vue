<template>
  <div class="fe-flex-auto">
    <div class="fe-scroll-y">
      <div class="fe-view fe-page">
        <div class="fe-page fe-box">
          <editor-panel :url="url"></editor-panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditorPanel from "@/components/EditorPanel";
export default {
  components: {
    EditorPanel
  },
  data() {
    return {
      url: ""
    };
  },
  mounted() {
    this.url =
      "https://fineliving.github.io/Leaflet.markercluster/example/marker-clustering-realworld.388.html"; //"/api_plan/canvas-test/menu.html"; //"https://fineliving.github.io/canvas-test/client.html"; //"/test.html"; //"/test.html";
  }
};
</script>

<style></style>
