<template>
  <v-form>
    <v-container class="container">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="convidado.nome" label="Nome"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="convidado.idade" label="Idade"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="convidado.sexo" label="Sexo"></v-text-field>
        </v-col>
      </v-row>
      <v-btn depressed color="primary" @click="salvar">
        Salvar
      </v-btn>
      <v-data-table
        :headers="cabecalho"
        :items="convidados"
        :items-per-page="5"
        class="elevation-1 mt-8"
      ></v-data-table>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        convidado: {},
        convidados: [],
        cabecalho: [
          {
            text: "Nome",
            value: "nome"
          },
          { text: "Idade", value: "idade" },
          { text: "Sexo", value: "sexo", align: "center" }
        ]
      }
    },
    methods: {
      salvar() {
        this.convidados.push(this.convidado)
        this.convidado = {}
      }
    }
  }
</script>
