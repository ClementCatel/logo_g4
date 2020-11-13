<template>
  <mdb-container fluid class="black--bg white--text" id="downloads-container">
    <mdb-row class="justify-content-center my-3">
      <h3 class="font-weight-bold">Téléchargement des différents fichiers</h3>
    </mdb-row>
    <mdb-row class="justify-content-center">
      <mdb-col col="auto">
        <img :src="imgBg" class="img-fluid" alt="L'image d'une classe de G4 avec la mascotte intégrée dessus" id="img-bg">
      </mdb-col>
      <mdb-col col="auto">
        <div>
          Modèle 3D au format .fbx
          <mdb-btn outline="amber" class="style-btn py-0 px-2" @click="download('DownloadModel')">
            <i class="mdi mdi-folder-download"></i>
          </mdb-btn>
        </div>
        <div>
          Application pour la réalité augmentée
          <mdb-btn outline="amber" class="style-btn py-0 px-2" @click="download('DownloadRA')">
            <i class="mdi mdi-folder-download"></i>
          </mdb-btn>
        </div>
        <div>
          Mascotte et ses flyers préfaits au format .png dans un .zip
          <mdb-btn outline="amber" class="style-btn py-0 px-2" @click="download('DownloadFlyers')">
            <i class="mdi mdi-folder-download"></i>
          </mdb-btn>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {mdbCol, mdbContainer, mdbRow, mdbBtn} from "mdbvue";

export default {
  name: 'Downloads',

  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  },

  data() {
    return {
      imgBg: require("../assets/img/mascotte/exemple_integration.png")
    }
  },

  methods: {
    download(arg) {
      if (arg === 'DownloadModel') {
        window.location = "/Download/mascotte.fbx"
      } else if (arg === 'DownloadFlyers') {
        window.location = "/Download/flyers.zip"
      } else if (arg === 'DownloadRA') {
        window.location = this.$router.resolve({name: 'RA'}).href
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #downloads-container {
    padding-top: 100px;
    #img-bg {
      max-height: 60vh;
    }
    .style-btn {
      color: #2595ff !important;
      border: 2px solid #2595ff !important;
      border-radius: 30px;
    }
  }
</style>