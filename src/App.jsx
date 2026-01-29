import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Contact from './pages/Contact'
import OurStory from './pages/OurStory'
import LandingPage from './pages/LandingPage'
import Header from './components/common/Header'
import Home from './pages/Home'
import About from './pages/About'
import Admin from './pages/Admin'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ArtGallery from './pages/ArtGallery'
import Blog from './pages/Blog'
import SinglePost from './components/blog/SinglePost'
import AuthGuard from './auth/AuthGuard'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={
        <>
          <Navbar />
          <LandingPage />
        </>}>
      </Route>
      <Route path='/contact' element={<>
        <Contact />
        <Footer />
      </>} />
      <Route path='/story' element={<>
        <Navbar />
        <OurStory />
      </>} />
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>

      {/* Only logged-in user */}
      <Route element={<AuthGuard/>}>
        <Route path='/home' element={<>
          <Header />
          <Home />
          <Footer />
        </>} />
        <Route path='/blog' element={<>
          <Header />
          <Blog />
          <Footer />
        </>} />
        <Route path="/post/:id" element={<>
          <Header />
          <SinglePost />
          <Footer />
        </>} />
        <Route path='/about' element={<>
          <Header />
          <About />
          <Footer />
        </>} />

        <Route path='/gallery' element={<>
          <Header />
          <ArtGallery />
          <Footer />
        </>} />
        <Route path='/admin' element={<Admin />} />
      </Route>

    </Routes>
  )
}

export default App