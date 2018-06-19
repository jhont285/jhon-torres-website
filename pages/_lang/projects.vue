<template>
  <div>
    <header-projects />
    <main class="container">
      <projects />
    </main>
  </div>
</template>

<script>
  import HeaderProjects from '@/components/projects/header.vue';
  import Projects from '@/components/projects/Projects.vue';

  export default {
    layout: 'home',
    components: {
      HeaderProjects,
      Projects,
    },
  }
</script>
