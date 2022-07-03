<template>
  <div>
    <button class="hj-button">111</button>
  </div>
</template>
<script lang="ts">
export default {
  name: "hj-button",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/commit.css";

.hj-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
}
.hj-button:hover{
  border-color: var(--border-color-hover);
}
.hj-button:active{
  background-color: var( --button-active-bg);
}
</style>