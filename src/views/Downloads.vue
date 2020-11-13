<template>
  <mdb-container>
    <mdb-row class="justify-content-center my-3">
      <h3 class="text-center">Téléchargement des différents fichiers</h3>
    </mdb-row>

    <mdb-row class="justify-content-center py-5">
      <mdb-col md="10" col="auto">
        <mdb-view class="zoom overlay text-center image" :src="imgBg" alt="zoom">
          <mdb-mask flex-center text="Exemple d'utilisation de Samy" />
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <mdb-row class="justify-content-center">
      <mdb-col col="auto">
        <div class="py-2">
          <mdb-btn outline="amber" class="style-btn py-0 px-2 inline" @click="download('DownloadModel')">
            <i class="mdi mdi-folder-download"></i>
          </mdb-btn>
          <p class="inline ml-2">Modèle 3D au format .fbx</p>
        </div>
        <div class="py-2">
          <mdb-tooltip class="inline" trigger="hover" :options="{placement: 'right'}">
            <span slot="tip">La version iOS se trouve dans l'archive livrée sur eNovae</span>
            <mdb-btn slot="reference" outline="amber" class="style-btn py-0 px-2" @click="download('DownloadRA')">
              <i class="mdi mdi-folder-download"></i>
            </mdb-btn>
          </mdb-tooltip>
          <p class="inline ml-2">Application pour la réalité augmentée (Android)</p>
        </div>
        <div class="py-2">
            <mdb-btn outline="amber" class="style-btn py-0 px-2 inline" @click="download('DownloadFlyers')">
              <i class="mdi mdi-folder-download"></i>
            </mdb-btn>
          <p class="inline ml-2">Archive de template de flyers préfaits au format .png</p>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
export default {
  name: 'Downloads',

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
        window.location = "/Download/RA/mascotte.apk"
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .image {
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    border-radius: .25rem;
  }

  .style-btn {
    color: #2595ff !important;
    border: 2px solid #2595ff !important;
    border-radius: 30px;
  }

  .inline {
    display: inline;
  }
</style>