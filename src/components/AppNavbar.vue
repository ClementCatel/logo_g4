<template>
  <div class="app-navbar">
    <nav>
      <ul>
        <li><a class="app-button" :href="$router.resolve({name: 'Home'}).href"><span class="btn-content"><i class="mdi mdi-home"></i>Accueil</span></a></li>
        <li><a class="app-button" :href="$router.resolve({name: 'Interactions'}).href"><span class="btn-content"><i class="mdi mdi-gamepad-variant"></i>Interactions 3D</span></a></li>
        <li><a class="app-button" :href="$router.resolve({name: 'RA'}).href"><span class="btn-content"><i class="mdi mdi-cellphone"></i>Réalité Augmentée</span></a></li>
        <li><a class="app-button" :href="$router.resolve({name: 'Downloads'}).href"><span class="btn-content"><i class="mdi mdi-cloud-download"></i>Téléchargements</span></a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.app-navbar {
  position: absolute;
  width: 100%;
  z-index: 1;
  font-weight: 500;
  padding: 30px 0;
  font-size: 14px;
  text-transform: uppercase;
  ul {
    list-style-type: none;
    text-align: center;
  }
  li {
    padding: 0 30px;
    display: inline;
  }
  .app-button {
    color: #F9FAFF;
    display: inline-flex;
    flex: 0 0 auto;
    background-color: #1769ff;
    padding: 10px 28px;
    border-radius: 24px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    .btn-content {
      align-items: center;
      display: flex;
      flex: 1 0 auto;
      justify-content: inherit;
      line-height: normal;
    }
    i {
      font-size: 18px;
      margin-right: 10px;
    }
  }
  .app-button:hover {
    background-color: #367dff;
    box-shadow: 0 3px 8px 0 rgba(0,0,0,.17);
  }

  a {
    text-decoration: none;
    color: #FFF;
  }
}
</style>