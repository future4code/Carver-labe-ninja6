import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCart = styled.div`
display: flex;
flex: column;
background-color: orange;
padding: 10px;
`


export default class CompCart extends Component {
  render() {
    return (
      <StyledCart>
        cart
      </StyledCart>
    )
  }
}