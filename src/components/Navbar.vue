<template>
  <div class="navbar">
        <nav>
            <ul>
                <li><a class="button" :href="$router.resolve({name: 'Home'}).href"><span class="btn-content"><i class="mdi mdi-home"></i>Accueil</span></a></li>
                <li><a class="button" :href="$router.resolve({name: 'Interactions'}).href"><span class="btn-content"><i class="mdi mdi-gamepad-variant"></i>Interactions 3D</span></a></li>
                <li><a class="button" :href="$router.resolve({name: 'RA'}).href"><span class="btn-content"><i class="mdi mdi-qrcode"></i>Réalité Augmentée</span></a></li>
                <li><a class="button" :href="$router.resolve({name: 'Downloads'}).href"><span class="btn-content"><i class="mdi mdi-cloud-download"></i>Téléchargements</span></a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.navbar {
  position: absolute;
  width: 100%;
  z-index: 1;
  font-weight: 500;
  padding: 30px 0;
  font-size: 18px;
  text-transform: uppercase;
  ul {
    list-style-type: none;
    text-align: center;
  }
  li {
      padding: 0 30px;
      display: inline;
  }
  .button {
      display: inline-flex;
      flex: 0 0 auto;
      background-color: #FFF;
      padding: 10px 20px;
      border-radius: 24px;
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;
      transition: all .5s;
      .btn-content {
        align-items: center;
        display: flex;
        flex: 1 0 auto;
        justify-content: inherit;
        line-height: normal;
      }
      i {
          font-size: 24px;
          margin-right: 10px;
      }
  }
  .button:hover {
      background-color: #d6d6d6;
  }

  a {
      text-decoration: none;
      color: #000000DE;
  }
}
</style>