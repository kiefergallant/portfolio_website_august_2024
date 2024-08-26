<template>
  <div class="container ">
    <section
      :class="[
        'h-screen pl-8 transition-transform transition-opacity duration-500',
        { 'animate-slideInLeft': isVisible, 'animate-slideOutLeft': !isVisible }
      ]"
      ref="section"
    >
    <h2 class="text-white text-6xl font-bold pb-4 mt-48 pt-48 pl-16">{{ title }}</h2>
    <h2 class="text-white text-3xl pl-16 font-bold">{{ content }}</h2>
    </section>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
        isAnimating: false,
      };
    },
    mounted() {
      this.checkVisibility();
      window.addEventListener('scroll', this.checkVisibility);
      window.addEventListener('resize', this.checkVisibility); // Handle resize as well
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.checkVisibility);
      window.removeEventListener('resize', this.checkVisibility);
    },
    methods: {
      checkVisibility() {
        const rect = this.$refs.section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const shouldBeVisible = rect.top < windowHeight * 0.75 && rect.bottom >= 0;
  
        if (this.isVisible !== shouldBeVisible) {
          this.isVisible = shouldBeVisible;
          this.isAnimating = true;
          
          setTimeout(() => {
            this.isAnimating = false;
          }, 500); // Matches the duration of the animation
        }
      }
    },
    computed: {
      title() {
        return "Projects";
      },
      content() {
        return "A handful of applications I’m particularly proud of";
      }
    }
  }
  </script>
  
  <style scoped>
  /* Define transition classes */
  .opacity-0 {
    opacity: 0;
  }
  .opacity-100 {
    opacity: 1;
  }
  .translate-x-[-100%] {
    transform: translateX(-100%);
  }
  .translate-x-0 {
    transform: translateX(0);
  }
  </style>
  