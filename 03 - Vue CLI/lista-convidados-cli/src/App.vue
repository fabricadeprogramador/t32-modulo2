<template>
  <v-app>
    <!-- TOOLBAR -->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- NAVIGATION DRAWER -->

    <div class="ma-12 pa-12">
      <v-card>
        <v-navigation-drawer permanent app color="blue-grey lighten-5">
          <v-row align-center justify-center>
            <v-col cols="12">
              <v-img
                max-width="80px"
                class="mx-auto my-4"
                src="https://fabricadeprogramador.com.br/fabrica-dev-logo.svg"
              ></v-img>
            </v-col>

            <v-col cols="12" class="px-0">
              <p class="font-weight-bold" style="text-align:center">
                Fábrica de Programador
              </p>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-list nav>
            <v-list-item
              v-for="(rota, index) in rotas"
              :key="index"
              :to="rota.path"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ rota.icone }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ rota.titulo }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>

    <!-- MAIN CONTENT -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",

    data: () => ({
      rotas: [
        {
          icone: "mdi-home",
          titulo: "Home",
          path: "/"
        },
        {
          icone: "mdi-account",
          titulo: "Convidados",
          path: "/convidado"
        },
        {
          icone: "mdi-account-group",
          titulo: "Clientes",
          path: "/cliente"
        }
      ]
    })
  }
</script>
