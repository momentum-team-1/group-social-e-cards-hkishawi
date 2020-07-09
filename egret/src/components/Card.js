import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { getCards } from './Api'

import { postCards } from '../components/Api'
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
  constructor () {
    super()
    this.state = {
      card: '',
      token: localStorage.getItem('login_auth_token'),
      title: '',
      color: 'null',
      font: 'null',
      inner_text: '',
      outer_text: '',
      isInEditMode: false,
      titleError: '',
      inner_textError: '',
      outer_textError: '',
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    // const cardUrl = `https://egret-kishawi-carter.herokuapp.com/${this.props.currentCard.id}`
    const cardUrl = 'egret-kishawi-carter.herokuapp.com/api/cards/all/'
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

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }

  componentWillMount () {
    console.log('componentDidUnmount')
  }

 handleChange = (e) => {
   this.setState({[e.target.name]: e.target.value})
 }

  //   handleSubmit (event) {
  //     event.preventDefault()
  //     console.log(this.state)
  //     if (this.state.token) {
  //       axios
  //         .post('https://egret-kishawi-carter.herokuapp.com/api/cards/', this.state)
  //         .then(response => {
  //           console.log(response)
  //         })
  //         .catch(error => {
  //           console.log(error)
  //         })
  //     }
  //   }

handleSubmit = e => {
  console.log(this.state)
  axios.post('https://egret-kishawi-carter.herokuapp.com/api/cards/', this.state,  {
    headers: {
      Authorization: `Token ${this.state.token}`
    }
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
}

  // handleSubmit (event) {
  //   event.preventDefault()
  //   if (this.state.token) {
  //     postCards(this.state.token)
  //       .then(response => {
  //         console.log(response)
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }

  render () {
    const { card, title, color, font, inner_text, outer_text } = this.state
    if (this.state.redirect) {
      return (<Redirect to='/cards/all/' />)
    }

    return (
      <div>
        <h1>create a new card</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
                pick a font!
            <select 
              value={font}
              name='font'
              onChange={this.handleChange}>
              <option font='F_ONE'>calibri</option>
              <option font='F_TWO'>arial</option>
            </select>
          </label>
          <label>
                choose a color!
            <select 
              value={color} 
              name='color'
              onChange={this.handleChange}>
              <option color='C_ONE'>blue</option>
              <option color='C_TWO'>green</option>
            </select>
          </label>

          <div />

          <div>
            <label>Title: </label>
            <input
              placeholder='title'
              name='title'
              value={title}
              type='text'
              onChange={this.handleChange}
            />
          </div>
        
          <div>
            <label>outer-text: </label>
            <input
              placeholder='outer_text'
              name='outer_text'
              value={outer_text}
              type='text'
              onChange={this.handleChange}
            />
          </div>
         
          <div>
            <label>inner-text: </label>
            <input
              placeholder='inner_text'
              name='inner_text'
              value={inner_text}
              type='text'
              onChange={this.handleChange}
            />
          </div>
          <Link to='/cards/all/'>
          <button type='submit' value='Submit' onClick='this.handleSubmit'>submit new card</button>
          </Link>
        </form>

        {/* <ul>
          <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
            <h1 className='center f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3' /> */}

            {/* <div onDoubleClick={this.changeEditMode}className='center pa3 bt b--black-10' />
            <li>{this.state.title}</li>
            <li>{this.state.outer_text}</li>
            <li>{this.state.inner_text}</li>
           
            <div /> */}
          {/* </article>
        </ul> */}

      </div>
    )
  }
}
