import React from 'react'
import Login from './Login'
import { getToken, getCards } from './Api'
import axios from 'axios'
// import Card from './components/Card'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class Cards extends React.Component {
  constructor () {
    super()
    this.state = {
      users: [],
      token: localStorage.getItem('login_auth_token'),
      cards: [],
      currentCard: null
    }
    this.currentCard = this.currentCard.bind(this)
  }

  componentDidMount () {
    if (this.state.token) {
      console.log(this.state.token)
      getCards(this.state.token)
        .then(response =>
          this.setState({ cards: response.data.results }))
    }
    console.log(this.setState.cards)
  }

  currentCard (card) {
    this.setState({ currentCard: card })
  }

  render () {
    const { cards, id, currentCard } = this.state

    return (
      <div className='App'>
        {/* <h1>your cards</h1> */}
        <ul>
          <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
            <h1 className='center f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>your Egrets</h1>

            <div className='center pa3 bt b--black-10'>
              {cards.map((card, id) =>
                <ul key={id} className='cards'>
                  <Link to='/cards/:id/'>
                    <li>{card.title}</li>
                    <li>creator #: {card.creator}</li>
                    <br></br>
                  </Link>
                </ul>
              )}
            </div>
            <div>
              {cards.filter(card => card.id == 2).map((card, id) =>
                <ul key={id}>
                  <li>{card.title}</li>
                  <li>{card.font}</li>
                </ul>
              )}
            </div>
          </article>
        </ul>

        {/* {
          currentCard
            ? <Card currentCard={currentCard} />
            : (<Cards
              cards={this.state.cards}
              currentCard={this.currentCard}
            />)
        } */}
      </div>

    )
  }
}
