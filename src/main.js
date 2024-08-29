import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "@/router/index.js";

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { createPinia } from 'pinia';

import { globalMixin } from "@/mixin/globalMixin.js";
import {Tooltip} from "bootstrap";

const vuetify = createVuetify ({
    components,
    directives,
});
const pinia = createPinia();

window.myCurrentUser = {
    isUserLoggedIn: true,
    isAdmin: true,
    userId: 1,
};



const app = createApp(App)
    .use(vuetify)
    .use(pinia)
    .use(router)
    .mixin(globalMixin);
app.directive('tooltipActivate',{
    mounted(el, binding) {
        let tooltip = new Tooltip(el, {
            placement: binding.arg || 'top',
            title: binding.value
        });
    }
}
)

app.mount('#app');
