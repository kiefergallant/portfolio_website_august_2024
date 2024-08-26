<template>
  <div class="bg-black ">
    <NavBar />
    <Terminal />
    <AboutSection id="about" />
    <ProjectsSection id="projects" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Terminal from './components/Terminal.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';



export default {
  name: 'App',
  components: {
    NavBar,
    Terminal,
    AboutSection,
    ProjectsSection
  }
};
</script>
