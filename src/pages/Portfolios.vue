<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 text-primary">Portfólios</h1>

    <!-- Projeto Atual -->
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h4 class="card-title text-primary">{{ currentProject.title }}</h4>
            <p class="card-text" style="text-align: justify">
              {{ currentProject.description }}
            </p>
            <p><strong>Tecnologias:</strong></p>
            <ul class="list-inline">
              <li
                class="list-inline-item badge bg-secondary me-1"
                v-for="(tech, i) in currentProject.technologies"
                :key="i"
              >
                {{ tech }}
              </li>
            </ul>
            <a
              :href="currentProject.link"
              class="btn btn-outline-primary mt-3"
              target="_blank"
            >
              {{ currentProject.demo ? "Ver Website" : "Ver no GitHub" }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Paginação -->
    <div class="d-flex justify-content-center mt-4">
      <nav style="height: 35px">
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ disabled: currentPage === 1 }"
            @click="goToPage(currentPage - 1)"
          >
            <span class="page-link">Anterior</span>
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            <span class="page-link">{{ page }}</span>
          </li>
          <li
            class="page-item"
            :class="{ disabled: currentPage === totalPages }"
            @click="goToPage(currentPage + 1)"
          >
            <span class="page-link">Próximo</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const projects = ref([
  {
    title: "Ticket Management System API",
    description:
      "API REST para gestão de tickets e atendimento. Ideal para empresas que precisam organizar chamados internos ou externos.",
    technologies: ["Spring Boot", "Oracle", "Docker"],
    link: "https://github.com/ialuj/ticketmanagementsystem-api",
    demo: false,
  },
  {
    title: "Gerenciador de Projetos",
    description:
      "Sistema completo de gestão de projetos, utilizando RichFaces e banco MySQL. Implementa controle de tarefas e prazos.",
    technologies: [
      "RichFaces",
      "MySQL",
      "JPA",
      "Hibernate",
      "Liquibase",
      "Tomcat",
    ],
    link: "https://github.com/ialuj/gerenciador_de_projetos",
    demo: false,
  },
  {
    title: "Processador de Imagem API",
    description:
      "API para redimensionamento de imagens, aplicação de filtros e manipulação via filas. Inclui documentação Swagger.",
    technologies: [
      "Spring Boot",
      "MariaDB",
      "RabbitMQ",
      "Docker",
      "Liquibase",
      "Swagger",
    ],
    link: "https://github.com/ialuj/processadordeimagem-api",
    demo: false,
  },
  {
    title: "Findat Buyat",
    description:
      "Website de vendas de produtos digitais. Projetado para facilitar o acesso rápido e seguro a conteúdos digitais em Moçambique e além.",
    technologies: ["Wordpress", "Bootstrap", "Hospedagem Web"],
    link: "https://findatbuyat.com/",
    demo: true,
  },
]);

const currentPage = ref(1);
const itemsPerPage = 1;

const totalPages = computed(() =>
  Math.ceil(projects.value.length / itemsPerPage)
);

const currentProject = computed(
  () => projects.value[(currentPage.value - 1) * itemsPerPage]
);

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
</script>

<style scoped>
.page-item {
  cursor: pointer;
}
.page-item.disabled .page-link {
  cursor: not-allowed;
}
</style>
