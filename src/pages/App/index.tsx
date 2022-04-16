import { CalendarPage, HomePage, PortfolioPage, ProfitsPage } from 'pages'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profits" element={<ProfitsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  )
}

export default App
