import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { getCards } from './Api'
import Dropdown from '../components/Dropdown'
// import Cards from './components/Cards'

const fonts = [
  {
    id: 1,
    value: 'Calibri'
  },
  {
    id: 2,
    value: 'Arial'
  }
]

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      card: null,
      token: localStorage.getItem('login_auth_token'),
      title: null,
      inner_text: '',
      outer_text: '',
      font: null,
      fontSize: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    // const cardUrl = `https://egret-kishawi-carter.herokuapp.com/${this.props.currentCard.id}`
    const cardUrl = 'https://egret-kishawi-carter.herokuapp.com/api/cards/'
    if (this.state.token) {
      console.log(this.state.token)
      // axios.get(cardUrl)
      getCards(this.state.token)
        .then(response =>
          this.setState({
            card: response.data.results
          }))
    }
  }

  componentWillMount () {
    console.log('componentDidUnmount')
  }

  handleChange (event) {
    this.setState({ font: event.target.font })
    this.setState({ fontSize: event.target.fontSize })
    this.setState({ title: event.target.title })
    this.setState({ outerText: event.target.outerText })
    this.setState({ inner_text: event.target.inner_text })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state)
    axios
      .post('https://egret-kishawi-carter.herokuapp.com/${this.props.currentCard.id', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    const { card } = this.state
    return (
      <div>
        <h1>create a new card</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
                pick a font!
            <select font={this.state.font} onChange={this.handleChange}>
              <option font='calibri'>Calibri</option>
              <option font='arial'>Arial</option>
            </select>
          </label>
          <label>
                choose a size!
            <select fontSize={this.state.fontSize} onChange={this.handleChange}>
              <option fontSize='12'>12</option>
              <option fontSize='13'>13</option>
            </select>
          </label>

          <div />

          <div>
            <label>Title: </label>
            <input
              placeholder='title'
              title={this.state.title}
              type='text'
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>outer-text: </label>
            <input
              placeholder='outer_text'
              outer_text={this.state.outer_text}
              type='text'
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>inner-text: </label>
            <input
              placeholder='inner_text'
              value={this.state.inner_text}
              type='text'
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' value='Submit'>submit new card</button>
        </form>

        <ul>
          <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
            <h1 className='center f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3' />

            <div className='center pa3 bt b--black-10' />
            <div />
          </article>
        </ul>

      </div>
    )
  }
}
