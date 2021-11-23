import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  background-color: yellow;
  height: 6vh;
`
export default class CompHeader extends Component {
  render() {
    return (
      <StyledHeader>
          <button type="Submit" onClick={this.props.goToHome}>HOME</button>
          <button type="Submit" onClick={this.props.goToCart}>CARRINHO</button>
      </StyledHeader>
    )
  }
}