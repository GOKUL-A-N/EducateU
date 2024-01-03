import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
// import Course from './pages/Course'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App:React.FC = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/course" element={<Course />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App