import Vue from 'vue'
import VueMaterial from 'vue-material';
import iView from 'iview';

Vue.use( iView );
Vue.use(VueMaterial);

const LoginComponent =  (require('./subpages/login') as any).LoginComponent;

// tslint:disable-next-line:no-unused-expression
new Vue({
    el: '#app',
    computed: {
        viewComponent() {
            return LoginComponent;
        }
    },
    render( h ){ return h(this.viewComponent) }
});

