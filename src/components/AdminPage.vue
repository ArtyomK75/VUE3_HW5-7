<script>
  import useGlobalStore from "@/store/globalStore.js";
  export default {
    name: 'AdminPage',
    data() {
      return {
        store: useGlobalStore(),
      }
    },
    methods: {
      changeTheme() {
        console.log('out');
        this.store.changeThemeState();
        this.$emit('changeThemeState', this.store.themeState);
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
            <v-card-title>Admin Page</v-card-title>
            <v-card-text>
              If you see this page it means you're administrator
              <v-btn color="primary" @click="changeTheme">change theme</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>