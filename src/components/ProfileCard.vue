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
  profileName: {
    type: String,
    default: "José Julai Ritsure", // Nome padrão
  },
});
import profileImage from "@/assets/images/profile.jpg";
import "../assets/styles/ProfileCard.css";
</script>
