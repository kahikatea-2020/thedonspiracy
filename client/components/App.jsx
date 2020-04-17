import React from 'react'
import Header from './Header'
import ArticleBody from './ArticleBody'
import Form from './Form'

class App extends React.Component {
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
        {this.state.form && <Form generateImage={this.generateArticle}/>}
        {this.state.article &&
        <>
          <Header />
          <ArticleBody image={this.state.imgSrc} words={this.state.words} />
        </>
        }
      </>
    )
  }
}

export default App
