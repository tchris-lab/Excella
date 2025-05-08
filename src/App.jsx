
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Hero, About, Services, WhyChooseUs, Footer } from './components'
import CleaningService from './pages/CleaningService/CleaningService'
import ContractingService from './pages/ContractingService/ContractingService'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          
            <Navbar />
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            {/* <Contact /> */}
            <Footer />
          </>
        } />
        <Route path="/services/cleaning" element={<CleaningService />} />
        <Route path="/services/contracting" element={<ContractingService />} />
      </Routes>
    </Router>
  )
}

export default App
