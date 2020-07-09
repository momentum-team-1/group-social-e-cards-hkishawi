import React, { useState, useEffect } from 'react'

export default class Favorites extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: localStorage.getItem('login_auth_token'),
      favorite_of: false,
      users: []

    }
  }

  componentDidMount () {

  }

  render () {
    const { favorite_of, users } = this.state
    return (
      <div className='favorites'>
        <h1>your favs</h1>
      </div>
    )
  }
}
