<template>
  <div class="app-container">
      <!-- <v-app-bar
        absolute
        color="transparent"
        elevation="0"
      >

      <v-toolbar-title class="font-weight-bold ml-5">Mascotte G4</v-toolbar-title

        <v-spacer/>

        <v-btn
          :href="$router.resolve({name: 'Home'}).href"
          rounded
        >
          <v-icon class="mr-2">mdi-home</v-icon>
          Accueil
        </v-btn>

        <span class="mx-5"/>

        <v-btn
          :href="$router.resolve({name: 'Interactions'}).href"
          rounded
        >
          <v-icon class="mr-2">mdi-gamepad-variant</v-icon>
          Intéractions 3D
        </v-btn>

        <span class="mx-5"/>

        <v-btn
          :href="$router.resolve({name: 'RA'}).href"
          rounded
        >
          <v-icon class="mr-2">mdi-qrcode</v-icon>
          Réalité Augmentée
        </v-btn>

        <span class="mx-5"/>

        <v-btn
          :href="$router.resolve({name: 'Downloads'}).href"
          rounded
        >
          <v-icon class="mr-2">mdi-download</v-icon>
          Téléchargements
        </v-btn>

        <v-spacer/>

      </v-app-bar> -->
      <app-navbar/>
      <router-view/>  
  </div>
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
  $image-path: '../mdb/mdbvue/img';
  @import '../mdb/mdbvue/scss/mdb-free.scss';

  @import "assets/style";
</style>
