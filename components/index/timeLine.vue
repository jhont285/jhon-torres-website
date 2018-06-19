<template lang="html">

  <section>
    <h2 class="text-center">
      {{ $t('root.timeLine.title') }} <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
    </h2>
    <div class="d-flex justify-content-center m-4">
      <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">
        {{ $t('root.timeLine.seeTimeline') }}
      </button>
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
                    <h4 class="timeline-title">{{ $t('root.timeLine.work1.date') }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p>{{ $t('root.timeLine.work1.text') }}</p>
                  </div>
                </div>
              </li>

              <li class="timeline-inverted">
                <div class="timeline-badge warning">
                  <i class="fa fa-book" aria-hidden="true"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">{{ $t('root.timeLine.work2.date') }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p>{{ $t('root.timeLine.work2.text') }}</p>
                  </div>
                </div>
              </li>

              <li>
                <div class="timeline-badge danger">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">{{ $t('root.timeLine.work3.date') }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p>{{ $t('root.timeLine.work3.text') }}</p>
                  </div>
                </div>
              </li>

              <li class="timeline-inverted">
                <div class="timeline-badge success">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">{{ $t('root.timeLine.work4.date') }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p>
                      {{ $t('root.timeLine.work4.text.info') }}
                      <span class="font-weight-bold">{{ $t('root.timeLine.work4.text.month') }}</span>
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="timeline-badge">
                  <i class="fa fa-book" aria-hidden="true"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">{{ $t('root.timeLine.work5.date') }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p>{{ $t('root.timeLine.work5.text') }}</p>
                  </div>
                </div>
              </li>

              <li class="timeline-inverted">
                <div class="timeline-badge warning">
                  <i class="fa fa-university" aria-hidden="true"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">{{ $t('root.timeLine.work6.date') }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p>{{ $t('root.timeLine.work6.text') }}</p>
                  </div>
                </div>
              </li>

              <li>
                <div class="timeline-badge danger">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">{{ $t('root.timeLine.work7.date') }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p>{{ $t('root.timeLine.work7.text[0]') }}</p>
                    <p class="font-weight-bold">{{ $t('root.timeLine.work7.text[1]') }}</p>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import $ from 'jquery';

export default {
  mounted () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
</script>


<style lang="scss" scoped>

.timeline-background {
  background-image: url("~assets/img/backgroundTimeLine.jpg");
  background-attachment: fixed;
  background-size: cover;
}

/* scss to time line */

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
