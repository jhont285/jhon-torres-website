<template lang="html">

  <!--  experience -->
  <section>
    <h2 class="text-center">{{ $t('root.experience.title') }} <i class="fa fa-briefcase" aria-hidden="true"></i></h2>

    <h3>
      {{ $t('root.experience.institute.name') }}
      <i class="fa fa-check text-success" aria-hidden="true"></i>
    </h3>
    <div class="card shadow mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <img src="~assets/img/logoIndra.png" alt="logo school" class="img-fluid rounded" />
          </div>
          <div class="col-8">
            <ul class="mb-0">
              <li>Indra Colombia LTDA</li>
              <li>{{ $t('root.experience.institute.position') }}</li>
              <li>
                <span class="font-weight-bold">
                  {{ $t('root.experience.institute.duration') }}:
                </span>
                {{ $t('root.experience.institute.time') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <h3>
      {{ $t('root.experience.university.name') }}
      <i class="fa fa-check text-success" aria-hidden="true"></i>
    </h3>
    <div class="card shadow">
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <img src="~assets/img/logoUnal.png" alt="logo school" class="img-fluid rounded" />
          </div>
          <div class="col-8">
            <ul>
              <li>Universidad Nacional de Colombia</li>
              <li>{{ $t('root.experience.university.position') }}</li>
              <li>
                <span class="font-weight-bold">{{ $t('root.experience.university.duration') }}:</span>
                {{ $t('root.experience.university.time') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
