import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Headers from './components/Headers'
import Home from './components/Home'
import Service from './components/Service'

const App = () => {
  return (
    <div className="grid-container">
    <header>
      <Headers/>
    </header>
    <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default App
