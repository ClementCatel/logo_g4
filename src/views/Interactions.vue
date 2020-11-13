<template>
  <div class="py-80">
    <mdb-row>
      <mdb-col class="text-center">
        <h3>Bienvenue à G4 Paris 🎓</h3>
        <p class="mb-5">Amusez-vous à parcourir la salle pour trouver les différentes interactions.</p>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col>
        <RoomUnity />
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import RoomUnity from '@/components/RoomUnity.vue'

export default {
  name: 'Home',
  components: {
    RoomUnity
  }
}
</script>

<style scoped lang="scss">
p {
  font-size: 1.75rem;
}
</style>