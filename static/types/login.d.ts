import Vue, { VNode } from "vue";


declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
    interface Vue {
        formLogin?: any;
        validateField: any;
        validate: any;
        $Message: any;
        model: any;
    }
    /*
    interface Element {
        validateField: any;
    }
    interface VueElement{
        validateField: any;
    }
    interface VueComponent {
        validateField: any;
    }
    */
}
