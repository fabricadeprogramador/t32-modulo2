const Convidado = require("./../models/Convidado")

class ConvidadoRoute {
  constructor(express) {
    //Gerador de ID para inserção
    this.geradorID = 5

    //Lista de convidados fixa
    this.convidados = [
      new Convidado(0, "Jão da Silva", 67, "Masculino"),
      new Convidado(1, "Maria da Silva", 15, "Feminino"),
      new Convidado(2, "Carlos de Andrade", 70, "Masculino"),
      new Convidado(3, "Fernanda Bastos", 23, "Feminino"),
      new Convidado(4, "Felipe de Souza", 17, "Masculino")
    ]

    //Rotas para /convidado
    express
      .route("/convidado")
      .get((req, res) => {
        res.json(this.convidados)
      })
      .post((req, res) => {
        let convidadoReq = req.body
        let novoConvidado = new Convidado(
          this.geradorID,
          convidadoReq.nome,
          convidadoReq.idade,
          convidadoReq.sexo
        )

        this.convidados.push(novoConvidado)
        this.geradorID++

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
