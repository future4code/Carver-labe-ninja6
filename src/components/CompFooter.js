import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: red;
/* padding: 10px */
width: 100%;
/* height: 50px; */
height: 6vh
/* position: absolute;
bottom: 0;
left: 0; */
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