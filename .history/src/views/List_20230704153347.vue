<template>
  <div class="list">
  <el-table :data="userInfoList" style="width: 100%">
    <el-table-column prop="username" label="用户名" width="180" />
    <el-table-column prop="邮箱" label="email" width="180" />
    <el-table-column prop="姓名" label="realName" />
  </el-table>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>