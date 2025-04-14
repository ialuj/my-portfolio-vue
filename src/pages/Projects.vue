<template>
  <div class="container py-5">
    <h1 class="text-center mb-4 text-primary">Projetos</h1>

    <!-- Paginação -->
    <nav aria-label="Projetos" style="height: 40px">
      <ul class="pagination justify-content-center mb-0">
        <li
          class="page-item"
          v-for="(step, index) in totalSteps"
          :key="index"
          :class="{ active: currentStep === index }"
        >
          <a href="#" class="page-link" @click.prevent="currentStep = index">
            {{ index + 1 }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Card de Projetos -->
    <div class="card shadow-sm mb-4">
      <div class="card-body text-justify">
        <h3 class="card-title mb-3">Projetos em Destaque</h3>

        <!-- Step 1: Plataforma Phanda -->
        <div v-if="currentStep === 0" class="project">
          <h4 class="project-title text-primary">Plataforma Phanda</h4>
          <p class="project-description">
            A Plataforma Phanda é uma solução digital que conecta prestadores de
            serviços locais com potenciais clientes. A plataforma visa facilitar
            a busca por serviços pontuais, como domésticos e reparação,
            permitindo que as pessoas encontrem prestadores de serviços de
            confiança de forma rápida e eficiente. A aplicação inclui
            funcionalidades como registro de prestadores, busca por serviços,
            pagamento online e muito mais.
          </p>
          <a href="#" class="btn btn-info">Ver mais</a>
        </div>

        <!-- Step 2: Pro Portfolio -->
        <div v-if="currentStep === 1" class="project">
          <h4 class="project-title text-primary">Pro Portfolio</h4>
          <p class="project-description">
            O Pro Portfolio é uma plataforma projetada para profissionais de
            diversas áreas apresentarem seus portfólios online. Com foco na
            promoção de habilidades e serviços, a plataforma permite que os
            usuários criem e gerenciem seus portfólios, adicionando projetos e
            informações relevantes para atrair potenciais clientes. A plataforma
            também oferece integração com IA para sugerir melhorias nos
            portfólios e gerar relatórios personalizados para os usuários.
          </p>
          <a href="#" class="btn btn-info">Ver mais</a>
        </div>

        <!-- Step 3: Outros Projetos -->
        <div v-if="currentStep === 2">
          <h3 class="card-title mb-3">Outros Projetos</h3>
          <ul>
            <li><strong>Projeto 1:</strong> Descrição breve do projeto 1.</li>
            <li><strong>Projeto 2:</strong> Descrição breve do projeto 2.</li>
            <li><strong>Projeto 3:</strong> Descrição breve do projeto 3.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentStep = ref(0);
const totalSteps = 3;
</script>

<style scoped>
.project {
  margin-bottom: 20px;
}
.project-title {
  font-size: 1.5rem;
  font-weight: bold;
}
.project-description {
  font-size: 1rem;
  color: #555;
}

/* Paginador customizado se precisar ajustar */
.page-link {
  cursor: pointer;
}
</style>
