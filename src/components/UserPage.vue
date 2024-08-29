<template>
  <div>
    <div class="page">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="pa-5">
              <v-card-title>User Page</v-card-title>
              <v-card-text>
                User ID: {{ userId }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
  
 <script>
  export default {
    name: "UserPage",
    props: ['userId'],
  };
 </script>