import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import About from './About'
import Blog from './Blog'
import Proyectos from './Proyectos'
import Footer from './Footer'
import './index.css'
import Home from './Home'
import NotFound from './NotFound'

export default function App () {
  return (
    <Router>
      <Menu />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/blog' element={<Blog/> } />
          <Route path='/about' element={<About />} />
          <Route path='/proyectos' element={<Proyectos/> } />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}
