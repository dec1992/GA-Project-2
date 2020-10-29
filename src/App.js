import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components

import Home from './components/Home'
import Navbar from './components/Navbar'
import Heroes from './components/Heroes'
import Hero from './components/Hero'

import 'bulma'
import './styles/mystyles.scss'


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Heroes" component={Heroes}/>
      <Route exact path="/Heroes/:heroId" component={Hero}/>
    </Switch>
  </BrowserRouter>
)


export default App