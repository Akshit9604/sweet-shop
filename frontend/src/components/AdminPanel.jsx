import React, { useState, useEffect } from 'react'
import api from '../utils/api'
import { getUsername } from '../utils/auth'
import './AdminPanel.css'

function AdminPanel({ onLogout }) {
  const [sweets, setSweets] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingSweet, setEditingSweet] = useState(null)
  const [formData, setFormData] = useState({ name: '', category: '', price: '', quantity: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    loadSweets()
  }, [])

  const loadSweets = async () => {
    try {
      const response = await api.get('/sweets')
      setSweets(response.data)
    } catch (err) {
      setError('Failed to load sweets')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const sweetData = {
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity)
      }

      if (editingSweet) {
        await api.put(`/sweets/${editingSweet.id}`, sweetData)
      } else {
        await api.post('/sweets', sweetData)
      }

      setShowForm(false)
      setEditingSweet(null)
      setFormData({ name: '', category: '', price: '', quantity: '' })
      loadSweets()
    } catch (err) {
      setError(err.response?.data?.error || 'Operation failed')
    }
  }

  const handleEdit = (sweet) => {
    setEditingSweet(sweet)
    setFormData({
      name: sweet.name,
      category: sweet.category,
      price: sweet.price.toString(),
      quantity: sweet.quantity.toString()
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this sweet?')) return

    try {
      await api.delete(`/sweets/${id}`)
      loadSweets()
    } catch (err) {
      alert(err.response?.data?.error || 'Delete failed')
    }
  }

  const handleRestock = async (id) => {
    const quantity = prompt('Enter quantity to add:')
    if (!quantity || isNaN(quantity) || parseInt(quantity) <= 0) return

    try {
      await api.post(`/sweets/${id}/restock`, { quantity: parseInt(quantity) })
      loadSweets()
      alert('Restocked successfully!')
    } catch (err) {
      alert(err.response?.data?.error || 'Restock failed')
    }
  }

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <div>
          <h1>🍬 Admin Panel</h1>
          <p>Welcome, {getUsername()} (Admin)</p>
        </div>
        <button onClick={onLogout} className="btn btn-outline">Logout</button>
      </header>

      <div className="admin-content">
        <div className="admin-actions">
          <button onClick={() => {
            setShowForm(!showForm)
            setEditingSweet(null)
            setFormData({ name: '', category: '', price: '', quantity: '' })
          }} className="btn btn-primary">
            {showForm ? 'Cancel' : 'Add New Sweet'}
          </button>
        </div>

        {showForm && (
          <div className="admin-form-card">
            <h2>{editingSweet ? 'Edit Sweet' : 'Add New Sweet'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  required
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="btn btn-primary">
                {editingSweet ? 'Update' : 'Create'}
              </button>
            </form>
          </div>
        )}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="admin-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sweets.map(sweet => (
                  <tr key={sweet.id}>
                    <td>{sweet.id}</td>
                    <td>{sweet.name}</td>
                    <td>{sweet.category}</td>
                    <td>${sweet.price.toFixed(2)}</td>
                    <td>{sweet.quantity}</td>
                    <td>
                      <div className="action-buttons">
                        <button onClick={() => handleEdit(sweet)} className="btn btn-small btn-secondary">Edit</button>
                        <button onClick={() => handleRestock(sweet.id)} className="btn btn-small btn-success">Restock</button>
                        <button onClick={() => handleDelete(sweet.id)} className="btn btn-small btn-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel
