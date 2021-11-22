import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
display: flex;
flex-direction: column;
background-color: green
`


export default class CompNav extends Component {
  render() {
    return (
        <StyledNav>
            <div>
                <input placeholder="Buscar" />
            </div>

            <StyledNav>
                <input placeholder="Título" />
                <input placeholder="Descrição" />
                <input placeholder="Preço" />
                <input placeholder="Formas de Pagamento" />
                <input placeholder="Prazo" />

                <button type="submit">Cadastrar</button>
            </StyledNav>


        </StyledNav>
    )
  }
}