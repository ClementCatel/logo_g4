<template>
    <div class="webgl-content">
      <div id="unityContainerRoom"/>
      <div class="text-right"><p>En fullscreen c'est mieux 😉</p></div>
       <div class="footer">
          <div class="fullscreen" onclick="unityInstanceRoom.SetFullscreen(1)"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RoomUnity',
}
</script>

<style scoped lang="scss">
  @import "~@/assets/Unity/unity.css";
  
  #unityContainerRoom {
    background-color: #69625C !important  ;
  }
</style>
