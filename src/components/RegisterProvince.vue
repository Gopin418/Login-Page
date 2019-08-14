<template>
  <div>
    <v-layout row class="text-center">
      <v-flex xs12>
        <RegisterProvince1 :selected="selected" v-show="Province === 0"/>
        <RegisterProvince2 :selected="selected" v-show="Province === 1"/>
        <RegisterProvince3 :selected="selected" v-show="Province === 2"/>
        <RegisterProvince4 :selected="selected" v-show="Province === 3"/>
      </v-flex>
      <v-flex xs12 class="mt-4">
        <v-btn
          fab
          depressed
          x-small
          color="grey"
          :disabled="Province === 0"
          @click="Province--">
          <v-icon color="white">chevron_left</v-icon>
        </v-btn>

        <v-btn
          fab
          depressed
          x-small
          color="grey" class="ml-2"
          :disabled="Province === 3"
          @click="Province++">
          <v-icon color="white">chevron_right</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import RegisterProvince1 from './Province/RegisterProvince1.vue';
import RegisterProvince2 from './Province/RegisterProvince2.vue';
import RegisterProvince3 from './Province/RegisterProvince3.vue';
import RegisterProvince4 from './Province/RegisterProvince4.vue';

export default {
  name: 'RegisterProvince',
  components: {
    RegisterProvince1,
    RegisterProvince2,
    RegisterProvince3,
    RegisterProvince4,
  },
  computed: {
    selected: String,
  },
  data() {
    return {
      Province: 0,
    };
  },
};
</script>
