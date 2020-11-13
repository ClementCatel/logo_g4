<template>
  <div>
    <mdb-container>
      <app-navbar/>
      <router-view/>
    </mdb-container>
    <app-footer/>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

  @import "assets/style";
</style>
