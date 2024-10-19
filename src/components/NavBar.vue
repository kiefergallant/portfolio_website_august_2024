<template>
  <header class=" border-solid border-neutral-800 border-b-2 p-6  bg-opacity-10 backdrop-blur-sm shadow-md fixed top-0 left-0 w-full z-50">
    <nav >
      <ul class="flex justify-start text-lg">
        <li class="text-white hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer px-4">
          <a href="#home" @click.prevent="scrollToTop()">Home</a>
        </li>
        <li class="text-white hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer px-4">
          <a href="#about" @click.prevent="scrollToSection('about')">About</a>
        </li>
        <li class="text-white hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer px-4">
          <a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });

        // Reset animation state after smooth scroll
        setTimeout(() => {
          const sectionComponent = section.__vue__;
          if (sectionComponent && typeof sectionComponent.resetAnimation === 'function') {
            sectionComponent.resetAnimation();
          }
        }, 500); // Adjust timeout based on scroll animation duration
      }
    }
  }
};
</script>

<style scoped>
/* No custom styles needed, relying on Tailwind CSS for backdrop blur */
</style>
