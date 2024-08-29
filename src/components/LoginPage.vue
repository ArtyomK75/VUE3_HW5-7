<template>
  <div>
    <div class="page">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="pa-5">
              <v-card-title>Login Page</v-card-title>
              {{this.myCurrentUser}}
<!--              <v-btn v-if="isUserLoggedIn" color="primary" @click="loginLogout(true)">Logout</v-btn>-->
<!--              <v-btn v-else color="primary" @click="loginLogout(false)">Login</v-btn>-->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
  
 <script>
  export default {
    name: "AuthPage",
    computed: {
      isUserLoggedIn() {return this.currentUser.isUserLoggedIn}
    },
    methods: {
      loginLogout(isLogin) {
        this.currentUser.isUserLoggedIn = isLogin;
      }
    }
  };
 </script>