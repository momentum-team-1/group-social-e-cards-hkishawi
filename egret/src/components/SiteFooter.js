import React from 'react'
import { getToken, getCards } from './Api'
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom'

class SiteFooter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='center flex'>
        <nav className='center flex'>
          <Router className='center flex'>
            <Link to='/profile/'>
              <span className='nav-link'>Home</span>
            </Link>
            <Link to='/cards/all'>
              <span className='nav-link'>E-Cards</span>
            </Link>
            <Link to='/friends/'>
              <span className='nav-link'>Friends</span>
            </Link>
            <Link to='/cards/:id/'>
              <span className='nav-link'>New Card</span>
            </Link>
            <Link to='/about'>
              <span className='nav-link'>About</span>
            </Link>
            <Link to='/login/'>
              <span className='nav-link' onClick={this.logout}>Logout</span>
            </Link>
            <Link to='/favorites/'>
              <span className='nav-link'>Favs</span>
            </Link>
          </Router>
        </nav>
      </div>
    )
  }
}

export default SiteFooter
