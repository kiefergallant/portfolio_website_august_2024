<template>
  <div class="bg-black min-h-screen flex flex-col">
    <NavBar />
    <Terminal class="ml-2 mr-2"/>
    <div class="content-container flex-1 px-4">
      <AboutSection id="about" class="-ml-16  sm:ml-2 md:mb-12 lg:mb-16 xl:mb-20 text-base sm:text-sm md:text-sm lg:text-2xl xl:text-3xl" />
      <ProjectsSection id="projects" class="-ml-16 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 text-xs sm:text-left   md:text-sm lg:text-2xl xl:text-3xl" />
    </div>
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

<style scoped>
.bg-black {
  background-color: #000; /* Ensure this is the desired black background color */
}

.content-container {
  margin-top: 1rem; /* Space below Terminal, reduced for smaller screens */
  padding-bottom: 2rem; /* Extra padding at the bottom */
}

/* Tailwind classes handle responsive margins and paddings */
</style>
