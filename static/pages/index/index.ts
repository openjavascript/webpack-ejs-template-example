import Vue from 'vue'
import App from '@static/components/app'
import { makeHot, reload } from '@static/utils/hot-reload'
import { createRouter } from './router'

import iView from 'iview';

Vue.use( iView );

new Vue({
    el: '#app',
    router: createRouter(),
    render: h => h(App),
    components: {
    }
})
