<script>
import useGlobalStore from "@/store/globalStore.js";
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      selectedComponent: null,
      theme: 'light',
      store: useGlobalStore()
    }
  },
  methods: {

    updateParentTheme() {
      console.log('in');
      this.theme = this.store.themeState;
    },
    goToUserPage() {
      this.$router.push({
        name: 'User',
        params: {userId: 1},
      });
    },
    goToParentWithChild() {
      this.$router.push({
        name: 'Child',
      });
    },
  },
}
</script>

<template>
  <div :class="theme">
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-cyan">
        Student Kostenko kurs VUE HW 5 - 6 - 7
      </h1>
    </v-card-title>
  </v-card>

  <router-view :theme="theme" @changeThemeState="updateParentTheme"/>
    <v-card >
      <v-row>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'Admin'})">Go to Admin page</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'Auth'})">Authorization</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'Home'})">Home page</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="goToUserPage">User page</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="goToParentWithChild">Parent with child page</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'ValidatedForm'})">Validation form</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'DualLinksElements'})">Dual linked data</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'UsingCounter'})">Counter v-model</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'UsingToggle'})">Toggle v-model</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'SelectOption'})">Select option</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'Products'})">Products</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'BaseSlot'})">Base slot</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'NamedSlot'})">Named slot</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'ScopedSlot'})">Scoped slot</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'BaseMixin'})">Base mixin</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="$router.push({name: 'Directives'})">Directives</v-btn>
        </v-col>
      </v-row>
    </v-card>

  </div>
</template>

<style>
  .light {
    background-color: white;
    color: black;
  }
  .dark {
    background-color: black;
    color: white;
  }
</style>