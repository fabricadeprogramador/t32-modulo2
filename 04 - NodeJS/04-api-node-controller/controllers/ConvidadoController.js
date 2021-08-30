const Convidado = require("./../models/Convidado")

let geradorID = 5
convidados = [
  new Convidado(0, "Jão da Silva", 67, "Masculino"),
  new Convidado(1, "Maria da Silva", 15, "Feminino"),
  new Convidado(2, "Carlos de Andrade", 70, "Masculino"),
  new Convidado(3, "Fernanda Bastos", 23, "Feminino"),
  new Convidado(4, "Felipe de Souza", 17, "Masculino")
]

class ConvidadoController {
  static buscarTodos(req, res) {
    res.json(convidados)
  }

  static buscarPorId(req, res) {
    let id = req.params.id
    let convidadoEncontrado = convidados.filter((convidado) => {
      return convidado.id == id
    })

    if (convidadoEncontrado.length > 0) res.json(convidadoEncontrado[0])
    else
      res.status(400).json({
        error: "Erro ao buscar convidado, ID inválido!"
      })
  }

  static inserir(req, res) {
    let convidadoReq = req.body
    let novoConvidado = new Convidado(
      geradorID,
      convidadoReq.nome,
      convidadoReq.idade,
      convidadoReq.sexo
    )

    convidados.push(novoConvidado)
    geradorID++

    res.json(novoConvidado)
  }

  static editar(req, res) {
    let convidadoEdicao = req.body

    if (convidadoEdicao.id) {
      let index = convidados.findIndex((convidado) => {
        return convidado.id == convidadoEdicao.id
      })

      if (index >= 0) {
        let convidadoRetorno = Object.assign({}, convidados[index])
        convidados[index] = convidadoEdicao
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
  }

  static deletar(req, res) {
    let idDeletar = req.params.id
    let convidadoDeletado = {}

    for (let i = 0; i < convidados.length; i++) {
      if (convidados[i].id == idDeletar) {
        convidadoDeletado = convidados[i]
        convidados.splice(i, 1)
        break
      }
    }

    res.json(convidadoDeletado)
  }
}

module.exports = ConvidadoController
