import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
background-color: red
`



export default class CompFooter extends Component {
  render() {
    return (
      <StyledFooter>
        Footer
      </StyledFooter>
    )
  }
}