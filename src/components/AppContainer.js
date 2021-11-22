import React, { Component } from 'react'




import CompHeader from "./CompHeader"
import CompNav from "./CompNav"
import CompSite from "./CompSite"
import CompSection from "./CompSection"
import CompFooter from "./CompFooter"

export class AppContainer extends Component {
  State = {
    inicio: []
  }

  render() {
    return (
      <div>
        <CompHeader />
            <CompSite />
        <CompFooter />
      </div>
    )
  }
}
