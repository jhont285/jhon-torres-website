<template>
  <div>
    <header>
      <div class="jumbotron parallax parallax-home">
        <div class="container">
          <div class="text-right">
            <h1 class="display-4">Welcome friend!</h1>
            <p class="lead">My name is Jhon</p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-4">

            <img src="~/assets/img/cardPhotography.jpg" class="img-fluid rounded-circle" alt="my photography">
            <div class="text-justify text-motivation">
              <p>
                <i class="fa fa-terminal fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                Hi! In this website you can see my profile professional.
                My biggest passion now is to program because I can build
                things awesome. I like learning new technologies because
                these have interesting things. Lately, I am interested in
                the competitive programming, as it is a way to learn and
                have fun.
              </p>
            </div>
            <hr />

            <h2 class="text-center">
              Languagues <i class="fa fa-language" aria-hidden="true"></i>
            </h2>

            <div class="table-responsive">
              <table class="table table-hover table-bordered">
                <thead>
                  <tr class="table-primary">
                    <td>Language</td>
                    <td>Level</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spanish</td>
                    <td>Native</td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>A2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr />
            <h2 class="text-center">
              Hobbies <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
            </h2>
            <ul class="fa-ul">
              <li>
                <i class="fa fa-music fa-li" aria-hidden="true"></i> Play Guitar
              </li>
              <li>
                <i class="fa fa-bicycle fa-li" aria-hidden="true"></i> Ride Cycling
              </li>
            </ul>
          </div>

          <div class="col-md-4">

            <h2 class="text-center">
              About me <i class="fa fa-info-circle" aria-hidden="true"></i>
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
                    <div class="col-10">I am {{parseInt((new Date() - new Date(1993, 0, 28)) / 31557600000, 10)}} years old</div>
                  </div>
                </div>
              </li>

              <li class="list-group-item">
                <div class="col">
                  <div class="row">
                    <div class="col-2"><i class="fa fa-university" aria-hidden="true"></i></div>
                    <div class="col-10">I am currently studying System and Computing Engineering</div>
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
            <br />
            <div class="text-center">
              <a href="/docs/cv.pdf" class="btn btn-danger btn-lg" target="_blank" role="button">Download CV</a>
            </div>

            <hr />

            <h2 class="text-center">
              Technologies <i class="fa fa-desktop" aria-hidden="true"></i>
            </h2>

            <div class="card border-primary mb-3">
              <div class="card-header">Good Level</div>
              <div class="card-body">
                <ul class="list-inline">
                  <li type="button" class="btn btn-outline-primary list-inline-item btn-sm" v-for="tec in tecGood" :key="tec.id" data-toggle="tooltip" data-placement="top" :title="tec.split('-').slice(1).join(' ')">
                    <i :class="tec" class="fa-2x" ></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card border-info mb-3">
              <div class="card-header">Intermediate Level</div>
              <div class="card-body">
                <ul class="list-inline">
                  <li type="button" class="btn btn-outline-info list-inline-item btn-sm" v-for="tec in tecIntermediate" :key="tec.id" data-toggle="tooltip" data-placement="top" :title="tec.split('-').slice(1).join(' ')">
                    <i :class="tec" class="fa-2x" ></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card border-secondary mb-3">
              <div class="card-header">Learning</div>
              <div class="card-body">
                <ul class="list-inline">
                  <li type="button" class="btn btn-outline-secondary list-inline-item btn-sm"  v-for="tec in tecLearning" :key="tec.id" data-toggle="tooltip" data-placement="top" :title="tec.split('-').slice(1).join(' ')">
                    <i :class="tec" class="fa-2x" ></i>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div class="col-md-4">

            <!-- education -->
            <div>
              <h2 class="text-center">My education <i class="fa fa-book" aria-hidden="true"></i></h2>
              <h3>School <i class="fa fa-check text-success" aria-hidden="true"></i></h3>
              <div class="row">
                <div class="col-3">
                  <img
                    src="~assets/img/logoSchool.jpeg"
                    alt="logo school"
                    class="img-fluid rounded-circle"
                  />
                </div>
                <div class="col-9">
                  <ul>
                    <li>Alberto Lleras Camargo</li>
                    <li>Bogota, Colombia</li>
                  </ul>
                </div>
              </div>

              <h3>Technical Institute <i class="fa fa-check text-success" aria-hidden="true"></i></h3>
              <div class="row">
                <div class="col-3">
                  <img src="~assets/img/logoSENA.png" alt="logo school" class="img-fluid rounded-circle" />
                </div>
                <div class="col-9">
                  <ul>
                    <li>Servicio Nacional de Aprendizaje (SENA)</li>
                    <li><strong>Degree:</strong> System Technique</li>
                  </ul>
                </div>
              </div>

              <h3>University  <i class="fa fa-spinner text-success fa-pulse fa-fw" aria-hidden="true"></i></h3>
              <div class="row">
                <div class="col-3">
                  <img
                    src="~assets/img/logoUnal.png"
                    alt="logo school"
                    class="img-fluid rounded-circle"
                  />
                </div>
                <div class="col-9">
                  <ul>
                    <li>National University of Colombia</li>
                    <li><strong>Undegree:</strong> System and Computing Engineering</li>
                  </ul>
                  <p class="lead text-warning">In progress <strong>80%</strong></p>
                </div>
              </div>
            </div>

            <hr />

            <!--  experience -->
            <section>
              <h2 class="text-center">My experience <i class="fa fa-briefcase" aria-hidden="true"></i></h2>

              <h3>Practice SENA <i class="fa fa-check text-success" aria-hidden="true"></i></h3>
              <div class="row">
                <div class="col-3">
                  <img src="~assets/img/logoIndra.png" alt="logo school" class="img-fluid rounded" />
                </div>
                <div class="col-9">
                  <ul>
                    <li>Indra Colombia LTDA</li>
                    <li>System Technique</li>
                    <li><strong>Duration:</strong> 3 months</li>
                  </ul>
                </div>
              </div>

              <h3>My University <i class="fa fa-check text-success" aria-hidden="true"></i></h3>
              <div class="row">
                <div class="col-3">
                  <img src="~assets/img/logoUnal.png" alt="logo school" class="img-fluid rounded" />
                </div>
                <div class="col-9">
                  <ul>
                    <li>National University of Colombia</li>
                    <li>Computer Monitor</li>
                    <li><strong>Duration:</strong> 5 months</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr />

            <section>
              <h2 class="text-center">
                My Time Lime <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
              </h2>
              <div class="text-center ">
                <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">See timeline</button>
              </div>
              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-body timeline-background">
                    <ul class="timeline">
                        <li>
                          <div class="timeline-badge">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                          </div>
                          <div class="timeline-panel">
                            <div class="timeline-heading">
                              <h4 class="timeline-title">December 2009</h4>
                            </div>
                            <div class="timeline-body">
                              <p>I graduated from school Alberto Lleras Camargo</p>
                            </div>
                          </div>
                        </li>

                        <li class="timeline-inverted">
                          <div class="timeline-badge warning">
                            <i class="fa fa-book" aria-hidden="true"></i>
                          </div>
                          <div class="timeline-panel">
                            <div class="timeline-heading">
                              <h4 class="timeline-title">March 2010</h4>
                            </div>
                            <div class="timeline-body">
                              <p>I went to study at the SENA: &quot;System Technique&quot;</p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="timeline-badge danger">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                          </div>
                          <div class="timeline-panel">
                            <div class="timeline-heading">
                              <h4 class="timeline-title">April 2011</h4>
                            </div>
                            <div class="timeline-body">
                              <p>I graduated from SENA like &quot;System Technique&quot;</p>
                            </div>
                          </div>
                        </li>

                        <li class="timeline-inverted">
                          <div class="timeline-badge success">
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </div>
                          <div class="timeline-panel">
                            <div class="timeline-heading">
                              <h4 class="timeline-title">June 2011</h4>
                            </div>
                            <div class="timeline-body">
                              <p>Practice SENA. <strong>Duration 3 months</strong></p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="timeline-badge">
                            <i class="fa fa-book" aria-hidden="true"></i>
                          </div>
                          <div class="timeline-panel">
                            <div class="timeline-heading">
                              <h4 class="timeline-title">June 2012</h4>
                            </div>
                            <div class="timeline-body">
                              <p>I went to study at the Institude &quot;Escala&quot;</p>
                            </div>
                          </div>
                        </li>

                        <li class="timeline-inverted">
                          <div class="timeline-badge warning">
                            <i class="fa fa-university" aria-hidden="true"></i>
                          </div>
                          <div class="timeline-panel">
                            <div class="timeline-heading">
                              <h4 class="timeline-title">February 2013</h4>
                            </div>
                            <div class="timeline-body">
                              <p>
                                I went to study at the National University
                                of Colombia at Bogotá: &quot;System and
                                Computing Engineering&quot;.
                              </p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="timeline-badge danger">
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </div>
                          <div class="timeline-panel">
                            <div class="timeline-heading">
                              <h4 class="timeline-title">August 2016</h4>
                            </div>
                            <div class="timeline-body">
                              <p>
                                I worked as a computer monitor in the subject:
                                &quot;Jose Celestino Mutis&quot;.
                                <strong>Duration 5 months</strong>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                  </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
  import tecGood from '~/static/technologies/Good.json';
  import tecIntermediate from '~/static/technologies/Intermediate.json';
  import tecLearning from '~/static/technologies/Learning.json';
  import $ from 'jquery';

  export default {
    data() {
      return { tecGood, tecIntermediate, tecLearning }
    },
    mounted () {
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
    },
    layout: 'home',
  };
