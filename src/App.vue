<template>
  <v-app class="white--bg" id="app">
    <router-view/>
  </v-app>
</template>

<style lang="scss">
  @import "assets/style";

  html {
    body {
      #app {
        background-color: $white--color;
      }
    }
  }
</style>
