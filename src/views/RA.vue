<template>
  <mdb-container fluid class="black--bg white--text" id="RA-container">
    <mdb-row class="justify-content-center my-3">
      <h3 class="font-weight-bold">Applications pour la réalité augmentée</h3>
    </mdb-row>
    <mdb-row class="justify-content-center">
      <mdb-col col="auto">
        <img :src="imgBg" class="img-fluid" alt="L'image d'une classe de G4 avec la mascotte intégrée dessus" id="img-bg">
      </mdb-col>
      <mdb-col col="auto">
        <div>
          Application Android au format .apk
          <mdb-btn outline="amber" class="style-btn py-0 px-2" @click="download('DownloadAPK')">
            <i class="mdi mdi-folder-download"></i>
          </mdb-btn>
        </div>
        <div>
          Application IOS dans un .zip
          <mdb-btn outline="amber" class="style-btn py-0 px-2" @click="download('DownloadZip')">
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
  name: 'RA',

  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  },

  data() {
    return {
      imgBg: require("../assets/img/mascotte/exemple_realite_virtuelle.jpg")
    }
  },

  methods: {
    download(arg) {
      if (arg === 'DownloadAPK') {
        window.location = "/Download/RA/mascotte.apk"
      } else if (arg === 'DownloadZip') {
        window.location = "/Download/RA/mascotte.zip"
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #RA-container {
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