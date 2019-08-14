<template>
      <div>
          <v-container>
            <v-layout col>
                <v-flex xs1 class="pl-2">
                  <v-btn
                    fab
                    depressed
                    :class="Step >= 0 ? 'step' : 'grey lighten-1'">
                      <v-icon v-if="Step === 0" color="white">border_color</v-icon>
                      <v-icon v-else-if="Step > 0" color="white">check</v-icon>
                  </v-btn>
                </v-flex>
                    <v-progress-linear
                      :value="Step >= 1 ? '100' : '0'"
                      class="my-auto"
                      height="10"
                      :color="Step >= 1 ? 'pink lighten-1' : 'grey darken-4'"></v-progress-linear>
                <v-flex>
                  <v-btn
                    fab
                    depressed
                    :class="Step >= 1 ? 'step' : 'grey lighten-1'">
                      <v-icon v-if="Step === 1" color="white">location_on</v-icon>
                      <v-icon v-else-if="Step > 1" color="white">check</v-icon>
                  </v-btn>
                </v-flex>
                <v-progress-linear
                  :value="Step >= 2 ? '100' : '0'"
                  class="my-auto"
                  height="10"
                  :color="Step >= 2 ? 'pink lighten-1' : 'grey darken-4'"></v-progress-linear>
                <v-flex>
                    <v-btn
                      fab
                      depressed
                      :class="Step >= 2 ? 'step' : 'grey lighten-1'">
                        <v-icon v-if="Step === 2" color="white">swap_horiz</v-icon>
                        <v-icon v-else-if="Step > 2" color="white">check</v-icon>
                    </v-btn>
                </v-flex>
                <v-progress-linear
                  :value="Step >= 3 ? '100' : '0'"
                  class="my-auto"
                  height="10"
                  :color="Step >= 3 ? 'pink lighten-1' : 'grey darken-4'"></v-progress-linear>
                <v-flex>
                    <v-btn
                      fab
                      depressed
                      :class="Step >= 3 ? 'step' : 'grey lighten-1'">
                        <v-icon v-if="Step === 3" color="white">person</v-icon>
                        <v-icon v-else-if="Step > 2" color="white">check</v-icon>
                    </v-btn>
                </v-flex>
                <v-progress-linear
                  :value="Step >= 4 ? '100' : '0'"
                  class="my-auto"
                  height="10"
                  :color="Step >= 4 ? 'pink lighten-1' : 'grey darken-4'"></v-progress-linear>
                <v-flex>
                    <v-btn
                      fab
                      depressed
                      :class="Step >= 4 ? 'step' : 'grey lighten-1'">
                        <v-icon v-if="Step === 4" color="white">check</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>

                <v-row justify="center">
                    <v-col md="11" class="pa-0">
                      <RegisterPersonalInfo v-show="Step === 0"/>
                      <RegisterProvince v-show="Step === 1"/>
                      <RegisterAddress v-show="Step === 2"/>
                      <RegisterUploadImage v-show="Step === 3"/>
                      <RegisterKey v-show="Step === 4"/>
                    </v-col>
                </v-row>

                <v-layout col>
                    <v-flex>
                        <v-btn
                          color="pink lighten-1"
                          outlined
                          rounded
                          :disabled="Step === 0 ? true : false"
                          @click="Step--">
                            <v-icon class="mr-1">arrow_back</v-icon>
                            BACK
                        </v-btn>
                    </v-flex>
                    <v-flex class="text-right">
                        <v-btn
                          color="pink lighten-1"
                          rounded
                          class="white--text"
                          depressed
                          :disabled="Step === 4 ? true : false"
                          @click="Step++">
                            Next
                            <v-icon>arrow_forward</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
          </v-container>
      </div>
</template>

<script lang="ts">
import RegisterPersonalInfo from './RegisterPersonalInfo.vue';
import RegisterProvince from './RegisterProvince.vue';
import RegisterAddress from './RegisterAddress.vue';
import RegisterUploadImage from './RegisterUploadImage.vue';
import RegisterKey from './RegisterKey.vue';

export default {
  name: 'RegisterStep',
  components: {
    RegisterPersonalInfo,
    RegisterProvince,
    RegisterAddress,
    RegisterUploadImage,
    RegisterKey,
  },
  data() {
    return {
      Step: 0,
    };
  },
};
</script>

<style scoped>
  .step {
    background: rgb(236,64,122)!important;
    background: linear-gradient(135deg, rgba(236,64,122,1) 50%, rgba(142,36,170,1) 100%) !important;
  }
</style>
