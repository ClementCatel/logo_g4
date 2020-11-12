<template>
  <!-- <div class="container--fluid black--bg"> -->
    <div class="container">
        <MascotteUnity />
        <div class="description">
          <p class="">
            Salut ! Moi c'est Tyler, La mascotte de G4.
          </p>
          <p>
            Comment peut-on dire que je suis un étudiant de l’institut G4 ?
          </p>
          <p>
            C’est plutôt simple regardez ma casquette elle porte le magnifique logo de l’institut !
          </p>
          <p>
            Et ce n’est pas un étudiant lambda de l’école non plus regardez ses pins, car il est allé aux Etats Unis grâce au E-learning de l’école.
          </p>
          <p>
            Faites comme Tyler rejoignez notre école et vous pourrez poursuivre vos études aux USA tout en pouvant y travailler.
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
  }
}
</script>

<style scoped lang="scss">

  .description {
    padding: 24px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(20%, -50%);
    width: 40vw;
    // z-index: 1;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    font-size: 22px;
    font-weight: 300;
    box-shadow: 0 5px 25px 0 rgba(0,0,0,.2);
  }
  p {
    padding-bottom: 16px;
  }
</style>