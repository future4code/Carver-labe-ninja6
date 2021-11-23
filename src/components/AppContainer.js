import React, { Component } from 'react'
import styled from 'styled-components'



import CompHeader from "./CompHeader"
import CompHome from "./CompHome"
import CompFooter from "./CompFooter"
import CompForm from './CompForm'
import CompSection from './CompSection'
import CompSectionDetails from './CompSectionDetails'
import CompCart from './CompCart'

export class AppContainer extends Component {
  state = {
    servicos: [
      {
        "title":"Cortar a grama",
        "description":"Manutenção em áreas verdes de até 1000 metros quadrados.",
        "price": 40,
        "paymentMethods": "Pix",
        "dueDate":"2021-12-30"
      }, 
      {
        "title":"Cortar a arvore",
        "description":"Manutenção em áreas verdes de até 1000 metros quadrados.",
        "price": 40,
        "paymentMethods": "Pix",
        "dueDate":"2021-12-30"
      }, 
    ],
    carrinho: [],
    renderizar: 1,
// -- 1: Home
// -- 2: Formulário
// -- 3: Setor de Serviços
// -- 4: Detalhes do Serviço
// -- 5: Carrinho

pesquisa: "",
precoMax: "",
precoMin: "",

formNome: "",
formDescricao: "",
formPreco: "",
formMetodo: "",
formData: "",

carrinhoTotal: "",
  }


  
  goToHome = () => {
    this.setState({renderizar: 1})
  }

  goToForm = () => {
    this.setState({renderizar: 2})
  }

  goToSection = () => {
    this.setState({renderizar: 3})
  }

  goToSectionDetails = () => {
    this.setState({renderizar: 4})
  }

  goToCart = () => {
    this.setState({renderizar: 5})
  }


  onChangeFormNome = (event) => {
      this.setState({formNome: event.target.value})
      console.log('nome', this.state.formNome)
  }

  onChangeFormDescricao = (event) => {
    this.setState({formDescricao: event.target.value})
    console.log('Descricao', this.state.formDescricao)

  }

  onChangeFormPreco = (event) => {
    this.setState({formPreco: event.target.value})
    console.log('Preco', this.state.formPreco)
  }

  onChangeFormMetodo = (event) => {
    this.setState({formMetodo: event.target.value})
    console.log('Metodo', this.state.formMetodo)
  }

  onChangeFormData = (event) => {
    this.setState({formData: event.target.value})
    console.log('Data', this.state.formData)
  }



  escolherTela = () => {
     switch(this.state.renderizar) {
      case 1: return <CompHome 
        goToForm={this.goToForm}
        goToSection={this.goToSection}
      />
      case 2: return <CompForm 
        formNome={this.state.formNome}
        formDescricao={this.state.formDescricao}
        formPreco={this.state.formPreco}
        formMetodo={this.state.formMetodo}
        formData={this.state.formData}

        onChangeFormNome={this.onChangeFormNome}
        onChangeFormDescricao={this.onChangeFormDescricao}
        onChangeFormPreco={this.onChangeFormPreco}
        onChangeFormMetodo={this.onChangeFormMetodo}
        onChangeFormData={this.onChangeFormData}
      />
      case 3: return <CompSection 
      servicos={this.props.servicos}  
      />
      case 4: return <CompSectionDetails />
      case 5: return <CompCart />
      default: return <h1>ERRO</h1>
     }
  }



  render() {
      
    return (
      <div>
        <CompHeader 
        goToHome={this.goToHome}
        goToCart={this.goToCart}
        />
            {this.escolherTela()}
        <CompFooter />
      </div>
    )
  }
}
