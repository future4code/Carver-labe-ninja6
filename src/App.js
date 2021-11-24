import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Cadastro from './Cadastro';
import Cards from './Cards';
import Home from './home';
import Carrinho from './Carrinho';
import Detalhes from './Detalhes';


class App extends React.Component{

  state = {

    telaAtual: "Home"
  }

  escolherTela = () =>{
    switch (this.state.telaAtual){
      
      case "Home":
      return <Home 
      irParaCadastro={this.irParaCadastro}
      irParaCards={this.irParaCards}
      irParaCarrinho={this.irParaCarrinho}
      irParaDetalhes={this.irParaDetalhes}/>

      case "Cadastro":
        return<Cadastro 
      irParaHome={this.irParaHome}
      irParaCards={this.irParaCards}
      irParaCarrinho={this.irParaCarrinho}
      irParaDetalhes={this.irParaDetalhes}/>

      case "Carrinho":
        return<Carrinho 
        irParaCadastro={this.irParaCadastro}
        irParaCards={this.irParaCards}
        irParaHome={this.irParaHome}
        irParaDetalhes={this.irParaDetalhes}/>

      case "Detalhes":
        return<Detalhes 
      irParaCadastro={this.irParaCadastro}
      irParaCards={this.irParaCards}
      irParaCarrinho={this.irParaCarrinho}
      irParaHome={this.irParaHome}/>

      case "Cards":
        return<Cards 
      irParaCadastro={this.irParaCadastro}
      irParaHome={this.irParaHome}
      irParaCarrinho={this.irParaCarrinho}
      irParaDetalhes={this.irParaDetalhes}/>
        
      default:
        return <h1>Erro! :(</h1>
    }
  }
  irParaHome = () =>{
    this.setState({telaAtual: "Home"})
  }
  
  irParaCadastro = () =>{
    this.setState({telaAtual: "Cadastro"})
  }
  irParaCards = () =>{
    this.setState({telaAtual: "Cards"})
  }
  irParaCarrinho = () =>{
    this.setState({telaAtual: "Carrinho"})
  }
  irParaDetalhes = () =>{
    this.setState({telaAtual: "Detalhes"})
  }
  

  render(){
    
    return (
      <div>
       {this.escolherTela()}
      </div>
    )
  }
}

export default App
 
