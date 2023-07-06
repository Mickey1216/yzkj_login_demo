<template>
  <div class="login">
    <div class="title">用户登录</div>
    <el-form :model="loginForm" label-width="120px">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="loginForm.userName" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="loginForm.password" type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button @click="onRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue'

import { useRouter } from 'vue-router';
const router = useRouter()

const loginForm = reactive({
  userName: '',
  password: ''
})

const onLogin = () => {
  let userName = loginForm.userName.trim()
  let password = loginForm.password.trim()

  axios.post('http://192.168.0.215:8080/web/api/v1/user/login', {
    "userName": userName,
    "password": password
  }).then(res => {
    console.log(res)
    if(res.status === 200) {
      router.push('/list')
    }
  }).catch(error => {
    console.log(error)
  })
};

const onRegister = () => {
  // 跳转到注册页面
  router.
};
</script>

<style scoped>
.login {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border: 1px solid #eee;
}
.title{
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>