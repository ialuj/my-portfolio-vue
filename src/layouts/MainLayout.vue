<template>
  <div class="d-flex flex-column vh-100">
    <!-- Cabeçalho -->
    <Header />

    <div class="d-flex flex-grow-1 mt-5 w-100">
      <!-- Menu Lateral fixo à esquerda -->
      <div class="col-3 p-0">
        <SidebarMenu />
      </div>

      <!-- Conteúdo Principal -->
      <main class="col-9 p-4 overflow-auto">
        <router-view />
      </main>
    </div>

    <!-- Rodapé -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import "../assets/styles/App.css";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import SidebarMenu from "../components/SidebarMenu.vue";
</script>
