<script>
  import CustomSelect from '@/components/CustomSelect.vue';
  export default {
    name: "SelectComponent",
    components: {
      CustomSelect
    },
    data() {
      return {
        options: ['Option 1', 'Option 2', 'Option 3'],
        selectedOption: ''
      };
    },
    methods: {
       updateSelectedOption(value) {
         this.selectedOption = value;
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
              <CustomSelect :options="options" :value="selectedOption" v-model="selectedOption" @change_option="updateSelectedOption"/>
              <p>Current option is: {{ selectedOption }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>

</style>