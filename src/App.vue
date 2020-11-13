<template>
  <mdb-container>
    <app-navbar/>
    <router-view/>
  </mdb-container>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'

export default {
  components: {
    AppNavbar,
  }
}
</script>

<style lang="scss">
  @import "assets/style";
</style>
