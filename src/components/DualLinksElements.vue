<script>
  export default {
    name: 'DualLinksElements',
    data() {
      return {
        formData: {
          name: 'Bob',
          age: 22,
          agree: false,
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Form submitted with:
            Name: ${this.formData.name}
            Age: ${this.formData.age}
            Agreed: ${this.formData.agree}`);
      },
    },
  };
</script>

<template>
  <div class="page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-card-title>Dual links elements</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                    label="Name"
                    v-model="formData.name"
                ></v-text-field>
                <v-text-field
                    label="Age"
                    v-model="formData.age"
                    type="number"
                ></v-text-field>
                <v-checkbox
                    label="I agree to use my personal data"
                    v-model="formData.agree"
                ></v-checkbox>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="submitForm">Submit</v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="pa-5 mt-4">
            <v-card-title>Form Data</v-card-title>
            <v-card-text>
              <p>Name: {{ formData.name }}</p>
              <p>Age: {{ formData.age }}</p>
              <p>Agree: {{ formData.agree }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>

</style>