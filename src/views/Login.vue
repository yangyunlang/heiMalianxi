<template>
  <div class="login">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <!-- 使用封装组件时的属性设置默认会设置给封装组件的根元素 -->
        <!-- 如果封装组件设置了props,那么优先为props中的成员赋值 -->
        <hminput
          placeholder="请输入用户名/手机号"
          :rules="/^(\d{5,6})$|^(1\d{10})$/"
          msg="用户名或者手机号输入不正确"
          :value="users.username"
          @input="handleinput"
        ></hminput>
        <hminput
          placeholder="请输入密码"
          :rules="/^\S{3,16}$/"
          msg="请输入3-16位的密码"
          v-model="users.password"
        ></hminput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <hmbutton @click="login">登陆</hmbutton>
    </div>
  </div>
</template>

<script>
import hmbutton from '@/components/hmbutton.vue'
import hminput from '@/components/hminput.vue'
export default {
    components:{
        hmbutton,hminput
    },
    data () {
        return {
            users:{
                username:'10086',
                password:'123'
            }
        }
    },
    methods:{
        login(){
            console.log('登录');
             this.$router.push({name:'Personal'})
        }
    }
}
</script>

<style>
</style>