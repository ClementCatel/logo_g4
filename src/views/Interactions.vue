<template>
  <div class="container--fluid black--bg">
    <div class="row">
      <div class="col-12 pa-0">
        <RoomUnity />
      </div>
    </div>
  </div>
</template>

<script>
import RoomUnity from '@/components/RoomUnity.vue'

export default {
  name: 'Home',
  components: {
    RoomUnity
  }
}
</script>

<style scoped lang="scss">
</style>