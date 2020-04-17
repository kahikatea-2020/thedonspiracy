import React from 'react'

import Header from './Header'
import Footer from './Footer'
import OAB from './OAB'

class OtherArticle extends React.Component {
  constructor () {
    super()
    this.state = {
      form: true,
      article: false,
      imgSrc: '',
      words: {}
    }
    this.generateArticle = this.generateArticle.bind(this)
  }

  generateArticle = (imgSrc, words) => {
    this.setState({
      form: false,
      article: true,
      imgSrc: imgSrc,
      words: words
    })
  }
  render () {
    return (
      <>
        <Header />
        <OAB />
        <Footer />
      </>
    )
  }
}
export default OtherArticle
