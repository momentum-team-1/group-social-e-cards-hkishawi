import React from 'react'
import axios from 'axios';
import Cards from '../components/Cards'

// export default class LikeButton extends React.Component {
//     state = {
//         likes: 0
//     };

    // addLike = () => {
    //     let newCount = this.state.likes +1;
    //     this.setState({
    //         likes: newCount
    //     })
    // }

//     render() {
//         return (
//             <button 
//                 onClick={this.addLike}
//                 id={this.props.cardId}
//                 className='button'
//             >
//             likes: {this.state.likes}
//             </button>
//         )}
// }

export default class HeartButton extends React.Component {
    constructor(props){
        super(props);
  this.state = {
    isFavorite: false,
    users: [], 
    token: localStorage.getItem('login_auth_token')
  }
  this.toggleLike=this.toggleLike.bind(this)

}

toggleLike() {
    this.setState((isFavorite) => ({ isFavorite: !this.state.isFavorite }))
}

handleSubmit = e => {
    axios.post('https://egret-kishawi-carter.herokuapp.com/api/favorites/', this.state, {
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

handleLikedCard = e => {
    const {cardId} = this.props
    axios.post(`https://egret-kishawi-carter.herokuapp.com/api/favorites/${cardId}/`, this.state, {
      headers: {
        Authorization: `Token ${this.state.token}`
      }
    })
    .then(response => {
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { cardId } = this.props
    const { favorite } = this.props
    const isFavorite = this.state.isFavorite;
    if (isFavorite === null) {
      return (
        <div>
          <button
            
            className="button"
            onClick= {() => {
                this.toggleLike();
                this.handleLikedCard();
            }}>
            <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
          </button>
        </div>
      );
    }
    if (isFavorite === true) {
      return (
        <div>
          <button 
            cardId='isFavorite.id'
            className="button" 
            onClick= {() => {
                this.toggleLike();
                this.handleLikedCard();
            }}>
            <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
          </button>
        </div>
      );
    }
    if (isFavorite === false)
     {
      return (
        <div>
        <button
          className="button"
          onClick= {() => {
            this.toggleLike();
            this.handleLikedCard();
            }}>
          <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
        </button>
      </div>
      );
    }
  }
}

