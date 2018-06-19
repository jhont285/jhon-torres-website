<template>
  <div>
    <header-contact />
    <main class="container">
      <section class="row">
        <div class="col-md-6 offset-md-3">
          <form-contact />
        </div>
      </section>
    </main>
  </div>
</template>

<script>

  import HeaderContact from '@/components/contact/Header.vue';
  import FormContact from '@/components/contact/Form.vue';
  export default {
    layout: 'home',
    components: {
      HeaderContact,
      FormContact
    },
  }
</script>
