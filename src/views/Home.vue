<template>
  <div class="container--fluid black--bg">
    <div class="row">
      <div class="col-12 pa-0">
        <div class="text-h5 font-weight-bold text-justify white--bg pa-4" id="description">
          <p class="">
            Connaissez-vous Tyler un étudiant typique de l’institut G4 ?
          </p>
          <p>
            Comment peut-on dire qu’il s’agit d’un étudiant de l’institut G4 ?
          </p>
          <p>
            C’est plutôt simple regardez sa casquette elle porte le logo de l’institut !
          </p>
          <p>
            Et ce n’est pas un étudiant lambda de l’école non plus regardez ses pins, car il est allé aux Etats Unis grâce au E-learning de l’école.
          </p>
          <p>
            Faites comme Tyler rejoignez notre école et vous pourrez poursuivre vos études aux USA tout en pouvant y travailler.
          </p>
        </div>
        <MascotteUnity />
      </div>
    </div>
  </div>
</template>

<script>
import MascotteUnity from '@/components/MascotteUnity.vue'

export default {
  name: 'Home',
  components: {
    MascotteUnity
  }
}
</script>

<style scoped lang="scss">
  div {
    div {
      div {
        #description {
          position: absolute;
          top: 50%;
          -webkit-transform: translate(10%, -50%);
          width: 40vw;
          z-index: 1;
          background-color: rgba(251, 252, 250, 0.5);
          border-radius: 10px;
        }
      }
    }
  }
</style>