<template>
  <div>
    <header-have-fun />
    <main class="container">
      <div class="row">
        <section class="col-md-6">
          <instructions />
        </section>
        <section class="col-md-6">
          <game />
        </section>
      </div>
    </main>
  </div>
</template>

<script>

  import HeaderHaveFun from '@/components/haveFun/header.vue';
  import Instructions from '@/components/haveFun/Instructions.vue';
  import Game from '@/components/haveFun/Game.vue';


  export default {
    layout: 'home',
    components: {
      HeaderHaveFun,
      Instructions,
      Game
    },
  }
</script>
