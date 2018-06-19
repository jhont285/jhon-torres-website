<template lang="html">
  <section>
    <h2 class="text-center">
      {{ $t('root.aboutMe.title') }} <i class="fa fa-info-circle" aria-hidden="true"></i>
    </h2>
    <div class="card">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="col">
          <div class="row">
            <div class="col-2">
              <i class="fa fa-address-card" aria-hidden="true"></i>
            </div>
            <div class="col-10">
              Jhon Emmanuel Torres Toloza
            </div>
          </div>
        </div>
      </li>

      <li class="list-group-item">
        <div class="col">
          <div class="row">
            <div class="col-2"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
            <div class="col-10">{{ $t('root.aboutMe.age', { "age": `${this.age}` }) }}</div>
          </div>
        </div>
      </li>

      <li class="list-group-item">
        <div class="col">
          <div class="row">
            <div class="col-2"><i class="fa fa-university" aria-hidden="true"></i></div>
            <div class="col-10">{{ $t('root.aboutMe.occupation') }}</div>
          </div>
        </div>
      </li>

      <li class="list-group-item">
        <div class="col">
          <div class="row">
            <div class="col-2"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
            <div class="col-10">Bogotá, Colombia</div>
          </div>
        </div>
      </li>
    </ul>
    </div>

    <div class="d-flex justify-content-center mt-3">
      <a href="/jhon-torres-website/docs/cv.pdf" class="btn btn-danger btn-lg" target="_blank" role="button">
        {{ $t('root.aboutMe.download') }}
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return { age: Math.trunc((new Date() - new Date(1993, 0, 28)) / 31557600000) };
    }
  }
</script>
