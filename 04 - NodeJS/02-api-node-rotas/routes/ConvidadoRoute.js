class ConvidadoRoute {
  constructor(express) {
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

    //Rotas para /convidado
    express
      .route("/convidado")
      .get((req, res) => {
        res.json(this.convidados)
      })
      .post((req, res) => {
        let novoConvidado = req.body
        console.log(
          `Inserindo Novo Convidado: ${JSON.stringify(novoConvidado)}`
        )

        novoConvidado.id = this.geradorID
        this.geradorID++
        this.convidados.push(novoConvidado)

        res.json(novoConvidado)
      })
      .put((req, res) => {
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

    //Rotas para /convidado/id
    express
      .route("/convidado/:id")
      .get((req, res) => {
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
      .delete((req, res) => {
        let idDeletar = req.params.id
        let convidadoDeletado = {}

        for (let i = 0; i < this.convidados.length; i++) {
          if (this.convidados[i].id == idDeletar) {
            convidadoDeletado = this.convidados[i]
            this.convidados.splice(i, 1)
            break
          }
        }

        res.json(convidadoDeletado)
      })
  }
}

module.exports = ConvidadoRoute
