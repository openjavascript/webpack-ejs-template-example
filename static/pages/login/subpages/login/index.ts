import { Component, Vue } from 'vue-property-decorator'
import App from '@static/components/app'

import './index.less'

//import {request} from '../../../static/utils/fetch';
import {request} from '@static/example';


@Component({
    template: require( './index.html' )
    , components: {
        App
    }
})
export class LoginComponent extends Vue {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请填写密码'));
            } else {
                callback();
            }
        };

        return {
            formLogin: {
                formtype: 'normal',
                username: '',
                password: ''
            },
            loginRule: {
                username: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' }
                    , { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
                ],
                password: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ]
            }
        }
    }

    handleSubmit (name)  {
        console.log( 'handleSubmit', name, Date.now() );
        console.log( this.formLogin );
        let form = (this.$refs[name] as Vue)
        //console.log( 'form data', JSON.stringify( form.model ) );
        form.validate((valid) => {
            if (valid) {
                this.$Message.success('Success!');
            } else {
                this.$Message.error('Fail!');
            }
        })
    }
    handleReset (name)  {
        console.log( 'handleReset', name, Date.now() );
        /*this.$refs[name].resetFields();*/
    }


}
