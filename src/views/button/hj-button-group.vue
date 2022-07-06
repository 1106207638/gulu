<template>
  <div class="hj-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="less" scoped>
.hj-button-group {
  display: flex;
  > .hj-button {
    border-radius: 0;
    margin-right: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
        position: relative;
        z-index: 1;
    }
  }
}
</style>
