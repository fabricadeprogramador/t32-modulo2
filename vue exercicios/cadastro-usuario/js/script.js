var app = new Vue({
  el: "#app",
  data: {
    usuarios: [],
    usuarioAtual: {},
  },
  methods: {
    adicionar() {
      let usuarioNovo = {};
      usuarioNovo.username = this.usuarioAtual.username;
      usuarioNovo.senha = this.usuarioAtual.senha;
      usuarioNovo.tipo = this.usuarioAtual.tipo;
      this.usuarios.push(usuarioNovo);
    },
  },
});
