<template>
  <div>
    <header>
      <div class="jumbotron parallax parallax-home">
        <div class="container">
          <div class="text-right">
            <h1 class="display-4 text-light">Welcome friend!</h1>
            <p class="lead text-light">My name is Jhon</p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-4">

            <img src="~assets/img/cardPhotography.jpg" class="img-fluid rounded-circle" alt="my photography">
            <p class="text-justify my-4">
              <i class="fa fa-terminal fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
              Hi! In this website you can see my profile professional.
              My biggest passion now is to program because I can build
              things awesome. I like learning new technologies because
              these have interesting things. Lately, I am interested in
              the competitive programming, as it is a way to learn and
              have fun.
            </p>
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
              <a href="/jhon-torres-website/docs/cv.pdf" class="btn btn-danger btn-lg" target="_blank" role="button">Download CV</a>
            </div>

            <hr />

            <h2 class="text-center">
              Technologies <i class="fa fa-desktop" aria-hidden="true"></i>
            </h2>

            <div class="card border-dark my-3">
              <div class="card-header">Good Level</div>
              <div class="card-body">
                <ul class="list-inline text-center">
                  <li class="btn btn-outline-dark list-inline-item btn-sm m-1" v-for="tec in tecGood" :key="tec.id" data-toggle="tooltip" data-placement="top" :title="tec.split('-').slice(1).join(' ')">
                    <i :class="tec" class="fa-2x" ></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card border-dark mb-3">
              <div class="card-header">Intermediate Level</div>
              <div class="card-body">
                <ul class="list-inline text-center">
                  <li class="btn btn-outline-dark list-inline-item btn-sm m-1" v-for="tec in tecIntermediate" :key="tec.id" data-toggle="tooltip" data-placement="top" :title="tec.split('-').slice(1).join(' ')">
                    <i :class="tec" class="fa-2x" ></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card border-dark mb-3">
              <div class="card-header">Learning</div>
              <div class="card-body">
                <ul class="list-inline text-center">
                  <li class="btn btn-outline-dark list-inline-item btn-sm m-1"  v-for="tec in tecLearning" :key="tec.id" data-toggle="tooltip" data-placement="top" :title="tec.split('-').slice(1).join(' ')">
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
                    <li><span class="font-weight-bold">Degree:</span> System Technique</li>
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
                    <li><span class="font-weight-bold">Undegree:</span> System and Computing Engineering</li>
                  </ul>
                  <p class="lead text-warning">In progress: <span class="font-weight-bold">80%</span></p>
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
                    <li><span class="font-weight-bold">Duration:</span> 3 months</li>
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
                    <li><span class="font-weight-bold">Duration:</span> 5 months</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr />

            <section>
              <h2 class="text-center">
                My Time Lime <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
              </h2>
              <div class="d-flex justify-content-center m-4">
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
                              <div>Practice SENA. <p class="font-weight-bold">Duration 3 months</p></div>
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
                              </p>
                              <p class="font-weight-bold">Duration 5 months</p>

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
  import Index from './_lang/index';
  export default Index;
</script>
