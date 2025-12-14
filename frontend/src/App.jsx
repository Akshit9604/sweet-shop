import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import AdminPanel from './components/AdminPanel'
import { getToken, getUserRole } from './utils/auth'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken())
  const [userRole, setUserRole] = useState(getUserRole())

  useEffect(() => {
    const token = getToken()
    setIsAuthenticated(!!token)
    setUserRole(getUserRole())
  }, [])

  const handleLogin = (role) => {
    setIsAuthenticated(true)
    setUserRole(role)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    setIsAuthenticated(false)
    setUserRole(null)
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
        } />
        <Route path="/register" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Register />
        } />
        <Route path="/dashboard" element={
          isAuthenticated ? <Dashboard userRole={userRole} onLogout={handleLogout} /> : <Navigate to="/login" />
        } />
        <Route path="/admin" element={
          isAuthenticated && userRole === 'ADMIN' ? <AdminPanel onLogout={handleLogout} /> : <Navigate to="/dashboard" />
        } />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  )
}

export default App
