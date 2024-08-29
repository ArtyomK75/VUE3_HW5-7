<script>
  import Toggle from '@/components/Toggle.vue';
  export default {
    components: {
      Toggle
    },
    data() {
      return {
        stateValue: false
      };
    },
    methods: {
      changeState(value) {
        this.stateValue = value;
      }
    }
  };
</script>

<template>
  <div class="page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <Toggle v-model="stateValue" :value="stateValue" @change_state="changeState" />
          <p>Current state of toggle: {{ stateValue }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>

</style>