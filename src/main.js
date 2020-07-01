import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import Ionic from "@ionic/vue"; // comment this line 
import { defineCustomElements as ionic } from "@ionic/core/loader"; // add a direct link to @ionic/core

import "@ionic/core/css/ionic.bundle.css";

//Vue.config.ignoredElements = [/jeep-\w*/]; // comment this line
Vue.config.ignoredElements = [/^ion-/, /^jeep-/];   // add this line

//Vue.use(Ionic);  // comment this line
ionic(window); // add this line

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
