<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign in</h1>
                    <p class="text-xs-center">
                        <a href="">Have an account?</a>
                    </p>

                    <ul class="error-messages">
                        <li>That email is already taken</li>
                    </ul>

                    <form @submit.prevent="onLoginSubmit">
                        <fieldset class="form-group">
                            <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from "@/api/user"

export default{
    name:"LoginIndex",
    data(){
        return{
            user:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        async onLoginSubmit(){
            try{
                const {data} = await login(this.user)
                console.log(data)

                //记录登录状态：将登录成功获取的用户数据存储到Vuex容器中
                this.$store.commit("setUser",data.user)

                //跳转到首页
                this.$router.push({
                    name:"home"
                })
            }catch(err){
                console.log("登录失败")
            }
        }
    }
}
</script>
