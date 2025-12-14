import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'
import { getUsername, getUserRole } from '../utils/auth'
import './Dashboard.css'

function Dashboard({ userRole, onLogout }) {
  const [sweets, setSweets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  useEffect(() => {
    loadSweets()
  }, [])

  const loadSweets = async () => {
    try {
      setLoading(true)
      const params = {}
      if (searchTerm) params.name = searchTerm
      if (category) params.category = category
      if (minPrice) params.minPrice = parseFloat(minPrice)
      if (maxPrice) params.maxPrice = parseFloat(maxPrice)

      const response = await api.get('/sweets/search', { params })
      setSweets(response.data)
      setError('')
    } catch (err) {
      setError('Failed to load sweets. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handlePurchase = async (id, quantity = 1) => {
    try {
      await api.post(`/sweets/${id}/purchase`, { quantity })
      loadSweets()
      alert('Purchase successful!')
    } catch (err) {
      alert(err.response?.data?.error || 'Purchase failed')
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    loadSweets()
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>🍬 Sweet Shop Management</h1>
          <p>Welcome, {getUsername()}!</p>
        </div>
        <div className="header-actions">
          {userRole === 'ADMIN' && (
            <Link to="/admin" className="btn btn-secondary">Admin Panel</Link>
          )}
          <button onClick={onLogout} className="btn btn-outline">Logout</button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <input
              type="text"
              placeholder="Category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="search-input"
            />
            <input
              type="number"
              placeholder="Min price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="search-input"
              step="0.01"
            />
            <input
              type="number"
              placeholder="Max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="search-input"
              step="0.01"
            />
            <button type="submit" className="btn btn-primary">Search</button>
            <button type="button" onClick={() => {
              setSearchTerm('')
              setCategory('')
              setMinPrice('')
              setMaxPrice('')
              loadSweets()
            }} className="btn btn-secondary">Clear</button>
          </form>
        </div>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading sweets...</div>
        ) : (
          <div className="sweets-grid">
            {sweets.length === 0 ? (
              <div className="empty-state">No sweets found</div>
            ) : (
              sweets.map(sweet => (
                <div key={sweet.id} className="sweet-card">
                  <h3>{sweet.name}</h3>
                  <p className="category">{sweet.category}</p>
                  <p className="price">${sweet.price.toFixed(2)}</p>
                  <p className={`quantity ${sweet.quantity === 0 ? 'out-of-stock' : ''}`}>
                    Stock: {sweet.quantity}
                  </p>
                  <button
                    onClick={() => handlePurchase(sweet.id, 1)}
                    disabled={sweet.quantity === 0}
                    className="btn btn-primary"
                  >
                    {sweet.quantity === 0 ? 'Out of Stock' : 'Purchase'}
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
