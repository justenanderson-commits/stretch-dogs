import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import About from '../About'
import APP_ROUTES from '../../utilis/constants'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
