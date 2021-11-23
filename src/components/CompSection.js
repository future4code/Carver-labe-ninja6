import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
display: flex;
flex: column;
background-color: orange;
padding: 10px;
`


export default class CompSection extends Component {
  render() {
      // console.log(this.props.servicos)
  // const sectionRenderizada = this.props.servicos.map((work) => {
  //   return (
  //   <div key={work.id}>
  //     <p>{work.title}</p>
  //     <p>{work.description}</p>
  //     <p>{work.dueDate}</p>
  //   </div>
  //         )
  //   })

    return (
      <StyledSection>
        {/* {sectionRenderizada} */}
        section
      </StyledSection>
    )
  }
}