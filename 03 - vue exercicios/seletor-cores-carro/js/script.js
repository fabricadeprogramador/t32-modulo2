var app = new Vue({
  el: "#app",
  data: {
    titulo: "Seletor de Cores",
    imagem: "img/preto.jpg",
    qtdBranco: 10,
    qtdPreto: 10,
    qtdVermelho: 10,
    carroSelecionado: {
      id: 0,
      marca: "Volkswagen",
      modelo: "Up",
      ano: 2020,
      cor: "Preto",
      corPath: "img/preto.jpg"
    },
    carros: [
      {
        id: 0,
        marca: "Volkswagen",
        modelo: "Up",
        ano: 2020,
        cor: "Preto",
        corPath: "img/preto.jpg"
      },
      {
        id: 1,
        marca: "Volkswagen",
        modelo: "Up",
        ano: 2020,
        cor: "Branco",
        corPath: "img/branco.jpg"
      },
      {
        id: 2,
        marca: "Volkswagen",
        modelo: "Up",
        ano: 2020,
        cor: "Vermelho",
        corPath: "img/vermelho.jpg"
      }
    ]
  },
  methods: {
    mudarCor(cor) {
      console.log(cor)
      switch (cor) {
        case "Preto":
          this.carroSelecionado = this.carros[0]
          break
        case "Branco":
          this.carroSelecionado = this.carros[1]
          break
        case "Vermelho":
          this.carroSelecionado = this.carros[2]
          break
        default:
          alert("Opção Inválida!")
          break
      }
    },

    comprar() {
      switch (this.carroSelecionado.cor) {
        case "Preto":
          if (this.qtdPreto > 0) {
            alert("Compra efetuada com sucesso!")
            this.qtdPreto--
          } else {
            alert("Cor preta indisponível!")
          }
          break
        case "Branco":
          if (this.qtdBranco > 0) {
            alert("Compra efetuada com sucesso!")
            this.qtdBranco--
          } else {
            alert("Cor branca indisponível!")
          }
          break
        case "Vermelho":
          if (this.qtdVermelho > 0) {
            alert("Compra efetuada com sucesso!")
            this.qtdVermelho--
          } else {
            alert("Cor vermelha indisponível!")
          }
          break
      }
    }
  }
})
