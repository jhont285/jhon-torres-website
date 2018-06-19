<template lang="html">
    <div>
      <h1>{{ $t('haveFun.areaGame.title') }} <i class="fa fa-gamepad" aria-hidden="true"></i></h1>

      <p v-if="!gameBegin" class="h3">
        {{ $t('haveFun.areaGame.notBegin') }}
      </p>
      <p v-else class="h3">
        {{ $t('haveFun.areaGame.begin', { attempts: this.attempts }) }}
      </p>

        <div v-if="!gameBegin">
          <div class="d-flex justify-content-center">
            <form class="form-inline">
              <div class="form-group">
                <select class="form-control" v-model.number="numberDigits">
                  <option v-for="n in 10" :key="n">{{ n }}</option>
                </select>
              </div>
              <button @click="getNumber" class="btn btn-primary" type="submit">
                {{ $t('haveFun.areaGame.go') }}
              </button>
            </form>
          </div>
        </div>
        <div v-else>
          <form>
            <div class="form-row">
              <div class="col-9">
                <input
                  type="text"
                  class="form-control" :class="{ 'is-invalid' : errors.has('number') }"
                  name="number"
                  v-model="possibleAnswer"
                  v-validate="`required|numeric|min_value:${Math.pow(10, numberDigits - 1)}|length:${numberDigits}`"
                />
                <div class="invalid-feedback">{{ errors.first('number') }}</div>
              </div>
              <div class="col-3">
                <button @click="validateMove" class="btn btn-primary btn-block" type="submit">
                  {{ $t('haveFun.areaGame.submit') }}
                </button>
              </div>
            </div>
          </form>

          <h2 class="text-center" v-show="attempts < numberDigits * 4">Hint</h2>
          <div class="table-responsive" v-if="attempts < numberDigits * 4">
            <table class="table table-bordered">
              <thead>
                <tr >
                  <th v-for="digit in titleHint" :key="digit.id" class="text-center">{{ digit }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td v-for="(value, i) in numberDigits" :key="i" class="text-center">
                    <i v-if="secretNumber[i] === titleHint[i]" class="fa fa-check" aria-hidden="true"></i>
                    <i v-else-if="parseInt(secretNumber[i]) > parseInt(titleHint[i])" class="fa fa-arrow-up" aria-hidden="true"></i>
                    <i v-else class="fa fa-arrow-down" aria-hidden="true"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>


  </div>
</template>

<script>

  // utilities
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  export default {
    data() {
      return {
        gameBegin: false,
        numberDigits: 1,
        secretNumber: null,
        attempts: null,
        possibleAnswer: null,
        titleHint: null,
        hint: null,
      };
    },
    methods: {
      getNumber(e) {
        e.preventDefault();

        // set variables
        if (this.numberDigits === 1)
          this.secretNumber = String(getRndInteger(0, 10));
        else
          this.secretNumber = String(getRndInteger(Math.pow(10, this.numberDigits - 1), Math.pow(10, this.numberDigits)));
        this.attempts = this.numberDigits * 4;
        this.gameBegin = true;
        this.hint = new Array(this.numberDigits);
      },
      validateMove(e) {
        e.preventDefault();

        this.$validator.validateAll().then((result) => {
          if (result) {
            if (this.secretNumber === this.possibleAnswer) { // win
              this.numberDigits = 1;
              this.gameBegin = false;
              this.possibleAnswer = null;
              this.$swal({
                type: 'success',
                title: this.$t('haveFun.areaGame.success.title'),
                text: this.$t('haveFun.areaGame.success.text', { secretNumber: this.secretNumber } ),
              });
            }
            else {
              if (this.attempts === 1) { // lost
                this.numberDigits = 1;
                this.gameBegin = false;
                this.possibleAnswer = null;
                this.$swal({
                  type: 'error',
                  title: this.$t('haveFun.areaGame.errorLost.title'),
                  text: this.$t('haveFun.areaGame.errorLost.text', { secretNumber: this.secretNumber } ),
                });
              }

              this.titleHint = this.possibleAnswer; //
              this.attempts--;
            }
          }
          else { // errors
            this.$swal({
              type: 'error',
              title: this.$t('haveFun.areaGame.errorType.title'),
              text: this.$t('haveFun.areaGame.errorType.text'),
            });
          }
        });

      },
    }
  }

</script>
