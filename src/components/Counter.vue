<script>
  export default {
    name: 'Counter',
    props: {
      value: Number,
      required: true
    },
    methods: {
      increment() {
        this.$emit('currentValueChanged', this.value + 1);
      },
      decrement() {
        this.$emit('currentValueChanged', this.value - 1);
      },
      updateValue(newValue) {
        this.$emit('currentValueChanged', newValue);
      }
    }
  };
</script>

<template>
  <div class="page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-card-title>Counter</v-card-title>
            <v-card-text>
              <v-btn color="primary" @click="decrement">-</v-btn>
              <v-text-field
                  :value="value"
                  @input="updateValue(+$event.target.value)"
                  type="number"
                  style="width: 60px; display: inline-block; text-align: center;"
              ></v-text-field>
              <v-btn color="primary" @click="increment">+</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>

</style>