import { Component, Vue } from 'vue-property-decorator'

import './index.less'

@Component({
    template: require('./index.html'),
    components: {
    }
})
export class HomeComponent extends Vue {

  package: string = 'typescript-vue-webpack-example'
  repo: string = 'https://github.com/openjavascript/typescript-vue-webpack-example'
  mode: string = process.env.ENV

  test: string = 'ttt'

}

