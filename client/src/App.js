import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import DoodleNew from './components/DoodleNew'
import Navbar from './components/Nav_and_Footer/NavBar'
import Footer from './components/Nav_and_Footer/Footer'
import Home from './components/Home'
import Profile from './components/Profile'
import JoinPage from './components/userStuff/JoinPage'
import Login from './components/userStuff/Login'
import ArtworkShow from './components/ArtworkShow'
import DoodleEdit from './components/DoodleEdit'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path='/gallery'>
            <Gallery />
          </Route>

          <Route path='/doodle-new'>
            <DoodleNew />
          </Route>

          <Route path="/gallery/:id/edit">
            <DoodleEdit />
          </Route>

          <Route path="/gallery/:id">
            <ArtworkShow />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

          <Route path='/join'>
            <JoinPage />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
