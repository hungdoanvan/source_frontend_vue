<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <Sidebar />

      <div class="w-full bg-gray-100 pl-64 min-h-screen" id="main-content">
        <Navbar />

        <div class="p-6 bg-gray-100 mb-20">
          <slot />
        </div>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/views/components/Sidebar.vue";
import Navbar from "@/views/components/Navbar.vue";
import Footer from "@/views/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
};
</script>
