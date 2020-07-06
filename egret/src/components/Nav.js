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
    const navStyle = {
      color: 'gray'
    }
    if (this.state.redirect) {
      return (<Redirect to="/login" />)
    }
    return (
      <nav>
        <div id=''>
          <h2 id='spinner'><b>e-gret</b></h2>
          <h3>your favorite e-cards site!</h3>
        </div>
        <h3>Egret logo</h3>
        <ul className='nav-links'>
          <Link style={navStyle} to='/home'>
            <li>Home</li>
          </Link>
          <Link style={navStyle} to='/cards/all'>
            <li>E-Cards</li>
          </Link>
          <Link style={navStyle} to='/about'>
            <li>About</li>
          </Link>
          <Link style={navStyle} to='/login'>
            <li onClick={this.logout}>Logout</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav
