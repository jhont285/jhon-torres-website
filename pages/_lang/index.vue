<template>
  <div>
    <header-index />
    <main class="container">
      <div class="row">
        <div class="col-md-4">
          <introduction />
          <hr />
          <languages />
          <hr>
          <hobbies />
          <hr />
          <time-line />
        </div>
        <div class="col-md-4">
          <about-me />
          <hr />
          <technologies />
        </div>
        <div class="col-md-4">
          <education />
          <hr />
          <experience />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

  import HeaderIndex from '@/components/index/header.vue';
  import Introduction from '@/components/index/introduction.vue';
  import Languages from '@/components/index/languages.vue';
  import Hobbies from '@/components/index/hobbies.vue';
  import TimeLine from '@/components/index/timeLine.vue';
  import AboutMe from '@/components/index/aboutMe.vue';
  import Technologies from '@/components/index/technologies.vue';
  import Education from '@/components/index/education.vue';
  import Experience from '@/components/index/experience.vue';

  export default {
    layout: 'home',
    components: {
      HeaderIndex,
      Introduction,
      Languages,
      Hobbies,
      TimeLine,
      AboutMe,
      Technologies,
      Education,
      Experience
    }
  }

</script>
