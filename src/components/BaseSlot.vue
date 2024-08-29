<template>
  <div class="page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-card-title>Base slot</v-card-title>
            <v-card-text>
              <UsingToggle/>
              <UsingCounter/>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
  import UsingToggle from "@/components/UsingToggle.vue";
  import UsingCounter from "@/components/UsingCounter.vue";

  export default {
    name: 'BaseSlot',
    components: {UsingCounter, UsingToggle},
  };
</script>
