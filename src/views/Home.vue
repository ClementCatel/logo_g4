<template>
  <mdb-container class="py-80">
      <mdb-row>
        <mdb-col col="sm">
          <h3>
            Salut toi ! Je m'appelle Samy et je suis la nouvelle mascotte de l'école !
          </h3>
          <div id="description">
            <p class="text-justify">
              Etudiant à l'institut G4, j'ai choisi cette école car elle possède des valeurs dans lesquelles je me reconnais grandement :
              assiduité, rigueur, entraide et bienveillance !
              Grâce aux professeurs encourageants, à l'équipe pédagogique disponible et aux nombreux projets de groupe,
              j'ai tout pour m'épanouir dans cette école qui m'aide quotidiennement à préparer mon projet professionnel.
              En outre, cet institut propose des formations à l'étranger comme aux USA par exemple ! Génial non !?
              Et en plus de ça, voulant faire de la gestion d'équipe mais continuer aussi à développer,
              G4 est parfaite pour cela car elle offre un diplôme de niveau 7 (Bac +5) à double compétence :
              informatique et management. Alors, n'hésite plus !
            </p>
            <p><a href="https://www.institut-g4.fr/">Rejoins l'aventure G4 !</a></p>
          </div>
        </mdb-col>
        <mdb-col col="sm">
          <img src="@/assets/img/mascotte/mascotte.png" class="img-fluid" alt="Responsive image">
        </mdb-col>
      </mdb-row>

      <mdb-row class="mb-5">
        <mdb-col col="12 py-5">
          <h2 class="text-center">Say hello to Samy 👋</h2>
          <p class="text-center mb-5">Pour intéragir avec lui dans une des salles de cours de l'institut, <a :href="$router.resolve({name: 'Interactions'}).href">c'est par ici.</a></p>
          <MascotteUnity />
        </mdb-col>
      </mdb-row>

      <div class="py-40">
        <hr>
          <mdb-row class="py-4 text-center">
            <mdb-col><img src="@/assets/img/technos/blender.png" class="img-fluid" alt="Responsive image"></mdb-col>
            <mdb-col><img src="@/assets/img/technos/unity.png" class="img-fluid" alt="Responsive image"></mdb-col>
            <mdb-col><img src="@/assets/img/technos/vsc.png" class="img-fluid" alt="Responsive image"></mdb-col>
            <mdb-col><img src="@/assets/img/technos/github.png" class="img-fluid" alt="Responsive image"></mdb-col>
          </mdb-row>
        <hr>
      </div>
  </mdb-container>
</template>

<script>
import MascotteUnity from '@/components/MascotteUnity.vue'

export default {
  name: 'Home',
  components: {
    MascotteUnity
  },
}
</script>

<style scoped lang="scss">
#description a {
  font-size: 1.75rem;
}
</style>