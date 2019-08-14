<template>
    <div>
        <v-app-bar flat heihgt="100">
          <router-link class="ml-auto" to="/">
            <v-btn fab dark depressed x-large color="transparent">
              <v-icon dark>power_settings_new</v-icon>
            </v-btn>
          </router-link>
        </v-app-bar>
    </div>
</template>

<style scoped>
  .v-app-bar{
    background: rgb(236,64,122);
    background: linear-gradient(90deg, rgba(236,64,122,1) 50%, rgba(142,36,170,1) 100%);
  }
</style>
