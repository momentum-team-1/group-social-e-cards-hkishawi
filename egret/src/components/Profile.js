import React from 'react'
import { getCards, getUsers } from './Api'
import { Link } from 'react-router-dom'
import App from '../App'

export default class Friends extends React.Component {
  constructor () {
    super()
    this.state = {
      users: [],
      cards: [],
      token: localStorage.getItem('login_auth_token')
    }
  }

  componentDidMount () {
    if (this.state.token) {
      getUsers(this.state.token)
        .then(response =>
          this.setState({ users: response.data.results }))
    }
    console.log(this.setState.users)
  }

  render () {
    const { users, id } = this.state

    return (
      <div className='dib v-mid'>
        <br />
        <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
          <h4 className='article center f4  br3 br--top white-60 mv0 pv2 ph3'>you</h4>
          <div className='left div v-mid pa3 bt b--black-10'>
            {users.filter(user => user.id == 1).map((user, id) =>
              <ul key={user.id} className='cards'>
                <li><b>name: </b> {user.username}</li>
                <li><b>birthday: </b>placeholder 07/01/2020  {user.birthday}</li>
                <li><b>email: </b> {user.email}</li>
                <li><b>user ID: </b> {user.id}</li>
              </ul>
            )}
          </div>
        </article>
      </div>
    )
  }
}
