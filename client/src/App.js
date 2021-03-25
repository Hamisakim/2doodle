import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Canvas from './Canvas'
import Gallery from './components/Gallery'
import Doodle from './components/Doodle'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/canvas'>
            <Canvas />
          </Route>
          <Route path='/doodle'>
            <Doodle />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App
