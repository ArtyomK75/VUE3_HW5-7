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
      <scoped-slot>
        <template v-slot:default="slotProps">
          <v-list v-for="item in slotProps.items" key="item">{{ item }}</v-list>
        </template>
      </scoped-slot>
    </v-row>
  </v-container>
  </div>
</template>

<script>
  import ScopedSlot from "@/components/ScopedSlots.vue";

  export default {
    name: 'HomePageWithScopedSlots',
    components: {ScopedSlot},
};
</script>

<style>

</style>