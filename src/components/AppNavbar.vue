<template>
  <mdb-navbar class="z-depth-0 px-0" expand="large" light color="transparent">
    <mdb-navbar-brand>
      <a :href="$router.resolve({name: 'Home'}).href">SAMY</a> 
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item class="mr-4" :href="$router.resolve({name: 'Home'}).href">Accueil</mdb-nav-item>
        <mdb-nav-item class="mr-4" :href="$router.resolve({name: 'Interactions'}).href" >Intéractions 3D</mdb-nav-item>
        <mdb-nav-item :href="$router.resolve({name: 'Downloads'}).href">Téléchargements</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
    color: #32325d;
  }
</style>