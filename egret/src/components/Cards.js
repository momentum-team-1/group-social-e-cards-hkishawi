import React from 'react'
import Login from './Login'
import { getToken, getCards, deleteACard } from './Api'
import axios from 'axios'
import LikeButton from '../components/LikeButton'
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

  // deleteCard = (cardId) => {
  //   if (this.state.token) {
  //     deleteACard(this.state.token)
  //       .then(response => {
  //         if(response.data != null) {
  //           alert('book deleted successfully')
  //         }
  //       })
  //   }

  // }

  // deleteCard = (cardId) => {
  //   console.log(cardId)
  //   axios.delete(`http://egret-kishawi-carter.herokuapp.com/api/cards/${cardId}/`, this.state,{

  //     headers: {
  //       Authorization: `Token ${this.state.token}`
  //     }
  //   })
  //     .then(response => {
  //       console.log(response)
  //       if(response.data.results != null) {
  //         alert('card deleted successfully');
  //         this.setState({
  //           cards: this.state.cards.filter(card => card.id !== card.id)
  //         })
  //       }
  //     })
  // };

  deleteCard (cardId) {
    console.log(cardId)
    if (this.state.token) {
      axios.delete(`https://egret-kishawi-carter.herokuapp.com/api/cards/${cardId}/`, {
        headers: {
          Authorization: `Token ${this.state.token}`
        }
      })
        .then(response => {
          console.log(response)
          if (response.data.results != null) {
            alert('card deleted!')
            this.setState({
              cards: this.state.cards.filter(card => card.id != cardId)
            })
          }
        })
    }
  }

  render () {
    const { cards, id, currentCard, deleteCard } = this.state

    return (
      <div className='App'>
        {/* <h1>your cards</h1> */}
        <ul>
          <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
            <h1 className='article f4  br3 br--top white-60 mv0 pv2 ph1'><b>everyone's Egrets</b></h1>

            <div className='mw5 mw7 center div pa3 bt b--black-10'>
              {cards.map((card, id) =>
                <ul key={card.id} className=' cards'>
                  <div className=' pa1 mw2 mw6-ns br2 hidden ba b--black-10 mv1' key={card.id}>
                    <Link to='/cards/:id/'>
                      <li>{card.title}</li>
                      <li>creator #: {card.creator}</li>
                      <li>{card.outer_text}</li>
                      <li>{card.inner_text}</li>
                      </Link>
                      <Link to='/cards/all/'>
                      <button onClick={this.deleteCard.bind(this, card.id)} className='button'>delete card</button>
                      <LikeButton cardId={card.id}/>
                      </Link>
                  </div>
                </ul>
              )}
            </div>
            <div>
              {/* {cards.filter(card => card.id == 2).map((card, id) =>
                <ul key={card.id} className='cards'>
                  <li>{card.title}</li>
                  <li>{card.font}</li>
                </ul>
              )} */}
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
