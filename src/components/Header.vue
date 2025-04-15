<template>
  <header
    class="navbar navbar-expand-lg navbar-dark px-4"
    style="
      background-color: #1c1f23;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding-top: 0px; /* Garantir que o cabeçalho tenha algum espaço na parte superior */
      padding-bottom: 0px; /* Evitar que o logo fique colado ao topo */
    "
  >
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <!-- Logo à esquerda -->
      <a class="navbar-brand" href="/">
        <img
          :src="logoImage"
          alt="Professional Portfolio"
          width="120"
          class="d-inline-block align-text-top"
          style="max-height: 80px; border: none"
        />
      </a>

      <!-- Opções no canto direito -->
      <div class="d-flex">
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
  </header>
</template>

<script lang="ts" setup>
import logoImage from "@/assets/images/logo.png";
import "../assets/styles/Header.css";
</script>
