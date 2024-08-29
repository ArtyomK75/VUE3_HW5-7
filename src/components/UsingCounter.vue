<script>
  import Counter from '@/components/Counter.vue';
  export default {
    components: {
      Counter
    },
    data() {
      return {
        counterValue: 7
      };
    },
    methods: {
      updateCurrentValue(value) {
        this.counterValue = value;
      }
    }
  };
</script>

<template>
  <div class="page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <Counter v-model="counterValue" :value="counterValue" @currentValueChanged="updateCurrentValue" />
          <p>Current Counter Value: {{ counterValue }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>

</style>