<template>
    <div class="webgl-content">
        <div id="unityContainerMascotte"></div>
    </div>
</template>

<script>
export default {
  name: 'MascotteUnity',
}
</script>

<style scoped lang="scss">
  //@import "~@/assets/Unity/unity.css";
  #unityContainerMascotte {
    background-color:#628066 !important;
  }

  .webgl-content {
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
  }
</style>
