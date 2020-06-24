<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="5">
          <v-card class="elevation-4">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Email"
                  v-model="form.email"
                  name="email"
                  prepend-icon="mdi-account"
                  type="email"
                ></v-text-field>

                <v-text-field
                  v-model="form.password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "signin",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  components: {
    //
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn"
    }),
    submit() {
      this.signIn(this.form)
        .then(() => {
          this.$router.replace({
            name: "dashboard"
          });
        })
        .catch(() => {
          console.log("failed");
        });
    }
  }
};
</script>