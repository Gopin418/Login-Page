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
        {name: 'Sulawesi Tengah', id: 28},
        {name: 'Sulawesi Selatan', id: 29},
        {name: 'Sulawesi Tenggara', id: 30},
        {name: 'Maluku Utara', id: 31},
        {name: 'Papua Barat', id: 32},
        {name: 'Papua', id: 33},
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
