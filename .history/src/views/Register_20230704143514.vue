<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input aria-placeholder=""/>   
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
}
</script>

<style scoped>
.registerCt{
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
</style>