import React, { Component } from 'react'

import CompNav from './CompNav'
import CompSection from './CompSection'

import styled from 'styled-components'

const StyledSite = styled.div`
display: flex;
background-color: yellow;
justify-content: space-between;
`

export default class CompSite extends Component {
  render() {
    return (
      <StyledSite>
        <CompNav />
         <div> SITE </div>
        <CompSection />
      </StyledSite>
    )
  }
}