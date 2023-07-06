<template>
  <div class="list">
  <el-table :data="userInfoList" style="width: 800px;">
    <el-table-column prop="username" label="用户名" width="180" />
    <el-table-column prop="email" label="邮箱" width="180" />
    <el-table-column prop="realName" label="姓名" width="180"/>
    <el-table-column prop="phone" label="手机号" width="180"/>
  </el-table>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>