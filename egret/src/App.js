import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards'
import About from './components/About'
import Login from './components/Login'
import Card from './components/Card'
import Dropdown from './components/Dropdown'
import Friends from './components/Friends'
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (

      <Router>
        <div className='App'>
          <Nav />
          <br/>
          <Login />
          <Switch>
            <Route path='/' exact component={App} />
            <Route path='/about' component={About} />
            <Route path='/cards/all/' component={Cards} />
            <Route path='/cards/:id/' component={Card} />
            <Route path='/friends/' component={Friends} />
            <Route path='/profile/' component={Profile} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
