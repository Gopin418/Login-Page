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
        {name: 'Nusa Tenggara Timur', id: 19},
        {name: 'Kalimantan Utara', id: 20},
        {name: 'Kalimantan Barat', id: 21},
        {name: 'Kalimantan Tengah', id: 22},
        {name: 'Kalimantan Selatan', id: 23},
        {name: 'Kalimantan Timur', id: 24},
        {name: 'Gorontalo', id: 25},
        {name: 'Sulawesi Utara', id: 26},
        {name: 'Sulawesi Barat', id: 27},
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
</style>
