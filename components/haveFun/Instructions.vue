<template lang="html">
  <div>
    <h1>{{ $t('haveFun.instructions.title') }} <i class="fa fa-list-ol" aria-hidden="true"></i></h1>
    <ul>
      <li v-for="item in $t('haveFun.instructions.paragraph')" :key="item.id">
        {{ item }}
      </li>
      <li>
        {{ $t('haveFun.instructions.digits.text') }}
        <ul>
          <li><i class="fa fa-arrow-up" aria-hidden="true"></i>
            {{ $t('haveFun.instructions.digits.up') }}
          </li>
          <li><i class="fa fa-arrow-down" aria-hidden="true"></i>
            {{ $t('haveFun.instructions.digits.down') }}
          </li>
          <li><i class="fa fa-check" aria-hidden="true"></i>
            {{ $t('haveFun.instructions.digits.check') }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
