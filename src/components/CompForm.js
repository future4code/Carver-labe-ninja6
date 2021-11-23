import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
/* display: flex;
flex-direction: column;
background-color: green;
padding: 10px */
`


export default class CompForm extends Component {
  render() {
    return (
        <StyledForm>
                <input 
                  type="text" 
                  placeholder="Nome" 
                  onChange={this.props.onChangeFormNome}
                  />
                <input 
                  type="text" 
                  placeholder="Descrição" 
                  onChange={this.props.onChangeFormDescricao}
                  />
                <input 
                  type="number" 
                  placeholder="Preço" 
                  onChange={this.props.onChangeFormPreco}
                  />
                <input 
                  type="text" 
                  placeholder="Pagamento"
                  onChange={this.props.onChangeFormMetodo} 
                  />
                <input 
                  type="date" 
                  placeholder="Prazo" 
                  onChange={this.props.onChangeFormData}
                  />

                <button type="submit">Cadastrar</button>
          </StyledForm>
    )
  }
}