import React, { Component } from "react";
import Login from "./components/Login";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logado: false,
      mensagem: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.username.value);

    if (!e.target.username.value) {
      alert("Obrigatório preenchimento do usuário");
      this.setState({ logado: false })
    } else if (!e.target.username.value) {
      alert("Obrigatório preenchimento do usuário válido");
      this.setState({ logado: false })
    } else if (!e.target.password.value) {
      this.setState({ logado: false })
      alert("Obrigatório preenchimento de senha");
    } else if (
      e.target.username.value === "eduardo.lino@pucpr.br" &&
      e.target.password.value === "123456"
    ) {
      this.setState({ logado: true })
      this.setState({ mensagem: "Acessado com sucesso!" })
    } else {
      this.setState({ logado: true })
      this.setState({ mensagem: "Usuário ou senha incorretos!" })
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="username" name="username" placeholder="Usuário" />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Senha"/>
          </div>
          <button className="primary">Acessar</button>
          {this.state.logado ? <Login mensagem={this.state.mensagem}/> : <div></div>}
        </form>
      </div>
    );
  }
}

export default App;