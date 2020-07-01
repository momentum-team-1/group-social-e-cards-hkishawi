/* globals localStorage */

import React from 'react'
// import 'tachyons'
import { getToken, getCards } from './Api'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: localStorage.getItem('login_username') || '',
      password: '',
      token: localStorage.getItem('login_auth_token'),
      error: null,
      cards: []
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount () {
      if (this.state.token) {
        getCards(this.state.token).then(cards => this.setState({cards: cards}))
      }
  }

  componentDidUpdate (prevProps, prevState) {
      if (this.state.token && this.state.token !== prevState.token) {
        getCards(this.state.token).then(cards => this.setState({ cards: cards }))
      }
  }

  handleLogin (event) {
    event.preventDefault()

    getToken(this.state.username, this.state.password)
      .then(token => {
        this.setState({ token: token, password: '' })
        localStorage.setItem('login_username', this.state.username)
        localStorage.setItem('login_auth_token', token)
      })

      .catch(error => {
        this.setState({ error: 'there is no such username or pw' })
        console.log(error)
      })
  }

  handleLogout (event) {
    event.preventDefault()

    this.setState({ token: null, username: '' })
    localStorage.removeItem('login_username')
    localStorage.removeItem('login_auth_token')
  }54

  render () {
    return (
      <div className=''>
        {
          this.state.token
            ? (
              <div>
                <h3>welcome, {this.state.username}</h3>
                <button onClick={this.handleLogout}>Logout</button>
                <ul>
                    {this.state.cards.map(card => <li key={card.id}>{card.message}</li> )}
               </ul>
              </div>
            )
            : (
              <form onSubmit={this.handleLogin}>
                <div className='red'>{this.state.error}</div>
                <div className=''>
                  <label htmlFor='username' className=''>Username</label>
                  <input
                    id='username' className=''
                    type='text' value={this.state.username}
                    onChange={event => this.setState({ username: event.target.value })}
                  />
                </div>

                <div className=''>
                  <label htmlFor='password' className=''>Password</label>
                  <input
                    id='password' className=''
                    type='password' value={this.state.password}
                    onChange={event => this.setState({ password: event.target.value })}
                  />
                </div>

                <div className=''>
                  <button type='submit' className=''>login</button>
                </div>
              </form>
            )
        }
        <div />
      </div>
    )
  }
}
export default Login
