import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LandingPageMain from '../pages/public/LandingPage/LandingPageMain'
import LoginPageMain from '../pages/public/LoginPage/LoginPageMain'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageMain />}/>
        <Route path="/login" element={<LoginPageMain />}/>
      </Routes>
    </Router>
  )
}

export default App
