<template>
  <div class="login">
    <div class="title">用户登录</div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
      <el-input placeholder="请输入用户名" v-model="form.name" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="form.password" />
    </el-form-item>
    </el-form>
    
  </div>
</template>

<script setup>
</script>

<style scoped>
.login {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>