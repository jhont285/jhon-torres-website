<template>
  <div>
    <header>
      <div class="jumbotron parallax parallax-home">
        <div class="container">
          <div class="text-center">
            <h1 class="display-4">Have fun</h1>
            <p class="lead">with game &quot;Code puzzle&quot;</p>
          </div>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
        <!-- instruccions -->
        <section class="col-md-6">
          <h1>Intructions <i class="fa fa-list-ol" aria-hidden="true"></i></h1>
            <ul>
              <li>
                You have to choose a number from 1 to 10 and Go, that is the number
                of digits of your number that you want to guess.
              </li>
              <li>After, You must write your number and then click on the buttom &quot;Submit&quot;</li>
              <li>
                In the bottom, Your number will appear in the left and for each
                number will appear with the next meaning
              </li>
              <ul>
                <li><i class="fa fa-arrow-up" aria-hidden="true"></i> The digit is bigger</li>
                <li><i class="fa fa-arrow-down" aria-hidden="true"></i> The digit is smaller</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> This is a digit</li>
              </ul>
              <li>The numbers will not have leading zeros except the number zero.</li>
              <li>You have only a number of attempts shown above.</li>
            </ul>
        </section>
        <section class="col-md-6">
          <h1>Code puzzle <i class="fa fa-gamepad" aria-hidden="true"></i></h1>

          <p v-if="!gameBegin" class="h3">Please select number length</p>
          <p v-else class="h3">You have {{ attempts }} attempts</p>

            <div v-if="!gameBegin">
              <div class="d-flex justify-content-center">
                <form class="form-inline">
                  <div class="form-group">
                    <select class="form-control" v-model.number="numberDigits">
                      <option v-for="n in 10" :key="n">{{ n }}</option>
                    </select>
                  </div>
                  <button @click="getNumber" class="btn btn-primary" type="submit">Go</button>
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
                    <button @click="validateMove" class="btn btn-primary btn-block" type="submit">Submit</button>
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

        </section>
      </div>
    </main>
  </div>
</template>

<script>
  // utilities
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  export default {
    layout: 'home',
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
                title: 'You win!',
                text: `The secret number is ${this.secretNumber}`,
              });
            }
            else {
              if (this.attempts === 1) { // lost
                this.numberDigits = 1;
                this.gameBegin = false;
                this.possibleAnswer = null;
                this.$swal({
                  type: 'error',
                  title: 'You lost!',
                  text: `The secret number is ${this.secretNumber}`,
                });
              }

              this.titleHint = this.possibleAnswer; //
              this.attempts--;
            }
          }
          else { // errors
            this.$swal({
              type: 'error',
              title: 'Oh no',
              text: 'Please, write a number correct',
            });
          }
        });

      },
    }
  }
</script>

<style scoped>

.parallax-home {
  background-color: BlueViolet;
  margin-bottom: 3rem;
  color: white;
}

</style>
