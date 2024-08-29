<script>
  import { mixinValidator } from '@/mixin/mixinValidator.js'
  export default {
    name: 'ValidatedForm',
    mixins: [mixinValidator],
    data() {
      return {
        email: '',
        emailSecond: '',
        emailError: '',
        emailErrorSecond: ''
      };
    },
    watch: {
      email(value) {
        this.emailError = this.validateEmail(value) ? '' : 'Invalid email';
      },
      emailSecond(value) {
        this.emailErrorSecond = this.validateEmailInMixin(value) ? '' : 'Invalid email';
      }
    },
    methods: {
      validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      },
      submitForm() {
        if (!this.emailError) {
          alert('Form submitted!');
        }
      },
       submitFormSecond() {
          if (!this.emailError) {
            alert('Form submitted!');
          }
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
            <v-card-title>Validated Form</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field
                    v-model="email"
                    label="Email"
                    :error-messages="emailError"
                    type="email"
                    required
                ></v-text-field>
                <v-btn type="submit" color="primary">Submit</v-btn>
              </v-form>
              <v-form @submit.prevent="submitFormSecond">
                Validation of e-mail gets from mixin.
                <v-text-field
                    v-model="emailSecond"
                    label="Email"
                    :error-messages="emailErrorSecond"
                    type="email"
                    required
                ></v-text-field>
                <v-btn type="submit" color="primary">Submit</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>

</style>