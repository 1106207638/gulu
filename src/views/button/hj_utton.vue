<template>
  <button class="hj-button" :class="{ [`icon-${iconPostition}`]: true }" @click="btnClick">
    <hj-icon  class='icon' v-if="icon && !loading" :name="icon"></hj-icon>
    <hj-icon  class='icon' v-if="loading" name="jiazai"></hj-icon>
    <div class="hj_button_content"><slot></slot></div>
  </button>
</template>
<script lang="ts">
export default {
  name: "hj-button",
  data() {
    return {};
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPostition: {
      type: String,
      default: "left",
      validator(val) {
        return val === "left" || val === "right";
      },
    },
  },
  methods:{
    btnClick(){
      console.log(1111)
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/commit.css";

.hj-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin: 0 0 0.1 0em;
  }
  > .hj_button_content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin: 0 0 0 0.1em;
    }
    > .hj_button_content {
      order: 1;
    }
  }
}
</style>