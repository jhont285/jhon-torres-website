<template lang="html">
  <div>
    <p>{{ $t('contact.form.paragraph') }}</p>
    <form>
      <div class="form-group">
        <label for="name">{{ $t('contact.form.names') }}</label>
        <input type="text" class="form-control" :class="{ 'is-invalid' : errors.has('name') }" v-model="name" name="name" v-validate="'required|alpha_spaces'">
        <div class="invalid-feedback">{{ errors.first('name') }}</div>
      </div>
      <div class="form-group">
        <label for="email">{{ $t('contact.form.email') }}</label>
        <input type="text" class="form-control" :class="{ 'is-invalid' : errors.has('email') }" v-model="email" name="email" v-validate="'required|email'">
        <div class="invalid-feedback">{{ errors.first('email') }}</div>
      </div>
      <div class="form-group">
        <label for="phone">{{ $t('contact.form.phone') }}</label>
        <input type="text" class="form-control" :class="{ 'is-invalid' : errors.has('phone') }" v-model="phone" name="phone" v-validate="'required|numeric'">
        <div class="invalid-feedback">{{ errors.first('phone') }}</div>
      </div>
      <div class="form-group">
        <label for="message">{{ $t('contact.form.message') }}</label>
        <textarea class="form-control" Rows="3" :class="{ 'is-invalid' : errors.has('message') }" v-model="message" name="message" v-validate="'required|max:60000'"></textarea>
        <div class="invalid-feedback">{{ errors.first('message') }}</div>
      </div>
      <div class="text-center">
        <button type="submit" @click="sendEmail" class="btn btn-primary">
          {{ $t('contact.form.send') }} <i class="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>

  export default {
    data() {
      return { name: '', email: '', phone: '', message: '' }
    },
    methods: {
      sendEmail(e) {
        e.preventDefault();

        this.$validator.validateAll()
          .then((result) => {
            if (result) {
              Object.keys(this.$data).forEach(item => this[item] = null);
              this.$validator.reset();
              this.$swal({
                type: 'success',
                title: this.$t('contact.form.success.title'),
                text: this.$t('contact.form.success.text'),
              });
            }
            else {
              this.$swal({
                type: 'error',
                title: this.$t('contact.form.error.title'),
                text: this.$t('contact.form.error.text'),
              });
            }
          });
      }
    },
  }

</script>
