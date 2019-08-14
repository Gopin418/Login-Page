<template>
    <div id="register">
        <RegisterHeader/>

        <v-row justify="center">
            <v-col md="8">
                <RegisterStep/>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import RegisterHeader from '@/components/RegisterHeader.vue';
import RegisterStep from '@/components/RegisterStep.vue';

export default {
  name: 'RegisterPage',
  components: {
    RegisterHeader,
    RegisterStep,
  },
};
</script>

<style scoped>
  #register {
    background: white;
    height: 100vh;
  }
</style>
