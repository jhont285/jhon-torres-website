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
              <nuxt-link to="/" class="nav-link"><i class="fa fa-home" aria-hidden="true"></i> Home <span class="sr-only">(current)</span></nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active' : this.$nuxt.$route.path == '/projects' }">
              <nuxt-link to="/projects" class="nav-link">
                <i class="fa fa-keyboard-o" aria-hidden="true"></i> Projects
              </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active' : this.$nuxt.$route.path == '/have-fun' }">
              <nuxt-link to="/have-fun" class="nav-link">
                <i class="fa fa-gamepad" aria-hidden="true"></i> Have fun
              </nuxt-link>
            </li>
            <li class="nav-item" :class="{ 'active' : this.$nuxt.$route.path == '/contact' }">
              <nuxt-link to="/contact" class="nav-link">
                <i class="fa fa-address-book" aria-hidden="true"></i> Contact me
              </nuxt-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <nuxt/>

    <footer>
      <section class="net-contact">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="text-center">
                <p class="h1">I <i class="fa fa-heart" aria-hidden="true"></i> new friends!</p>
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
                      <i class="fa fa-github fa-4x" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
            <div class="col-md-6">
              <p class="text-center h1">Write me</p>
              <ul class="fa-ul">
                <li><i class="fa-li fa fa-map-marker" />Bogotá, Colombia</li>
                <li><i class="fa-li fa fa-envelope-o" />jhont285@gmail.com</li>
                <li><i class="fa-li fa fa-envelope-o" />jhetorresto@unal.edu.co</li>
              </ul>
          </div>
          </div>
        </div>
      </section>

      <section class="copyright">
        <div class="container">
          <div class="row">
            <div class="mx-auto">
              <p>Copyright &copy; My Personal WebSite</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

.copyright {
  padding: 1rem;
  background-color: black;
  color: white;
}

.net-contact {
  margin-top: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  margin: 0px 0px 0px 0px;
  background-color: orange;
  color: black;
}

.fa-heart {
  color: red;
}
</style>
