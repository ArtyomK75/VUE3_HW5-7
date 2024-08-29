<template>
  <div class="page">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-5">
          <v-card-title>Home Page</v-card-title>
          <v-card-text>
            Welcome to the home page. This page is accessible to everyone.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <BaseSlot/>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
  import BaseSlot from "@/components/BaseSlot.vue";

  export default {
    name: 'HomePage',
    components: {BaseSlot},
};
</script>

<style>

</style>