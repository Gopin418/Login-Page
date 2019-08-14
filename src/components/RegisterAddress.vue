<template>
    <div>
      <v-card class="mx-5 px-5" flat>
          <v-card-title class="mx-5 mb-5">Address</v-card-title>

          <v-row justify="center">
              <v-col md="8" class="pa-0 pt-3">
                  <v-form>
                      <p class="grey--text--darken-4 font-weight-bold mb-3">City</p>
                      <v-col md="8" class="pa-0">
                        <v-select
                          rounded
                          solo
                          flat
                          background-color="grey lighten-3"></v-select>
                      </v-col>

                      <p class="grey--text--darken-3 font-weight-bold mb-3">Zip Code</p>
                      <v-col md="4" class="pa-0">
                        <v-text-field
                          rounded
                          solo
                          flat
                          background-color="grey lighten-3"
                          type="text"
                          width="200"></v-text-field>
                      </v-col>

                      <p class="grey--text--darken-3 font-weight-bold mb-3">Complete Address</p>
                      <v-textarea
                        rounded
                        solo
                        flat
                        background-color="grey lighten-3"
                        auto-grow></v-textarea>
                  </v-form>
              </v-col>
          </v-row>

      </v-card>
    </div>
</template>
