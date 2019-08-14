<template>
    <div class="text-center pt-5" id="LoginPage">
      <v-avatar width="128" height="128" class="mt-5">
        <img class="mt-5  rounded" src="../assets/Logo.png" />
      </v-avatar>

      <v-content class="mt-5 pt-5">
          <v-row justify="center">
              <v-col md="4">
                  <LoginForm/>
              </v-col>
          </v-row>
      </v-content>

    </div>
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
  #LoginPage {
    background-image: url('../assets/Background.png');
    height: 100vh;
  }
</style>
