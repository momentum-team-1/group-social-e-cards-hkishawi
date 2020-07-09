import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getFavorites } from '../components/Api'
import { Link } from 'react-router-dom'
import LikeButton from '../components/LikeButton'

export default class Favorites extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: localStorage.getItem('login_auth_token'),
      favorites: [],
      users: []

    }
  }

  componentDidMount () {
    if (this.state.token) {
      getFavorites(this.state.token)
        .then(response =>
          this.setState({
            favorites: response.data
          }))
    }
  }

  render () {
    const { favorites } = this.state

    return (
      <div className='favorites'>
        <h1>your favs</h1>
        <div>
          <ul>
            <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
              <h1 className='article f4  br3 br--top white-60 mv0 pv2 ph1'><b>your favs</b></h1>

              <div className='mw5 mw7 center div pa3 bt b--black-10'>
                {favorites.map((favorites) =>
                  <ul className=' cards'>
                    <div className=' pa1 mw2 mw6-ns br2 hidden ba b--black-10 mv1'>

                      <Link to='/cards/:id/'>
                        <li>{favorites.creator}</li>
                        <li>{favorites.title}</li>
                        <li>{favorites.outer_text}</li>
                        <li>{favorites.inner_text} </li>
                        <li>favorite of: {favorites.favorite_of}</li>
                      </Link>
                      <Link to=''>
                        <button />
                        <LikeButton cardId={favorites.id} />
                      </Link>
                    </div>
                  </ul>
                )}
              </div>
              <div />
            </article>
          </ul>
        </div>
      </div>
    )
  }
}
