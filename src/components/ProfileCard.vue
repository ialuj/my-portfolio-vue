<template>
  <div class="text-center mb-4">
    <img
      :src="profileImage"
      alt="Foto de perfil"
      class="rounded-circle"
      width="130"
      height="130"
    />
    <h5 class="mt-2">{{ profileName }}</h5>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  profileImage: {
    type: String,
    default: "/src/assets/images/profile.JPG", // Caminho padrão da imagem
  },
  profileName: {
    type: String,
    default: "José Julai Ritsure", // Nome padrão
  },
});
import "../assets/styles/ProfileCard.css";
</script>
