<template>
  <aside class="sidebar-menu d-flex flex-column p-3 text-white">
    <ProfileCard />
    <ul class="nav nav-pills flex-column mb-auto justify-left">
      <li>
        <router-link to="/info" class="nav-link text-white">
          Informações Pessoais
        </router-link>
      </li>
      <li>
        <router-link to="/educacao" class="nav-link text-white">
          Habilitações Literárias
        </router-link>
      </li>
      <li>
        <router-link to="/idiomas" class="nav-link text-white">
          Idiomas
        </router-link>
      </li>
      <li>
        <router-link to="/hard-skills" class="nav-link text-white">
          Hard Skills
        </router-link>
      </li>
      <li>
        <router-link to="/soft-skills" class="nav-link text-white">
          Soft Skills
        </router-link>
      </li>
      <li>
        <router-link to="/experiencia" class="nav-link text-white">
          Experiência Profissional
        </router-link>
      </li>
      <li>
        <router-link to="/projetos" class="nav-link text-white">
          Projetos
        </router-link>
      </li>
      <li>
        <router-link to="/portfolios" class="nav-link text-white">
          Portfólios
        </router-link>
      </li>
      <li>
        <router-link to="/contactos" class="nav-link text-white">
          Contactos
        </router-link>
      </li>
      <!--<li>
        <router-link to="/referencias" class="nav-link text-white">
          Referências
        </router-link>
      </li>-->
      <li>
        <router-link to="/redes" class="nav-link text-white">
          Redes Sociais
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import "../assets/styles/SidebarMenu.css";
import ProfileCard from "./ProfileCard.vue";
</script>
