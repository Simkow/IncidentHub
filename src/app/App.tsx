import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LandingPageMain from '../pages/public/LandingPage/LandingPageMain'
import LoginPageMain from '../pages/public/LoginPage/LoginPageMain'
import RegisterPage from '../pages/public/RegisterPage/RegisterPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageMain />}/>
        <Route path="/login" element={<LoginPageMain />}/>
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>
    </Router>
  )
}

export default App
