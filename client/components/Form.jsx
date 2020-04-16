import React from 'react'

import {getImage} from '../api'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      adj1: '',
      adj2: '',
      adj3: '',
      adj4: '',
      pln1: '',
      pln2: '',
      pln3: '',
      place1: '',
      place2: '',
      name1: '',
      name2: '',
      noun1: '',
      noun2: '',
      noun3: '',
      noun4: '',
      noun5: '',
      verbpresent: '',
      verbpast: '',
      verbfuture: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.createArticle = this.createArticle.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createArticle (e) {
    getImage(this.state.pln2)
      .then(imgSrc => this.props.generateImage(imgSrc, this.state))
  }

  render () {
    return (
      <div className='create-article'>
        <form>
          <p><input placeholder='Adjective' name='adj1'
            onChange={this.handleChange}
            value={this.state.adj1}
          /></p>
          <p><input placeholder='Plural Noun' name='pln1'
            onChange={this.handleChange}
            value={this.state.pln1}
          /></p>
          <p><input placeholder='Adjective' name='adj2'
            onChange={this.handleChange}
            value={this.state.adj2}
          /></p>
          <p><input placeholder='Plural Noun' name='pln2'
            onChange={this.handleChange}
            value={this.state.pln2}
          /></p>
          <p><input placeholder='Adjective' name='adj3'
            onChange={this.handleChange}
            value={this.state.adj3}
          /></p>
          <p><input placeholder='Place Name' name='place1'
            onChange={this.handleChange}
            value={this.state.place1}
          /></p>
          <p><input placeholder='Name' name='name1'
            onChange={this.handleChange}
            value={this.state.name1}
          /></p>
          <p><input placeholder='Noun' name='noun1'
            onChange={this.handleChange}
            value={this.state.noun1}
          /></p>
          <p><input placeholder='Noun' name='noun2'
            onChange={this.handleChange}
            value={this.state.noun2}
          /></p>
          <p><input placeholder='Adjective' name='adj4'
            onChange={this.handleChange}
            value={this.state.adj4}
          /></p>
          <p><input placeholder='Verb' name='verbpresent'
            onChange={this.handleChange}
            value={this.state.verbpresent}
          /></p>
          <p><input placeholder='Name' name='name2'
            onChange={this.handleChange}
            value={this.state.name2}
          /></p>
          <p><input placeholder='Noun' name='noun3'
            onChange={this.handleChange}
            value={this.state.noun3}
          /></p>
          <p><input placeholder='Past Tense Verb' name='verbpast'
            onChange={this.handleChange}
            value={this.state.verbpast}
          /></p>
          <p><input placeholder='Place Name' name='place2'
            onChange={this.handleChange}
            value={this.state.place2}
          /></p>
          <p><input placeholder='Noun' name='noun4'
            onChange={this.handleChange}
            value={this.state.noun4}
          /></p>
          <p><input placeholder='Verb ending with -ing' name='verbfuture'
            onChange={this.handleChange}
            value={this.state.verbfuture}
          /></p>
          <p><input placeholder='Noun' name='noun5'
            onChange={this.handleChange}
            value={this.state.noun5}
          /></p>
          <p><input placeholder='Plural Noun' name='pln3'
            onChange={this.handleChange}
            value={this.state.pln3}
          /></p>
          <button type='button' onClick={this.createArticle}>Write your article!</button>
        </form>
      </div>
    )
  }
}

export default Form