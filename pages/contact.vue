<template>
  <div>
    <header>
      <div class="jumbotron parallax parallax-home">
        <div class="container">
          <h1 class="display-4">Contact Me</h1>
          <p class="lead">Have questions? I have answers (maybe).</p>
        </div>
      </div>
    </header>
    <main class="container">
      <section class="row">
        <div class="col-md-6 offset-md-3">
          <p>
            Want to get in touch with me? Fill out
            the form below to send me a message and
            I will try to get back to you within 24 hours!
          </p>
          <form>
            <div class="form-group">
              <label for="name">Names</label>
              <input type="text" class="form-control" :class="{ 'is-invalid' : errors.has('name') }" v-model="name" name="name" v-validate="'required|alpha_spaces'">
              <div class="invalid-feedback">{{ errors.first('name') }}</div>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="text" class="form-control" :class="{ 'is-invalid' : errors.has('email') }" v-model="email" name="email" v-validate="'required|email'">
              <div class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="text" class="form-control" :class="{ 'is-invalid' : errors.has('phone') }" v-model="phone" name="phone" v-validate="'required|numeric'">
              <div class="invalid-feedback">{{ errors.first('phone') }}</div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" Rows="3" :class="{ 'is-invalid' : errors.has('message') }" v-model="message" name="message" v-validate="'required|max:60000'"></textarea>
              <div class="invalid-feedback">{{ errors.first('message') }}</div>
            </div>
            <div class="text-center">
              <button type="submit" v-on:click="sendEmail" class="btn btn-primary">Send <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  const keys = [ 'name',  ]

  export default {
    data() {
      return { name: '', email: '', phone: '', message: '' }
    },
    methods: {
      sendEmail(e) {
        e.preventDefault();
        this.$validator.validateAll().then((result) => {
          if (result) {
            Object.keys(this.$data).forEach(item => this[item] = null);
            this.$validator.reset();
            this.$swal({
              type: 'success',
              title: 'Congratulation',
              text: 'email sent successful'
            });
          }
          else {
            this.$swal({
              type: 'error',
              title: 'Error',
              text: 'Please see the errors and try again',
            });
          }
        });
      }
    },
    layout: 'home',
  }
</script>


<style scoped>

.parallax-home {
  background-image: url("~assets/img/office.jpg");
  height: 80vh;
  color: black;
}

</style>
