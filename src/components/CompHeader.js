import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
background-color: blue
`
export default class CompHeader extends Component {
  render() {
    return (
      <StyledHeader>
          <button type="submit">Quero ser um Ninja</button>
          <button type="submit">Contratar um Ninja</button>
      </StyledHeader>
    )
  }
}