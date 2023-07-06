<template>
  <div class="list">
  <el-table :data="userInfoList" style="width: 100%">
    <el-table-column prop="用户名" label="username" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>