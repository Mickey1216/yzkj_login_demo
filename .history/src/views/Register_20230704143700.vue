<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input placeholder="请输入用户名" v-model="form.name"/>   
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="form.name"/>   
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<style scoped>

</style>