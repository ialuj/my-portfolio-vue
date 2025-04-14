import { createRouter, createWebHistory } from "vue-router";

import PersonalInfo from "../pages/PersonalInfo.vue";
import Education from "../pages/Education.vue";
import Languages from "../pages/Languages.vue";
import HardSkills from "../pages/HardSkills.vue";
import SoftSkills from "../pages/SoftSkills.vue";
import Experiences from "../pages/Experiences.vue";
import Projects from "../pages/Projects.vue";
import Portfolios from "../pages/Portfolios.vue";
import Contacts from "../pages/Contacts.vue";
import References from "../pages/References.vue";
import SocialMedias from "../pages/SocialMedias.vue";
import About from "../pages/About.vue";
import ContactUs from "../pages/ContactUs.vue";
import Certifications from "../pages/Certifications.vue";

const routes = [
  { path: "/", redirect: "/info" },
  { path: "/info", component: PersonalInfo },
  { path: "/educacao", component: Education },
  { path: "/idiomas", component: Languages },
  { path: "/hard-skills", component: HardSkills },
  { path: "/soft-skills", component: SoftSkills },
  { path: "/experiencia", component: Experiences },
  { path: "/projetos", component: Projects },
  { path: "/portfolios", component: Portfolios },
  { path: "/contactos", component: Contacts },
  { path: "/referencias", References },
  { path: "/redes", component: SocialMedias },
  { path: "/sobre-nos", component: About },
  {
    path: "/contacte-nos",
    component: ContactUs,
  },
  {
    path: "/certificacoes",
    component: Certifications,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
