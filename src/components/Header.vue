<template>
  <header
    class="navbar navbar-expand-lg navbar-dark px-4"
    style="
      background-color: #1c1f23;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    "
  >
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <!-- Logo -->
      <a class="navbar-brand" href="/my-portfolio-vue/">
        <img
          :src="logoImage"
          alt="Professional Portfolio"
          width="120"
          class="d-inline-block align-text-top"
          style="max-height: 80px; border: none"
        />
      </a>

      <!-- Botão hambúrguer em mobile -->
      <button
        class="btn btn-outline-light d-lg-none"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <!-- Links do menu -->
      <div class="d-none d-lg-flex align-items-center">
        <router-link
          to="/sobre-nos"
          class="nav-link header-link text-white fw-bold"
        >
          Sobre Mim
        </router-link>
        <router-link
          to="/contacte-nos"
          class="nav-link header-link text-white ms-3 fw-bold"
        >
          Contacte-me
        </router-link>
      </div>
    </div>

    <!-- Menu colapsável para mobile -->
    <div
      v-if="isMobileMenuOpen"
      class="bg-dark d-lg-none w-100 text-center p-2"
    >
      <router-link
        to="/sobre-nos"
        class="nav-link text-white fw-bold"
        @click="closeMenu"
      >
        Sobre Mim
      </router-link>
      <router-link
        to="/contacte-nos"
        class="nav-link text-white fw-bold mt-2"
        @click="closeMenu"
      >
        Contacte-me
      </router-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import logoImage from "@/assets/images/logo.png";
import "../assets/styles/Header.css";

const isMobileMenuOpen = ref(false);

function toggleMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMenu() {
  isMobileMenuOpen.value = false;
}
</script>
