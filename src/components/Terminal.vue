   <template>
    <div class="terminal">
    <div class="h-screen flex items-center justify-center">
      <div class="terminal-box">
        <div class="buttons">
          <div class="button exit"></div>
          <div class="button minimize"></div>
          <div class="button fullscreen"></div>
        </div>
        <p class="welcome-text top-6 font-mono"><span class=" text-green-500 font-mono">$</span> My name is Kiefer</p>
        <p class="welcome-text top-6 font-mono"><span class=" text-green-500 font-mono">$</span> I am a developer from Canada</p>
        <p class="welcome-text top-6 font-mono"><span class=" text-green-500 font-mono">$</span> I enjoy building things</p>
        
      </div>
    </div>
  </div>
  </template>

<script>
  export default {
    name: 'TerminalBox',
  };
</script>

<style scoped>
.terminal-box {
  @apply w-96 h-48 border-2 border-slate-400 rounded-2xl bg-black text-white p-4 relative;
}

.buttons {
  @apply absolute top-4 left-4 flex space-x-2;
}

.button {
  @apply w-3 h-3 rounded-full;
}

.exit {
  @apply bg-red-500;
}

.minimize {
  @apply bg-yellow-500;
}

.fullscreen {
  @apply bg-green-500;
}

.welcome-text {
  @apply mt-6; 
}

.terminal {
  position: relative; 
  z-index: 1;
}
</style>


  