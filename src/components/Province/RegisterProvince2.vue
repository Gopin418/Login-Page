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
        {name: 'Lampung', id: 10},
        {name: 'Banten', id: 11},
        {name: 'Jawa Barat', id: 12},
        {name: 'DKI Jakarta', id: 13},
        {name: 'Jawa Tengang', id: 14},
        {name: 'DI Yogyakarta', id: 15},
        {name: 'Jawa Timur', id: 16},
        {name: 'Bali', id: 17},
        {name: 'Nusa Tenggara Barat', id: 18},
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
