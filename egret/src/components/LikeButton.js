import React from 'react'
import axios from 'axios';

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
    likes: false,
    users: []
  }
  this.toggleLike=this.toggleLike.bind(this)
}

toggleLike() {
    this.setState((likes) => ({ likes: !this.state.likes }))
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

//   addLike = () => {
//     if (this.state.) {
//         this.setState({
//             likes: true, 
//         })
//         else {
//             this.setState({
//                 likes: false,
//             })
//         }
//     }
//     true;
//      this.setState({
//      likes: true, 
//      });
//   };

  render() {
    const { card } = this.props
    const likes = this.state.likes;
    if (likes === null) {
      return (
        <div>
          <button
            key={card.id}
            className="button"
            onClick={this.toggleLike}
          >
            <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
          </button>
        </div>
      );
    }
    if (likes === true) {
      return (
        <div>
          <button 
            className="button" 
            onClick={this.toggleLike}>
            <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
          </button>
        </div>
      );
    }
    if (likes === false)
     {
      return (
        <div>
        <button
          className="button"
          onClick={this.toggleLike}
        >
          <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
        </button>
      </div>
      );
    }
  }
}
  