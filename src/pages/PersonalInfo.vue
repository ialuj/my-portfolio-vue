<template>
  <div class="container py-5">
    <h1 class="text-center mb-4 text-primary">Informações Pessoais</h1>

    <div class="row g-4">
      <!-- Dados Pessoais -->
      <div class="col-lg-6">
        <div class="card border-0 shadow rounded-4 h-100">
          <div class="card-body" style="text-align: justify">
            <h3 class="card-title text-secondary mb-4">
              <i class="bi bi-person-circle me-2"></i> Dados Pessoais
            </h3>
            <p>
              <i class="bi bi-person-fill me-2 text-primary"></i>
              <strong>Nome Completo:</strong> José Julai Ritsure
            </p>
            <p>
              <i class="bi bi-geo-alt-fill me-2 text-primary"></i>
              <strong>Endereço:</strong> Mathlemele, Cidade da Matola, Maputo
              Província
            </p>
            <p>
              <i class="bi bi-envelope-fill me-2 text-primary"></i>
              <strong>Email:</strong> ritsure.julai.jose@gmail.com
            </p>
            <p>
              <i class="bi bi-telephone-fill me-2 text-primary"></i>
              <strong>Telefone:</strong> +258 84 70 97 334
            </p>
            <p>
              <i class="bi bi-whatsapp me-2 text-success"></i>
              <strong>WhatsApp:</strong>
              <a
                href="https://wa.me/258824976175"
                target="_blank"
                class="text-decoration-none link-dark"
              >
                +258 82 49 76 175
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- Redes Sociais -->
      <div class="col-lg-6">
        <div class="card border-0 shadow rounded-4 h-100">
          <div class="card-body" style="text-align: justify">
            <h3 class="card-title text-secondary mb-4">
              <i class="bi bi-globe me-2"></i> Redes Sociais
            </h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="bi bi-linkedin me-2 text-primary"></i>
                <strong>LinkedIn:</strong>
                <a
                  href="https://www.linkedin.com/in/josé-julai-ritsure-8b607873/"
                  target="_blank"
                  class="text-decoration-none link-dark"
                >
                  linkedin.com/in/josé-julai-ritsure-8b607873/
                </a>
              </li>
              <li class="mb-3">
                <i class="bi bi-github me-2 text-dark"></i>
                <strong>GitHub:</strong>
                <a
                  href="https://github.com/ialuj"
                  target="_blank"
                  class="text-decoration-none link-dark"
                >
                  github.com/ialuj
                </a>
              </li>
              <li>
                <i class="bi bi-twitter-x me-2 text-info"></i>
                <strong>Twitter:</strong>
                <a
                  href="https://x.com/julai_jose31932"
                  target="_blank"
                  class="text-decoration-none link-dark"
                >
                  x.com/julai_jose31932
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.card-title {
  font-size: 1.5rem;
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
  color: #0d6efd !important;
}
</style>
