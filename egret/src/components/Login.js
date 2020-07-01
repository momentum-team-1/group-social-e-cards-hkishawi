/* globals localStorage */

import React from 'react'
// import 'tachyons'
import { getToken } from './Api'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      token: localStorage.getItem('login_auth_token'),
      error: null
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin (event) {
    event.preventDefault()

    getToken(this.state.username, this.state.password)
      .then(token => {
          this.setState({ token: token })
          localStorage.setItem('login_auth_token', token)
   })

      .catch(error => {
          this.setState({error: 'there is no such username or pw'})
          console.log(error)
      })
  }

  render () {
    return (
      <div className=''>
        {
          this.state.token
            ? <h3>welcome, {this.state.username}</h3>
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
