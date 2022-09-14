<template>
  <main-tpl :loading="loading">
    <template #main>例子</template>
  </main-tpl>
</template>

<script>
import { ref } from "vue";
export default {
  name: "examplePage",
  setup() {
    const loading = ref(true);
    return {
      loading,
    };
  },
};
</script>

<style></style>
