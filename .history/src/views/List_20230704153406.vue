<template>
  <div class="list">
  <el-table :data="userInfoList" style="width: 100%">
    <el-table-column prop="username" label="用户名" width="180" />
    <el-table-column prop="email" label="邮箱" width="180" />
    <el-table-column prop="" label="姓名realName" width="180"/>
  </el-table>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>