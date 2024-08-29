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
        <NamedSlots>
          <template v-slot:header>
            <div>
              <h3>Header content</h3>
            </div>
          </template>
          <template v-slot:content>

          </template>
          <template v-slot:futer>
            <div>
              <h3>Futer content</h3>
            </div>
          </template>
        </NamedSlots>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
  import NamedSlots from "@/components/NamedSlots.vue";

  export default {
    name: 'HomePageWithNamedSlots',
    components: {NamedSlots},
};
</script>

<style>

</style>