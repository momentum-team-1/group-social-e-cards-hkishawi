import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'
import About from './components/About'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (

      <Router>
        <div className='App'>
          <Nav />
          <Login />
          <About />
          <Card />
        </div>
      </Router>
    )
}
}
export default App
