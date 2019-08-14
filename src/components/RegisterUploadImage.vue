<template>
    <div>
      <v-card class="mx-5 px-5" flat>
          <v-card-title class="mx-5 mb-5">Upload Profile Picture</v-card-title>
      </v-card>
      <v-layout row class="text-center">
          <v-flex xs12>
              <v-avatar height="156" width="156">
                  <img src="../assets/User.png"></img>
              </v-avatar>
          </v-flex>
          <v-flex xs12 class="mt-5 pt-5">
              <v-btn
              color="pink lighten-1"
              class="white--text"
              width="120"
              rounded
              depressed>Upload</v-btn>
          </v-flex>
      </v-layout>
    </div>
</template>

<style scoped>
  .v-avatar {
    padding: 15px important;
    -webkit-box-shadow: 0px 2px 10px 1px rgba(236,64,122,1);
    -moz-box-shadow: 0px 2px 10px 1px rgba(236,64,122,1);
    box-shadow: 0px 2px 10px 1px rgba(236,64,122,1);
  }
  .v-avatar img {
    width: 110px;
    height: 110px;
    margin-bottom: 10px;
  }
</style>
