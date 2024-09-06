 <template>
  <div class="container">
    <div id="experience-container" class="pl-4 md:pl-16">
      <div class="experience-box flex flex-col items-start p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
          <h1 class="text-slate-100 text-2xl font-semibold ml-2">Experience</h1>
        </div>
        <div>
          <h1 class="font-bold text-lg">Junior Software Developer - CE-Solutions (April-August)</h1>
          <p class="text-base">Wrote code in Vue and wrote automated tests in Cypress</p>
        </div>
        <div>
          <h1 class="font-bold text-lg pt-8">Research Assistant - MacEwan University - Alberta Innovates (April 2024-August 2024)</h1>
          <p class="text-base">Wrote code in Vue and wrote automated tests in Cypress</p>
        </div>
      </div>
    </div>

    <div id="education-container" class="pt-16 pl-4 md:pl-16">
      <div class="education-box flex flex-col items-start p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          <h1 class="text-slate-100 text-2xl font-semibold ml-2">Education</h1>
        </div>
        <div>
          <h1 class="font-bold text-lg">Bachelor of Science - MacEwan University (September 2020 - June 2025)</h1>
          <h1 class="font-bold text-lg mt-4">Major: Computer Science</h1>
          <h1 class="font-bold text-lg">Minor: Psychology</h1>
          <p class="font-bold text-base mt-4">Relevant Courses</p>
          <p class="text-base">CMPT 395 - Introduction to Software Engineering</p>
          <p class="text-base">CMPT 220 - Unix, Scripting, Linux, and Bash</p>
          <p class="text-base">CMPT 280 - Introduction to Computer Security</p>
          <p class="text-base">CMPT 360 - Advanced Programming in the Unix Environment</p>
          <p class="text-base">CMPT 201 - Practical Programming Methodology in C</p>
          <p class="text-base">CMPT 200 - Data Structures and Algorithms</p>
        </div>
        <div>
          <h1 class="font-bold text-lg">Southern Alberta Institute of Technology (September 2020 - June 2025)</h1>
          <p class="text-base">Wrote code in Vue and wrote automated tests in Cypress</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationExperience',
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.experience-box, .education-box {
  @apply w-full md:w-2/3 border-2 border-slate-400 rounded-2xl bg-black text-white p-4 relative;
}

@media (min-width: 768px) {
  .experience-box, .education-box {
    padding: 1rem 2rem;
  }
}
</style>
