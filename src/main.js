import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCartPlus,
  faClock,
  faDollarSign,
  faEnvelope,
  faEye,
  faFish,
  faMapMarkerAlt,
  faPhoneAlt,
  faQuoteLeft,
  faRubleSign,
  faShoppingBasket,
  faTimes,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

library.add(
  faShoppingBasket,
  faArrowCircleLeft,
  faArrowCircleRight,
  faFish,
  faDollarSign,
  faTruck,
  faClock,
  faRubleSign,
  faCartPlus,
  faEye,
  faQuoteLeft,
  faTimes,
  faInstagram,
  faVk,
  faFacebookF,
  faTwitter,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faPaperPlane
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
