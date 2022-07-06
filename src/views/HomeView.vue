<template>
  <div class="home">
    <hj-button icon="settings" icon-postition="right">按钮</hj-button>
    <hj-button icon="jiazai" icon-postition="left"> 123321</hj-button>
    <hj-button icon="settings" :loading="true" icon-postition="right">322dsa</hj-button>
    <hj-button-group>
      <hj-button icon="left" >322dsa</hj-button>
       <hj-button icon="settings" icon-postition="right">按钮</hj-button>
      <hj-button icon="right" icon-postition="right">322dsa</hj-button>
    </hj-button-group>
  </div>
</template>

<script >
export default {};
</script>
<style lang="less" scoped>
.home {
  border: 1px solid red;
}
</style>
