<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <sidebar />

      <div
        class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
        :class="sideBarOpen ? 'overlay' : ''"
        id="main-content"
      >
        <navbar />

        <div class="p-6 bg-gray-100 mb-20">
          <slot />
        </div>

        <app-footer />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/views/components/Sidebar.vue";
import Navbar from "@/views/components/Navbar.vue";
import AppFooter from "@/views/components/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "DefaultLayout",
  computed: {
    ...mapState(["sideBarOpen"]),
  },
  components: {
    Sidebar,
    Navbar,
    AppFooter,
  },
};
</script>
