"use strict"

const express = require("express")
const cors = require("cors")
const ConvidadoRoute = require("./routes/ConvidadoRoute")

class Server {
  constructor() {
    //Instância do Express
    this.express
    this.porta = 3000
  }

  init() {
    //Instanciando o Express para tratar as rotas HTTP
    this.express = new express()

    //Peço para o Express utilizar o conversor de JSON para tratar a comunicação
    this.express.use(express.json())
    this.express.use(cors())

    //Definindo a minha rota raíz
    this.express.get("/", (req, res) => {
      res.send("Seja bem-vindo(a) a API HT!")
    })

    new ConvidadoRoute(this.express)

    //Começando a escutar a porta 3000
    this.express.listen(this.porta, () => {
      console.log(`API rodando em http://localhost:${this.porta}`)
    })
  }
}

new Server().init()
