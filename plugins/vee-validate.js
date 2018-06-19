// import Vue from 'vue';
// import VeeValidate, { Validator } from 'vee-validate';
//
// import es from 'vee-validate/dist/locale/es';
// import en from 'vee-validate/dist/locale/en';
//
// // Localize takes the locale object as the second argument (optional) and merges it.
// Validator.localize('es', es);
//
// // Install the Plugin.
// Vue.use(VeeValidate);
//

import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';

import es from 'vee-validate/dist/locale/es';
import en from 'vee-validate/dist/locale/en';

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('es', es);

// Install the Plugin.
Vue.use(VeeValidate);
