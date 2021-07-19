<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="cliente.nome" label="Nome"></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="cliente.sobrenome"
            label="Sobrenome"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="cliente.cpf" label="Cpf"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="cliente.telefone"
            label="Telefone"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            :items="estados"
            v-model="cliente.uf"
            label="UF"
            item-text="nome"
            item-value="sigla"
          ></v-select>
        </v-col>
      </v-row>
      <v-btn depressed color="primary" @click="salvar">
        Salvar
      </v-btn>
      <v-data-table
        :headers="cabecalho"
        :items="clientes"
        :items-per-page="5"
        class="elevation-1 mt-8"
      ></v-data-table>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data() {
      return {
        cliente: {},
        clientes: [],
        cabecalho: [
          { text: "Nome", value: "nome" },
          { text: "Sobrenome", value: "sobrenome" },
          { text: "CPF", value: "cpf" },
          { text: "Telefone", value: "telefone" },
          { text: "UF", value: "uf" }
        ],
        estados: [
          { nome: "Mato Grosso do Sul", sigla: "MS" },
          { nome: "Mato Grosso", sigla: "MT" },
          { nome: "São Paulo", sigla: "SP" }
        ]
      }
    },
    methods: {
      salvar() {
        this.clientes.push(this.cliente)
        this.cliente = {}
      }
    }
  }
</script>

<style></style>
