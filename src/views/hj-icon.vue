<template>
  <svg class="hj-icon"  aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script lang="ts">
export default {
  props:['name']
};
</script>
<style lang="less" scoped>
.hj-icon {
  width: 1.1em;
  height: 1.1em;
}
</style>
