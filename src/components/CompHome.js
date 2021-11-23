import React, { Component } from 'react'

import styled from 'styled-components'

const StyledHome = styled.div`
/* display: flex;
background-color: yellow;
justify-content: space-between;*/
height: 85.7vh; 
`

export default class CompHome extends Component {
  render() {
    return (
      <StyledHome>
          <button type="submit" onClick={this.props.goToForm}>Quero ser um Ninja</button>
          <button type="submit" onClick={this.props.goToSection}>Contratar um Ninja</button>
      </StyledHome>
    )
  }
}