<template lang="html">
  <header>
    <div class="jumbotron parallax parallax-home">
      <div class="container">
        <h1 class="display-4 text-dark">{{ $t('contact.header.title') }}</h1>
        <p class="lead text-dark">{{ $t('contact.header.subtitle') }}</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.parallax-home {
  background-image: url("~assets/img/office.jpg");
  height: 80vh;
}

</style>
