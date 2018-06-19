<template lang="html">
  <header>
    <div class="jumbotron parallax parallax-home">
      <div class="container">
        <div class="text-right">
          <h1 class="display-4 text-light">{{ $t("root.header.title") }}</h1>
          <p class="lead text-light">{{ $t("root.header.subtitle") }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .parallax-home {
    background-image: url('~/assets/img/backgroidJumboTron.jpg');
    height: calc(100vh - 50px);
  }
</style>