</script>


<style scoped>
.parallax-home {
  background-image: url('~/assets/img/backgroidJumboTron.jpg');
  height: 80vh;
  color: white;
}

.text-motivation {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* scss to time line */
.timeline-background {
  background-image: url("~assets/img/backgroundTimeLine.jpg");
  background-attachment: fixed;
  background-size: cover;
}

.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}

.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #eeeeee;
  left: 50%;
  margin-left: -1.5px;
}

.timeline>li {
  margin-bottom: 20px;
  position: relative;
}

.timeline>li:before, .timeline>li:after {
  content: " ";
  display: table;
}

.timeline>li:after {
  clear: both;
}

.timeline>li:before, .timeline>li:after {
  content: " ";
  display: table;
}

.timeline>li:after {
  clear: both;
}

.timeline>li>.timeline-panel {
  width: 46%;
  float: left;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  background-color: white;
}

.timeline>li>.timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}

.timeline>li>.timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}

.timeline>li>.timeline-badge {
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.6rem;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  background-color: #999999;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

.timeline>li.timeline-inverted>.timeline-panel {
  float: right;
}

.timeline>li.timeline-inverted>.timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}

.timeline>li.timeline-inverted>.timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

.timeline-badge.primary {
  background-color: #2e6da4 !important;
}

.timeline-badge.success {
  background-color: #3f903f !important;
}

.timeline-badge.warning {
  background-color: #f0ad4e !important;
}

.timeline-badge.danger {
  background-color: #d9534f !important;
}

.timeline-badge.info {
  background-color: #5bc0de !important;
}

.timeline-title {
  margin-top: 0;
  color: inherit;
}

.timeline-body>p, .timeline-body>ul {
  margin-bottom: 0;
}

.timeline-body>p+p {
  margin-top: 5px;
}

@media (max-width: 767px) {
  ul.timeline:before {
    left: 40px;
  }
  ul.timeline>li>.timeline-panel {
    width: calc(100% - 90px);
    width: -moz-calc(100% - 90px);
    width: -webkit-calc(100% - 90px);
  }
  ul.timeline>li>.timeline-badge {
    left: 15px;
    margin-left: 0;
    top: 16px;
  }
  ul.timeline>li>.timeline-panel {
    float: right;
  }
  ul.timeline>li>.timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }
  ul.timeline>li>.timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
}
</style>
