<template>
    <div>
      <v-form>
        <v-text-field
          label="Username"
          prepend-inner-icon="person"></v-text-field>

        <v-text-field
          label="Password"
          prepend-inner-icon="lock_open"></v-text-field>

          <v-layout col class="ma-0 pa-0">
              <v-flex>
                  <v-checkbox
                    label="Remember me"
                    color="blue"
                    class="ma-0 pa-0"></v-checkbox>
              </v-flex>
              <v-flex class="text-right">
                  <a href="#">Forgot password?</a>
              </v-flex>
          </v-layout>

          <v-btn
          elevation="0"
          width="250"
          height="60"
          rounded
          class="sign-button">
            Sign In Now
            <v-icon class="pl-4" color="pink lighten-2">arrow_forward</v-icon>
          </v-btn>
          <p class="grey--text">Don't have account? <router-link to="register" class="black--text font-weight-bold">Register</router-link></p>
      </v-form>
    </div>
</template>

<script lang="ts">
export default {
  name: 'LoginForm',
};
</script>

<style>
  a {
    text-decoration: none;
  }
  .sign-button {
    border: 3px solid #CFD8DC !important;
  }
  .v-btn {
    background: #fff !important;
  }
  .v-text-field input {
    padding: 24px 0 24px 8px !important;
  }
  .v-text-field .v-label {
    margin-left: 8px;
    margin-top: 8px;
  }
  .v-text-field .v-icon {
    padding: 24px 0 12px;
  }
</style>
