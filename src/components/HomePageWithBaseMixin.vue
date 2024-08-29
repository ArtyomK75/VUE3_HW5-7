<template>
  <div class="page">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-5">
          <v-card-title>Home Page</v-card-title>
          <v-card-text>
            Welcome to the home page. This page is accessible to everyone.
            <br>
            Data from mixin:<br>
            {{ mocTestMixinData}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
  import {mixinTask8} from "@/mixin/mixinTask8.js";

  export default {
    name: 'HomePageWithBaseMixin',
    mixins: [mixinTask8],
};
</script>

<style>

</style>