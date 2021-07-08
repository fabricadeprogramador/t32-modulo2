var app = new Vue({})

// class EstacionamentoController {
//   constructor() {
//     this.geradorId = 1
//     this.carros = []
//     this.editId = -1
//   }

//   salvar() {
//     let carroNovo = this.lerDados()

//     if (this.validar(carroNovo)) {
//       this.editId != -1 ? this.editar(carroNovo) : this.adicionar(carroNovo)
//     }

//     this.cancelar()
//     this.gerarTabela()
//   }

//   editar(carro) {
//     let indice = this.encontrarIndiceObjeto(this.editId)

//     this.carros[indice].nome = carro.nome
//     this.carros[indice].marca = carro.marca
//     this.carros[indice].ano = carro.ano

//     // carro.id = this.editId
//     // this.carros.splice(indice, 1, carro)
//   }

//   adicionar(carroNovo) {
//     carroNovo.id = this.geradorId
//     carroNovo.ano = parseInt(carroNovo.ano)

//     this.carros.push(carroNovo)
//     this.geradorId++
//   }

//   encontrarIndiceObjeto(id) {
//     let i = 0
//     let indice = -1

//     while (i < this.carros.length && indice == -1) {
//       if (this.carros[i].id == id) {
//         indice = i
//       }
//       i++
//     }

//     return indice
//   }

//   excluir(id) {
//     if (confirm("Deeja realmente deletar o ID " + id)) {
//       let indice = this.encontrarIndiceObjeto(id)
//       this.carros.splice(indice, 1)

//       this.gerarTabela()
//     }
//   }

//   lerDados() {
//     let carro = {}

//     carro.nome = document.getElementById("nomeVeiculo").value
//     carro.marca = document.getElementById("marcaVeiculo").value
//     carro.ano = document.getElementById("anoVeiculo").value

//     return carro
//   }

//   validar(carroNovo) {
//     if (carroNovo.nome != "" && carroNovo.marca != "" && carroNovo.ano != "") {
//       return true
//     }

//     alert("Preencha todos os campos!")
//     return false
//   }

//   cancelar() {
//     this.editId = -1
//     document.getElementById("nomeVeiculo").value = ""
//     document.getElementById("marcaVeiculo").value = ""
//     document.getElementById("anoVeiculo").value = ""
//   }

//   gerarTabela() {
//     document.getElementById("tbody").innerHTML = ""
//     for (let i = 0; i < this.carros.length; i++) {
//       this.inserirLinha(this.carros[i])
//     }
//   }

//   inserirLinha(carro) {
//     let tabela = document.getElementById("tbody")

//     let linha = tabela.insertRow()
//     // linha.insertCell().innerText = carro.nome

//     let colunaNome = linha.insertCell()
//     let colunaMarca = linha.insertCell()
//     let colunaAno = linha.insertCell()
//     let colunaEditar = linha.insertCell()
//     let colunaExcluir = linha.insertCell()

//     colunaNome.innerText = carro.nome
//     colunaMarca.innerText = carro.marca
//     colunaAno.innerText = carro.ano

//     // let carroParametro = JSON.stringify(carro)

//     colunaEditar.innerHTML = `<img src='img/edit.svg' onclick='estacionamentoController.preparaEdicao(${JSON.stringify(
//       carro
//     )})'/>`
//     colunaExcluir.innerHTML = `<img src="img/delete.svg" onclick="estacionamentoController.excluir(${carro.id})"/>`

//     //O CÓDICO COMENTADO É EQUIVALENTE AS DUAS LINHAS ANTERIORES

//     // let imgEditar = document.createElement("img")
//     // let imgExcluir = document.createElement("img")

//     // imgEditar.src = "img/edit.svg"
//     // imgExcluir.src = "img/delete.svg"

//     // imgEditar.setAttribute("onclick", `estacionamentoController.editar(${carro.id})`)
//     // imgExcluir.setAttribute("onclick", `estacionamentoController.excluir(${carro.id})`)

//     // colunaEditar.appendChild(imgEditar)
//     // colunaExcluir.appendChild(imgExcluir)
//   }

//   preparaEdicao(carro) {
//     this.editId = carro.id

//     document.getElementById("nomeVeiculo").value = carro.nome
//     document.getElementById("marcaVeiculo").value = carro.marca
//     document.getElementById("anoVeiculo").value = carro.ano
//   }

//   calcularResultado() {
//     let soma = 0
//     let maisNovo = this.carros[0]
//     let maisVelho = this.carros[0]

//     for (let i = 0; i < this.carros.length; i++) {
//       soma += this.carros[i].ano

//       if (this.carros[i].ano < maisVelho.ano) maisVelho = this.carros[i]
//       if (this.carros[i].ano > maisNovo.ano) maisNovo = this.carros[i]
//     }

//     document.getElementById("media").innerText = soma / this.carros.length
//     document.getElementById("maisVelho").innerText = this.gerarString(maisVelho)
//     document.getElementById("maisNovo").innerText = this.gerarString(maisNovo)
//   }

//   gerarString(carro) {
//     return `Nome: ${carro.nome}\nMarca: ${carro.marca}\nAno: ${carro.ano}`
//   }
// }

// let estacionamentoController = new EstacionamentoController()
