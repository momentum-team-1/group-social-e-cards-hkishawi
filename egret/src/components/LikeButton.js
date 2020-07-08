import React from 'react'

// export default class LikeButton extends React.Component {
//     state = {
//         likes: 0
//     };

//     addLike = () => {
//         let newCount = this.state.likes +1;
//         this.setState({
//             likes: newCount
//         })
//     }

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
  }
}

toggleLike() {
    this.setState((currentState) => ({
        likes: !currentState.likes,
    }))
}

  addLike = () => {
    let newCount = this.state.likes = true;
     this.setState({
     likes: true 
     });
  };

  render() {
    const likes = this.state.likes;
    if (likes === null) {
      return (
        <div>
          <button
            className="button"
            onClick={this.addLike}
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
            onClick={this.addLike}>
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
          onClick={this.addLike}
        >
          <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
        </button>
      </div>
      );
    }
  }
}
  