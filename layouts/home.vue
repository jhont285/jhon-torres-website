<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">
          <i class="fa fa-paper-plane" aria-hidden="true"></i> Jhon Torres
        </nuxt-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" :class="{ 'active' : this.$nuxt.$route.path == '/' }">
              <nuxt-link :to="$i18n.path('')" class="nav-link">
                <i class="fa fa-home" aria-hidden="true"></i>
                {{ $t("home.home") }}
                <span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active' : this.$nuxt.$route.path == '/projects' }">
              <nuxt-link :to="$i18n.path('projects')" class="nav-link">
                <i class="fa fa-keyboard-o" aria-hidden="true"></i>
                {{ $t("home.projects") }}
              </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active' : this.$nuxt.$route.path == '/have-fun' }">
              <nuxt-link :to="$i18n.path('have-fun')" class="nav-link">
                <i class="fa fa-gamepad" aria-hidden="true"></i>
                {{ $t("home.haveFun") }}
              </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active' : this.$nuxt.$route.path == '/contact' }">
              <nuxt-link :to="$i18n.path('contact')" class="nav-link">
                <i class="fa fa-address-book" aria-hidden="true"></i>
                {{ $t("home.contact") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link v-if="$i18n.locale === 'es'" :to="`/en` + $route.fullPath" class="btn btn-outline-light" active-class="none" exact>
                en
              </nuxt-link>
              <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="btn btn-outline-light" active-class="none" exact>
                es
              </nuxt-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <nuxt/>

    <footer class="mt-4">
      <section class="py-5 net-contact">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="text-center">
                <p
                  class="h1"
                  v-html="$t('home.friend', { icon: '<i class=\'fa fa-heart text-danger\' aria-hidden=\'true\'></i>' })">
                </p>

                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="https://github.com/jhont285" target="_blank">
                      <i class="fa fa-github fa-4x" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://twitter.com/jhetorresto" target="_blank">
                      <i class="fa fa-twitter fa-4x" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.reddit.com/user/jhont285/" target="_blank">
                      <i class="fa fa-reddit fa-4x" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
            <div class="col-md-6">
              <p class="text-center h1">{{ $t('home.write') }}</p>
              <ul class="fa-ul">
                <li><i class="fa-li fa fa-map-marker" />Bogotá, Colombia</li>
                <li><i class="fa-li fa fa-envelope-o" />jhont285@gmail.com</li>
                <li><i class="fa-li fa fa-envelope-o" />jhetorresto@unal.edu.co</li>
              </ul>
          </div>
          </div>
        </div>
      </section>

      <section class="bg-dark">
        <p class="text-light text-center py-3 mb-0" v-html="$t('home.copyright')"></p>
      </section>

    </footer>
  </div>
</template>

<style lang="scss" scoped>

.net-contact {
  background-color: orange;
}

</style>
