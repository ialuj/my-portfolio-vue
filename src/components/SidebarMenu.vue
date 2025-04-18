<template>
  <Transition name="slide">
    <aside
      v-show="isVisible"
      :class="[
        'text-white',
        isMobile ? 'sidebar-mobile sidebar-horizontal' : 'sidebar-menu',
      ]"
    >
      <ProfileCard v-if="!isMobile" class="mb-4" />

      <ul>
        <li v-for="item in menuItems" :key="item.to">
          <router-link
            :to="item.to"
            class="nav-link text-white"
            @click="handleClick"
          >
            <i :class="['bi', item.icon, 'fs-5']"></i>
            <span v-if="!isMobile">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </aside>
  </Transition>
</template>

<script lang="ts" setup>
import ProfileCard from "./ProfileCard.vue";
import "../assets/styles/SidebarMenu.css";

// Props
const props = defineProps<{
  isVisible: boolean;
  isMobile: boolean;
  onClose?: () => void;
}>();

// Menu data
const menuItems = [
  { to: "/info", label: "Informações Pessoais", icon: "bi-person" },
  { to: "/educacao", label: "Habilitações Literárias", icon: "bi-mortarboard" },
  { to: "/idiomas", label: "Idiomas", icon: "bi-translate" },
  { to: "/hard-skills", label: "Hard Skills", icon: "bi-tools" },
  { to: "/soft-skills", label: "Soft Skills", icon: "bi-emoji-smile" },
  {
    to: "/experiencia",
    label: "Experiência Profissional",
    icon: "bi-briefcase",
  },
  { to: "/projetos", label: "Projetos", icon: "bi-kanban" },
  { to: "/portfolios", label: "Portfólios", icon: "bi-images" },
  { to: "/contactos", label: "Contactos", icon: "bi-envelope" },
  { to: "/redes", label: "Redes Sociais", icon: "bi-share" },
];

// Fecha o menu em mobile após clique
function handleClick() {
  if (props.isMobile && props.onClose) {
    props.onClose();
  }
}
</script>
