<template lang="html">
  <section>
    <h2 class="text-center">
      {{ $t('root.technologies.title') }} <i class="fa fa-desktop" aria-hidden="true"></i>
    </h2>

    <div class="card border-dark my-3" v-for="(value, index) in levels" :key="value">
      <div class="card-header">{{ $t(`root.technologies.levels[${index}]`) }}</div>
      <div class="card-body">
        <ul class="list-inline text-center">
          <li  v-for="tec in value" :title="capitalize(tec)" :key="tec.id" class="btn btn-outline-dark list-inline-item btn-sm m-1" data-toggle="tooltip" data-placement="top" >
            <i :class="tec" class="fa-2x" ></i>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

  import tecGood from '~/static/technologies/Good.json';
  import tecIntermediate from '~/static/technologies/Intermediate.json';
  import tecLearning from '~/static/technologies/Learning.json';

  export default {
    data() {
      return { levels: [tecGood, tecIntermediate, tecLearning] }
    },
    methods: {
      capitalize(word) {

        word = word.split('');
        word.splice(0, word.indexOf('-') + 1);
        let changeToUpperCase = true;

        word.forEach((item, index, array) => {
          if (changeToUpperCase) {
            array[index] = item.toUpperCase();
            changeToUpperCase = false;
          }
          else {
            if (item === '-') {
              changeToUpperCase = true;
              array[index] = ' ';
            }
          }
        });

        word = word.join('');
        return word;
      }
    }
  }
</script>

<style lang="css">
</style>
