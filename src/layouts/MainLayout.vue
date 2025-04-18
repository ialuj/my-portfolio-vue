<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Cabeçalho -->
    <Header @toggle-sidebar="toggleSidebar" />

    <div class="d-flex flex-grow-1 flex-wrap">
      <!-- Menu Lateral -->
      <SidebarMenu
        :isVisible="showSidebar"
        :isMobile="!isLargeScreen"
        :onClose="() => (showSidebar = false)"
      />

      <!-- Conteúdo Principal -->
      <main class="flex-grow-1 col-12 col-md-9 p-4 overflow-auto">
        <router-view />
      </main>
    </div>

    <!-- Rodapé -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import Footer from "../components/Footer.vue";

const showSidebar = ref(false);
const isLargeScreen = ref(window.innerWidth >= 768);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

onMounted(() => {
  const handleResize = () => {
    isLargeScreen.value = window.innerWidth >= 768;

    // Mostrar ou esconder sidebar baseado na tela
    if (isLargeScreen.value) {
      showSidebar.value = true;
    } else {
      showSidebar.value = true; // <- deixar visível no mobile também
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
});
</script>
