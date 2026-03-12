<template>
  <el-container>
    <el-header>
      <h2>Event App</h2>

      <el-button type="primary" @click="$router.push('/create')">
        创建 Event
      </el-button>
    </el-header>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style>
body {
  margin: 0;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
