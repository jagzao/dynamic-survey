// App.tsx
// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import type { Menu } from './types/Menu'
// views
import Home from './pages/home'
import Survey from './pages/survey'

function App (): JSX.Element {
  const menus: Menu[] = [
    {
      id: 1,
      name: 'Home',
      url: '/',
      description: 'Home'
    },
    {
      id: 2,
      name: 'Survey',
      url: '/survey',
      description: 'Dynamic surveys'
    }
  ]
  return (
    <Router>
      <div>
        <NavBar subs={menus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
