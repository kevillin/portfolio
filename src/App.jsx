import NavBar from './components/NavBar'
import Main from './components/Main'
import Skills from './components/Stacks'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <SocialMedia />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
