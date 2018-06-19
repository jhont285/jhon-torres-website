<template lang="html">
  <header>
    <div class="jumbotron parallax parallax-home">
      <div class="container">
        <div class="text-left">
          <h1 class="display-4 text-light">{{ $t('projects.header.title') }}</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.parallax-home {
  background-image: url('~/assets/img/moon.jpg');
  height: 50vh;
}

</style>
