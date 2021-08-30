const Convidado = require("./../models/Convidado")
const ConvidadoController = require("./../controllers/ConvidadoController")

class ConvidadoRoute {
  constructor(express) {
    //Rotas para /convidado
    express
      .route("/convidado")
      .get(ConvidadoController.buscarTodos)
      .post(ConvidadoController.inserir)
      .put(ConvidadoController.editar)

    //Rotas para /convidado/id
    express
      .route("/convidado/:id")
      .get(ConvidadoController.buscarPorId)
      .delete(ConvidadoController.deletar)
  }
}

module.exports = ConvidadoRoute
