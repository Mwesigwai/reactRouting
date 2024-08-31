import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path='about' element = {<About />}/>
          <Route path='contact' element = {<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
