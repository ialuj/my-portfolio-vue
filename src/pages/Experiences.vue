<template>
  <div class="container py-5">
    <h1 class="text-center mb-5 text-primary">Experiência Profissional</h1>

    <!-- Paginação numerada -->
    <!-- Paginação -->
    <nav aria-label="Experiências" style="height: 40px">
      <ul class="pagination justify-content-center mb-0">
        <li
          class="page-item"
          v-for="(job, index) in jobs"
          :key="index"
          :class="{ active: currentStep === index }"
        >
          <a href="#" class="page-link" @click.prevent="currentStep = index">
            {{ index + 1 }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Conteúdo da experiência selecionada -->
    <div class="card shadow-sm mb-4" style="height: 70px">
      <div class="card-body text-justify">
        <h3 class="card-title mb-3">
          {{ jobs[currentStep].title }}
        </h3>
        <p><strong>Período:</strong> {{ jobs[currentStep].period }}</p>
        <p><strong>Responsabilidades:</strong></p>
        <ul>
          <li v-for="(resp, i) in jobs[currentStep].responsibilities" :key="i">
            {{ resp }}
          </li>
        </ul>
        <p><strong>Competências adquiridas:</strong></p>
        <ul>
          <li v-for="(skill, j) in jobs[currentStep].skills" :key="j">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentStep = ref(0);

const jobs = [
  {
    title:
      "Health Information Systems Software Developer - Friends In Global Health (FGH)",
    period: "Dezembro, 2021 - Julho, 2022 | Abril, 2023 - Setembro, 2024",
    responsibilities: [
      "Análise e Conceção da Arquitetura de Aplicações.",
      "Configuração da Aplicação.",
      "Prototipagem de Telas.",
      "Codificação e Testes manuais de funcionalidades.",
      "Auxiliar o cliente durante o processo de Homologação de funcionalidades.",
      "Elaboração de consultas e scripts SQL.",
      "Participação no desenho e codificação de soluções para problemas comuns dos diversos produtos internos.",
      "Participação no processo de entrega de aplicações nos ambientes de Produção.",
    ],
    skills: [
      "Desenvolvimento de aplicativos Android.",
      "Desenvolvimento de SPA com Vue.js e Quasar.",
      "Integração com API OpenMRS.",
      "Uso de Docker.",
      "Desenvolvimento de APIs com Micronaut.",
    ],
  },
  {
    title: "BackEnd Java Developer - Atende Certo",
    period: "Julho, 2022 – Março, 2023",
    responsibilities: [
      "Análise e Conceção da Arquitetura de Aplicações.",
      "Configuração da Aplicação e Codificação.",
      "Testes manuais de funcionalidades e Elaboração de consultas SQL.",
      "Participação no desenho e codificação de soluções para problemas comuns dos diversos produtos internos.",
      "Participação no processo de entrega de aplicações nos ambientes de Produção.",
    ],
    skills: [
      "Desenvolvimento de APIs com Spring Boot.",
      "Integração com a API Twilio (para envio de SMS’s e WhatsApp).",
      "Integração com a API SendGrid (para envio de e-mails).",
      "Integração com a API Zendesk (para gestão de Tickets).",
      "Integração com a API Cielo e MagFinanças (para pagamentos via PIX, cartão de crédito/débito).",
      "Integração com Google Cloud (GCP) - Pub/Sub, App Engine, Cloud Storage.",
    ],
  },
  {
    title: "Analista de Suporte - Engineering do Brasil",
    period: "Janeiro, 2022 – Fevereiro, 2022",
    responsibilities: ["Suporte ao utilizador (Análise e resolução de Bug)."],
    skills: [
      "Microsoft Azure - uso de serviços de nuvem.",
      "Kanban - uso de metodologia ágil Kanban para gestão de atividades.",
      "Angular - Bugfixes em projeto AngularJs.",
      "Suporte e atendimento à requisições de utilizadores finais.",
    ],
  },
  {
    title: "Full Stack Web Developer - TRANSCOM",
    period: "Agosto, 2021 – Novembro, 2021",
    responsibilities: [
      "Elaboração de Especificações de Requisitos e Artefactos do processo de Análise de Sistemas.",
      "Elaboração de Especificações de Testes funcionais e Prototipagem de Telas.",
      "Codificação observando TDD e DDD.",
      "Automatização de testes funcionais e Testes de carga.",
      "Auxílio no processo de Homologação de funcionalidades e elaboração de consultas SQL.",
      "Participação no processo de entrega de aplicações nos ambientes de Produção.",
    ],
    skills: [
      "Git - aplicação do workflow completo, incluindo integração com Docker.",
      "Cypress - automação de testes funcionais.",
      "JSP - desenvolvimento de frontend web com Java Server Pages.",
      "ReactJs - desenvolvimento de SPA.",
    ],
  },
  {
    title: "Programador/Analista de Sistemas - CEDSIF",
    period: "Agosto, 2014 – Agosto, 2021",
    responsibilities: [
      "Participação nos processos de Análise e Concepção da Arquitetura de Aplicações.",
      "Elaboração de Artefactos de Análise de Sistemas e Especificações de Testes funcionais.",
      "Codificação seguindo a metodologia TDD e realização de testes de funcionalidades.",
      "Participação na criação de relatórios e entrega de aplicações nos ambientes de Produção.",
    ],
    skills: [
      "Java 7/8 - desenvolvimento de aplicações com Java.",
      "MySQL e Oracle - gestão de bases de dados.",
      "JSP e ZK Framework - desenvolvimento de frontend web.",
      "Jasper Reports - criação de relatórios dinâmicos.",
      "Jenkins - automação de testes unitários e deploys.",
      "Docker - uso de containers para acelerar o desenvolvimento.",
      "Scrum e Sonarqube - uso de metodologias ágeis e ferramentas de qualidade de código.",
      "Web Services - RESTful e SOAP.",
    ],
  },
];
</script>

<style scoped>
.text-justify {
  text-align: justify;
}
.pagination .page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: #fff;
}
</style>
