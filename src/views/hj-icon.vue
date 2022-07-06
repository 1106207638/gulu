<template>
  <svg class="hj-icon" :class="name==='jiazai'?'loading':''" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script lang="ts">
export default {
  props: ["name"],
};
</script>
<style lang="less" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.hj-icon {
  width: 1.1em;
  height: 1.1em;
}
.loading{
  animation: spin 1s infinite linear;
}
</style>
