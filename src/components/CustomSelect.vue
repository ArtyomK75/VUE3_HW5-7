<script>
export default {
  name: 'SelectComponent',
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
        selectedOption: this.value,
      }
    },
  methods: {
    onSelect: function () {
      this.$emit('change_option', this.selectedOption);
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
            <v-card-title>Select component</v-card-title>
            <v-card-text>
              <v-select
                  v-model="selectedOption"
                  :items="options"
                  :model-value="selectedOption"
                  label='Select an option'
                  @update:modelValue="onSelect"
              ></v-select>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>

</style>