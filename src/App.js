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
      <Route exact path="/project-2/" component={Home}/>
      <Route exact path="/project-2/Heroes" component={Heroes}/>
      <Route exact path="/project-2/Heroes/:heroId" component={Hero}/>
    </Switch>
  </BrowserRouter>
)


export default App