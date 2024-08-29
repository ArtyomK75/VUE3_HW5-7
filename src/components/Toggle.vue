<script>
export default {
  name: 'Toggle',
  props: {
    state: Boolean,
    required: true
  },
  computed: {
    isOn: {
      get() {
        return this.localState;
      },
      set(newValue) {
        this.localState = newValue;
        this.$emit('change_state', newValue);
      }
    }
  },
  data() {
    return {
        localState: this.state,
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
            <v-card-title>Toggle Switch</v-card-title>
            <v-card-text>
              <v-switch
                  color="primary"
                  v-model="isOn"
                  label="Toggle On/Off"
              ></v-switch>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>

</style>