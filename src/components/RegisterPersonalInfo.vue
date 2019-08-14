<template>
    <div>
        <v-card flat>
            <v-card-title>Account Information</v-card-title>
            <v-row justify="center">
                <v-col md="8" class="pa-0 pt-3">
                  <v-form>
                      <p class="grey--text--darken-4 font-weight-bold mb-3">Fullname</p>
                      <v-text-field
                        rounded
                        solo
                        flat
                        background-color="grey lighten-3"
                        type="text"></v-text-field>

                      <p class="grey--text--darken-4 font-weight-bold mb-3">Email Address</p>
                      <v-text-field
                        rounded
                        solo
                        flat
                        background-color="grey lighten-3"
                        type="email"></v-text-field>

                      <p class="grey--text--darken-4 font-weight-bold mb-3">Password</p>
                      <v-text-field
                        rounded
                        solo
                        flat
                        background-color="grey lighten-3"></v-text-field>

                      <p class="grey--text--darken-4 font-weight-bold mb-3">Password Confirmation</p>
                      <v-text-field
                        rounded
                        solo
                        flat
                        background-color="grey lighten-3"></v-text-field>
                  </v-form>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script lang="ts">
export default {
  name: 'RegisterPersonalInfo',
};
</script>

<style>
</style>
