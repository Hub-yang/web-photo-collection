<script setup lang="ts">
// Element Plus 设置中文
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = zhCn
</script>

<template>
  <el-config-provider :locale="locale">
    <base-header></base-header>
    <router-view></router-view>
    <base-footer></base-footer>
  </el-config-provider>
</template>
