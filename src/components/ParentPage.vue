<template>
  <div class="page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-card-title>Parent Page</v-card-title>
            <v-card-text>
              This is the parent page.
            </v-card-text>
            <router-view></router-view>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
 <script>
  export default {
    name: "ParentPage",
  };
 </script>