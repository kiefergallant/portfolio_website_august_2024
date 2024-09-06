<template>
    <section :class="['h-screen pt-24 pl-8 transition-transform transition-opacity duration-500',{ 'animate-slideInLeft': isVisible, 'animate-slideOutLeft': !isVisible }]"ref="section">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <h2 class="col-span-2 text-white text-6xl font-bold pl-16 pb-1">{{ title }}</h2>
        <h2 class="col-span-2 text-white text-3xl pl-16 font-bold">{{ content }}</h2>
      </div>
          


        <ExperienceEducation class="ml-2"/>
    </section>
</template>
  
<script>
import ExperienceEducation from './ExperienceEducation.vue';
  export default {
    components: {
    ExperienceEducation
  },
    data() {
      return {
        isVisible: false,
        isAnimating: false,
      };
    },
    mounted() {
      this.checkVisibility();
      window.addEventListener('scroll', this.checkVisibility);
      window.addEventListener('resize', this.checkVisibility);
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
          }, 500); 
        }
      }
    },
    computed: {
      title() {
        return "About Me";
      },
      content() {
        return "Check out my professional journey";
      }
    }
  }
  </script>
  
  <style scoped>
  
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
  