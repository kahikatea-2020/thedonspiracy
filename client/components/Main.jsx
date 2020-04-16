import React, { Component } from 'react'
import { getMadlibs } from '../api'

class Main extends Component {
  state = {
    madlibs: ''
  }

  componentDidMount() {
    getMadlibs().then((madlibs) => {
      this.setState({ madlibs })
    })
  }

  render() {
    return <div></div>
  }
}

export default Main
