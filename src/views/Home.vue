<template>
  <!-- <div class="container--fluid black--bg"> -->
  <div class="app-container">
    <MascotteUnity />
    <div id="description">
      <p class="title">
        Salut toi ! Je m'appelle Samy et je suis la nouvelle mascotte de l'école !
      </p>
      <p>
        Etudiant à l'institut G4, j'ai choisi cette école car elle possède des valeurs dans lesquelles je me reconnais grandement :
        assiduité, rigueur, entraide et bienveillance !
        Grâce aux professeurs encourageants, à l'équipe pédagogique disponible et aux nombreux projets de groupe,
        j'ai tout pour m'épanouir dans cette école qui m'aide quotidiennement à préparer mon projet professionnel.
        En outre, cet institut propose des formations à l'étranger comme aux USA par exemple ! Génial non !?
        Et en plus de ça, voulant faire de la gestion d'équipe mais continuer aussi à développer,
        G4 est parfaite pour cela car elle offre un diplôme de niveau 7 (Bac +5) à double compétence :
        informatique et management ! Alors, n'hésite plus !
      </p>
      <p class="aventure">
        Rejoins vite l'aventure G4 !
      </p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import MascotteUnity from '@/components/MascotteUnity.vue'

export default {
  name: 'Home',
  components: {
    MascotteUnity
  },

  mounted() {
    setTimeout(function(){
      document.getElementById('description').className = 'display';
    }, 5000);
  },
}
</script>

<style scoped lang="scss">

#description {
  text-align: justify;
  line-height: 30px;
  opacity: 0;
  padding: 28px 24px;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(10%, -50%);
  width: 50vw;
  background-color: #292b32;
  color: #959cb1;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 300;
  box-shadow: 0 5px 25px 0 rgba(0,0,0,.2);
  transition:opacity 500ms;
  .title {
    line-height: 40px;
    padding-bottom: 18px;
    color: white;
    font-size: 32px;
    font-weight: 400;
  }
  .aventure {
    text-align: center;
    color: white;
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 0;
  }
}

.display {
  opacity: 1 !important;
}
</style>