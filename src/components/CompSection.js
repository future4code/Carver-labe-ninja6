import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
display: flex;
flex: column;
background-color: orange
`


export default class CompNav extends Component {
  render() {
    return (
      <StyledSection>
<div>
    <div>
        Card do carrinho
    </div>

    <button type="submit">Contratar</button>
</div>
      </StyledSection>
    )
  }
}