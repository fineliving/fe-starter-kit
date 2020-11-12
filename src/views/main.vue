<template>
  <div class="retina fe-flex-column">
    <div class="fe-header">
      <Navbar v-if="1"></Navbar>
      <!--$config.SHOW_NAV-->
    </div>
    <div class="fe-page fe-flex">
      <SideBar></SideBar>
      <div class="fe-flex-auto fe-flex-column">
        <Breadcrumb></Breadcrumb>
        <div class="fe-layout fe-flex-auto">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import SideBar from "@/components/Sidebar";
export default {
  name: "Main",
  components: {
    SideBar,
    Navbar,
    Breadcrumb
  }
};
</script>

<style></style>
