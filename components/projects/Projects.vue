<template lang="html">
  <section>
    <div class="card-deck">

      <!--  DrunkDriver -->
      <div class="card shadow my-3">
        <figure class="figure">
          <img src="~assets/img/drunk.jpg" class="figure-img img-fluid rounded" alt="projects">
          <figcaption class="figure-caption text-center">
            <ul class="list-inline">
              <li class="list-inline-item">
                <p class="lead">
                  <span class="badge badge-pill badge-dark">{{ $t('projects.game.driver.tags.oop') }}</span>
                </p>
              </li>
              <li class="list-inline-item">
                <p class="lead">
                  <span class="badge badge-pill badge-dark">{{ $t('projects.game.driver.tags.ip') }}</span>
                </p>
              </li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">Java</span></p></li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">C++</span></p></li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">C</span></p></li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">JavaScript</span></p></li>
            </ul>
          </figcaption>
        </figure>
        <h2 class="card-title text-center">{{ $t('projects.game.driver.title') }}</h2>
        <div class="card-body">
          <p class="card-text">
            {{ $t('projects.game.driver.description.paragraph[0]') }}
          </p>
          <p>{{ $t('projects.game.driver.description.paragraph[1].introduction') }}</p>
          <ul>
            <li v-for="item in $t('projects.game.driver.description.paragraph[1].items')" :key="item.id">
              {{ item }}
            </li>
          </ul>

        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">
            <a
            href="https://github.com/JhonEmmanuelTorres/Project-POO"
            class="btn btn-info btn-lg"
            target="_blank"
            >{{ $t('projects.see') }}</a>
          </li>
        </ul>
      </div>

      <!-- NumericalMethods  -->
      <div class="card shadow my-3">
        <figure class="figure">
          <img src="~assets/img/numericsMethods.jpg" class="figure-img img-fluid rounded" alt="projects">
          <figcaption class="figure-caption text-center">
            <ul class="list-inline">
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">Scilab</span></p></li>
              <li class="list-inline-item">
                <p class="lead">
                  <span class="badge badge-pill badge-dark">{{ $t('projects.numericalMethods.tags.integralCalculus') }}</span>
                </p>
              </li>
              <li class="list-inline-item">
                <p class="lead">
                  <span class="badge badge-pill badge-dark">{{ $t('projects.numericalMethods.tags.diferentialCalculus') }}</span>
                </p>
              </li>
              <li class="list-inline-item">
                <p class="lead">
                  <span class="badge badge-pill badge-dark">{{ $t('projects.numericalMethods.tags.linearAlgebra') }}</span></p>
                </li>
            </ul>
          </figcaption>
        </figure>
        <h2 class="card-title text-center">{{ $t('projects.numericalMethods.title') }}</h2>
        <div class="card-body">
          <p class="card-text" v-for="item in $t('projects.numericalMethods.paragraph')" :key="item.id">
            {{ item }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">
            <a
            href="https://github.com/JhonEmmanuelTorres/MetodosNumericos"
            class="btn btn-primary btn-lg"
            target="_blank"
            >{{ $t('projects.see') }}</a>
          </li>
        </ul>
      </div>

    </div> <!-- .card-deck -->

    <div class="card-deck">

      <!-- TransaltorClojure -->
      <div class="card shadow my-3">
        <figure class="figure">
          <img src="~assets/img/translate.jpg" class="figure-img img-fluid rounded" alt="projects">
          <figcaption class="figure-caption text-center">
            <ul class="list-inline">
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">Parse</span></p></li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">Antlr</span></p></li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">Clojure</span></p></li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">Python</span></p></li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">Java</span></p></li>
            </ul>
          </figcaption>
        </figure>
        <h2 class="card-title text-center">{{ $t('projects.translator.title') }}</h2>
        <div class="card-body">
          <p class="card-text" v-for="item in $t('projects.translator.paragraph')" :key="item.id">
            {{ item }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">
            <a
            href="https://github.com/jhont285/lenguajes-de-programacion"
            class="btn btn-warning btn-lg"
            target="_blank"
            >{{ $t('projects.see') }}</a>
          </li>
        </ul>
      </div>

      <!-- ProjectDS -->
      <div class="card shadow my-3">
        <figure class="figure">
          <img src="~assets/img/dataStructures.jpg" class="figure-img img-fluid rounded" alt="projects">
          <figcaption class="figure-caption text-center">
            <ul class="list-inline">
              <li class="list-inline-item">
                <p class="lead">
                  <span class="badge badge-pill badge-dark">{{ $t('projects.dataStructures.tags.dataStructure') }}</span>
                </p>
              </li>
              <li class="list-inline-item">
                <p class="lead">
                  <span class="badge badge-pill badge-dark">{{ $t('projects.dataStructures.tags.graphs') }}</span>
                </p>
              </li>
              <li class="list-inline-item">
                <p class="lead">
                  <span class="badge badge-pill badge-dark">{{ $t('projects.dataStructures.tags.order') }}</span>
                </p>
              </li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">Java</span></p></li>
              <li class="list-inline-item"><p class="lead"><span class="badge badge-pill badge-dark">C++</span></p></li>
            </ul>
          </figcaption>
        </figure>
        <h2 class="card-title text-center">{{ $t('projects.dataStructures.title') }}</h2>
        <div class="card-body">
          <p class="card-text" v-for="item in $t('projects.dataStructures.paragraph')" :key="item.id">
            {{ item }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">
            <a
            href="https://github.com/JhonEmmanuelTorres/Implementaciones"
            class="btn btn-success btn-lg"
            target="_blank"
            >{{ $t('projects.see') }}</a>
          </li>
        </ul>
      </div>

    </div><!-- .card-deck -->

  </section>

</template>
