<template>
  <div class="register">
    <div class="title">用户注册</div>
    <el-form :model="form" label-width="120px" style="border:1px solid #eee;">
    <el-form-item label="用户名">
      <el-input placeholder="请输入用户名" v-model="form.name"/>   
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="form.password"/>   
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input placeholder="请输入邮箱" v-model="form.email"/>   
    </el-form-item>
    <el-form-item label="姓名">
      <el-input placeholder="请输入姓名" v-model="form.name"/>   
    </el-form-item>
    <el-form-item label="手机号">
      <el-input placeholder="请输入手机号" v-model="form.phone"/>   
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  password: '',
  email: '',  
  name: '',
  phone: '',

})
</script>

<style scoped>
.register{
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
.title{
  font-size: ;
}
</style>