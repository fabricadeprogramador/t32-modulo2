<template>
  <app>
    <v-row class="image-center" justify="center">
      <v-img
        src="https://fabricadeprogramador.com.br/fabrica-dev-logo.svg"
        max-width="500"
      >
      </v-img>
    </v-row>
    <v-row justify="center">
      <h2 class="text-xl-justify">Bem-Vindo Ao Fábrica De Programador</h2>
    </v-row>
    <div class="row">
      <div class="col-12 text-truncate">
        <h3 align="center">
          Sem aulas monótonas, seja um programador qualificado! Participe do
          treinamento completo 100% AO VIVO e ONLINE
        </h3>
        <h3 align="center">
          A mesma experiencia do presencial físico, você pode compartilhar sua
          tela com o professor
        </h3>
      </div>
    </div>

    <div align="center" class="slogan">
      <text-area id="teste">
        O curso "Fabrica de Programador" é um curso completo para se tornar um
        desenvolvedor Full Stack.
      </text-area>
    </div>
    <!--Alerta-->
    <div class="alert" align="center">
      <v-alert border="left" type="info" width="50%">
        Atenção ao clicar no botão abaixo você sera redirecionado ao nosso site
      </v-alert>
    </div>
    <!--btn-->
    <template>
      <div class="text-center">
        <v-btn rounded color="primary" dark>
          Visitar
        </v-btn>
      </div>
    </template>
  </app>
</template>

<style>
  .image-center {
    margin-top: 1%;
  }

  .row {
    font-family: "Rubik", sans-serif;
  }
  .text-xl-justify {
    margin: 20px;
  }

  .slogan {
    margin: 20px;
  }
  #teste {
    border-bottom: 2px solid black;
  }
  .alert {
    padding: 20px 0px;
    margin: 10px;
  }
  .text-center {
    padding: 8px;
    margin: 2px;
  }
</style>
