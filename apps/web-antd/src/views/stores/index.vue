<script setup lang="ts">
import { Layout, LayoutContent, LayoutSider } from 'ant-design-vue';
</script>

<template>
  <Layout>
    <LayoutContent />
    <LayoutSider :width="300" :style="{ background: '#fff' }">
      右侧
    </LayoutSider>
  </Layout>
</template>

<style scoped></style>
