<template>
    <div class="education">
      <div class="h-screen flex items-center justify-left pl-16 pb-32">
        <div class="education-box flex flex-col items-start p-4">
          <div class="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>

            <h1 class="text-slate-100 text-2xl font-semibold">Education</h1>
          </div>
          <div>
            <h1 class="font-bold text-lg">Junior Software Developer - CE-Solutions (April-August)</h1>
            <p>Wrote code in Vue and wrote automated tests in Cypress</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
<script>
  export default {
    name: 'EducationSection',
  };
</script>

<style scoped>
.education-box {
  @apply w-2/3 h-1/2 border-2 border-slate-400 rounded-2xl bg-black text-white p-4 relative;
}

.education-box{
    position: relative; 
    z-index: 1;
}
</style>
