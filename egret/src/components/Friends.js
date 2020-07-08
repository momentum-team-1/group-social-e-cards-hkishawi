import React from 'react'
import { getCards, getUsers } from './Api'
import { Link } from 'react-router-dom'

export default class Friends extends React.Component {
  constructor () {
    super()
    this.state = {
      users: [],
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
          <h4 className='article center f4  br3 br--top white-60 mv0 pv2 ph3'> your friends</h4>
          <div className='left div v-mid pa3 bt b--black-10'>
            {users.map((user, id) =>
              <ul key={id} className='tl v-mid friends mw2 mw6-ns br2 hidden ba b--black-10 mv4'>
                  <div className='flex-column pa1 mw2 mw6-ns br2 hidden b--black-10 mv1'>
                <Link to=''>
                  <li className=''>{user.username}</li>
                </Link>
                </div>
              </ul>)}
          </div>
        </article>
      </div>

    )
  }
}
