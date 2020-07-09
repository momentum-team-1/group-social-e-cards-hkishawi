import React from 'react'
import { getToken, getCards } from './Api'
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.logout = this.logout.bind(this)
  }

  logout () {
    localStorage.setItem('login_auth_token', 'token')
    localStorage.clear()
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to='/login' />)
    }
    return (
      <nav className='nav flex flex-column'>
        <div>
          <h2 className='egret' id='spinner'><b>e-gret</b></h2>
          <h3>all e-cards, no regrets</h3>
        </div>
        
        <div className='logo' />
        <ul className='nav-links'>
          <Link to='/profile/'>
            <li className='nav-link'>Home</li>
          </Link>
          <Link to='/cards/all'>
            <li className='nav-link'>E-Cards</li>
          </Link>
          <Link to='/friends/'>
            <li className='nav-link'>Friends</li>
          </Link>
          <Link to='/cards/:id/'>
            <li className='nav-link'>New Card</li>
          </Link>
          <Link to='/about'>
            <li className='nav-link'>About</li>
          </Link>
          <Link to='/login/'>
            <li className='nav-link' onClick={this.logout}>Logout</li>
          </Link>
          <Link to='/favorites/'>
            <li className='nav-link'>Favs</li>
          </Link>

        </ul>
      </nav>
    )
  }
}

export default Nav
