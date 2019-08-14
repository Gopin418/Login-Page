<template>
    <div>
        <v-card class="mx-5 px-5" flat>
            <v-card-title class="mx-5 mb-5">Province</v-card-title>
        </v-card>
        <v-row>
            <v-col v-for="province in provinces" md="4" :key="province.id" class="text-center">
                <v-btn
                outlined
                color="purple lighten-1"
                :style="province.id === 2 ? 'background-image: linear-gradient(90deg, rgba(236,64,122,1) 50%, rgba(142,36,170,1) 100%) !important; color: white !important;' : ''"
                width="200"
                min-height="60">
                    {{ province.name }}
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
export default {
  name: 'RegisterProvince',
  data() {
    return {
      provinces: [
        {name: 'Aceh', id: 1},
        {name: 'Sumatra Utara', id: 2},
        {name: 'Sumatra Barat', id: 3},
        {name: 'Riau', id: 4},
        {name: 'Kepulauan Riau', id: 5},
        {name: 'Jambi', id: 6},
        {name: 'Bengkulu', id: 7},
        {name: 'Sumatra Selatan', id: 8},
        {name: 'Bangka Belitung', id: 9},
      ],
    };
  },
};
</script>

<style scoped>
  .v-btn {
    border-radius: 20px;
    border-width: 2px;
  }
  .gradient{
  }
</style>
