<template lang="html">
  <section>
    <h2 class="text-center">
      {{ $tc("root.languages.languague", 2) }} <i class="fa fa-language" aria-hidden="true"></i>
    </h2>

    <div class="table-responsive">
      <table class="table table-hover table-bordered">
        <thead>
          <tr class="table-primary">
            <td>{{ $tc("root.languages.languague", 1) }}</td>
            <td>{{ $t("root.languages.level") }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ $t("root.languages.spanish") }}</td>
            <td>{{ $t("root.languages.native") }}</td>
          </tr>
          <tr>
            <td>{{ $t("root.languages.english") }}</td>
            <td>A2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
