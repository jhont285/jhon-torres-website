<template lang="html">
  <section>
    <h2 class="text-center">{{ $t('root.education.title') }} <i class="fa fa-book" aria-hidden="true"></i></h2>
    <h3>{{ $t('root.education.school') }} <i class="fa fa-check text-success" aria-hidden="true"></i></h3>
    <div class="card shadow mb-3">
      <div class="card-body">
      <div class="row">
        <div class="col-4">
          <div class="mx-auto">
            <img
            src="~assets/img/logoSchool.jpeg"
            alt="logo school"
            class="img-fluid rounded-circle text-center"
            />
          </div>
        </div>
        <div class="col-8">
          <ul>
            <li>Alberto Lleras Camargo</li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <h3>{{ $t('root.education.institute.title') }} <i class="fa fa-check text-success" aria-hidden="true"></i></h3>
    <div class="card shadow mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <img src="~assets/img/logoSENA.png" alt="logo school" class="img-fluid rounded-circle" />
          </div>
          <div class="col-8">
            <ul class="mb-0">
              <li>Servicio Nacional de Aprendizaje (SENA)</li>
              <li>
                <span class="font-weight-bold">{{ $t('root.education.institute.degree') }}:</span>
                {{ $t('root.education.institute.nameDegree') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <h3>{{ $t('root.education.university.title') }}  <i class="fa fa-spinner text-success fa-pulse fa-fw" aria-hidden="true"></i></h3>
    <div class="card mb-4">
      <div class="card-body shadow">
        <div class="row">
          <div class="col-4">
            <img
              src="~assets/img/logoUnal.png"
              alt="logo school"
              class="img-fluid rounded-circle"
            />
          </div>
          <div class="col-8">
            <ul>
              <li>Universidad Nacional de Colombia</li>
              <li>
                <span class="font-weight-bold">{{ $t('root.education.university.undegree') }}:</span>
                {{ $t('root.education.university.nameUndegree') }}
              </li>
            </ul>
          </div>
        </div>
        <p class="lead text-warning text-center mb-0">
          {{ $t('root.education.university.progress') }}: <span class="font-weight-bold">82%</span>
        </p>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style="width: 82%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  </section>

</template>
