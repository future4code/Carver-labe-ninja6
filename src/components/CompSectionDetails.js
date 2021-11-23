import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSectionDetails = styled.div`
display: flex;
flex: column;
background-color: orange;
padding: 10px;
`


export default class CompSectionDetails extends Component {
  render() {
    return (
      <StyledSectionDetails>
        section
      </StyledSectionDetails>
    )
  }
}