<template>
  <div class="hj-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  mounted() {
    console.log(this.$el.children);
    for (let i = 0; i < this.$el.children.length; i++) {
      let oi = this.$el.children[i];
      let name = oi.nodeName.toLowerCase();
      console.log(name);
      if (name !== "button") {
        console.warn(
          `子元素存在非button标签，请将${name}标签换为hj-button标签`
        );
      }
    }
  },
};
</script>
<style lang="less" scoped>
.hj-button-group {
  display: flex;
  > .hj-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
