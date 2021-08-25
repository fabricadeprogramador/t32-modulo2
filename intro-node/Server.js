"use strict"

const express = require("express")

class Server {
  constructor() {
    //Instância do Express
    this.app
    this.porta = 3000

    //Gerador de ID para inserção
    this.geradorID = 5

    //Lista de convidados fixa
    this.convidados = [
      {
        id: 0,
        nome: "Jão da Silva",
        idade: 67,
        sexo: "Masculino"
      },
      {
        id: 1,
        nome: "Maria da Silva",
        idade: 15,
        sexo: "Feminino"
      },
      {
        id: 2,
        nome: "Carlos de Andrade",
        idade: 70,
        sexo: "Masculino"
      },
      {
        id: 3,
        nome: "Fernanda Bastos",
        idade: 23,
        sexo: "Feminino"
      },
      {
        id: 4,
        nome: "Felipe de Souza",
        idade: 17,
        sexo: "Masculino"
      }
    ]
  }

  init() {
    //Instanciando o Express para tratar as rotas HTTP
    this.app = new express()

    //Peço para o Express utilizar o conversor de JSON para tratar a comunicação
    this.app.use(express.json())

    //Definindo a minha rota raíz
    this.app.get("/", (req, res) => {
      res.send("Seja bem-vindo(a) a API HT!")
    })

    //Criando rotas para convidado
    this.app.get("/convidado", (req, res) => {
      res.json(this.convidados)
    })

    this.app.get("/convidado/:id", (req, res) => {
      let id = req.params.id
      let convidadoEncontrado = this.convidados.filter((convidado) => {
        return convidado.id == id
      })

      if (convidadoEncontrado.length > 0) res.json(convidadoEncontrado[0])
      else
        res.status(400).json({
          error: "Erro ao buscar convidado, ID inválido!"
        })
    })

    this.app.post("/convidado", (req, res) => {
      let novoConvidado = req.body
      console.log(`Inserindo Novo Convidado: ${JSON.stringify(novoConvidado)}`)

      novoConvidado.id = this.geradorID
      this.geradorID++
      this.convidados.push(novoConvidado)

      res.json(novoConvidado)
    })

    this.app.delete("/convidado/:id", (req, res) => {
      let idDeletar = req.params.id
      let convidadoDeletado = {}

      // convidadoDeletado = this.convidados.filter((convidado) => {
      //   return convidado.id == idDeletar
      // })

      // this.convidados = this.convidados.filter((convidado) => {
      //   return convidado.id != idDeletar
      // })

      for (let i = 0; i < this.convidados.length; i++) {
        if (this.convidados[i].id == idDeletar) {
          convidadoDeletado = this.convidados[i]
          this.convidados.splice(i, 1)
          break
        }
      }

      res.json(convidadoDeletado)
    })

    this.app.put("/convidado", (req, res) => {
      let convidadoEdicao = req.body

      if (convidadoEdicao.id) {
        let index = this.convidados.findIndex((convidado) => {
          return convidado.id == convidadoEdicao.id
        })

        if (index >= 0) {
          let convidadoRetorno = Object.assign({}, this.convidados[index])
          this.convidados[index] = convidadoEdicao
          res.json(convidadoRetorno)
        } else {
          res.status(400).json({
            error: "Erro ao editar convidado, ID inválido!"
          })
        }
      } else {
        res.status(400).json({
          error: "Erro ao editar convidado, dados faltando!"
        })
      }
    })

    //Começando a escutar a porta 3000
    this.app.listen(this.porta, () => {
      console.log(`API rodando em http://localhost:${this.porta}`)
    })
  }
}

new Server().init()
