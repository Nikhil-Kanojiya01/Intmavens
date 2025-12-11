import React, { useState } from 'react'

const Comments = () => {
  const [form, setForm] = useState({ name: '', email: '', website: '', save: false, message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') setForm((s) => ({ ...s, [name]: checked }))
    else setForm((s) => ({ ...s, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
      const endpoint = `${API_URL}/api/mail/blog`
      
      console.log('🔵 Submitting to:', endpoint)
      console.log('📤 Data:', { name: form.name, email: form.email, website: form.website, message: form.message })
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          website: form.website || undefined,
          message: form.message,
        }),
      })

      console.log('📥 Response status:', response.status)
      
      const result = await response.json()
      console.log('📥 Response data:', result)

      if (result.ok) {
        setSubmitted(true)
        
        // Save to localStorage if checkbox is checked
        if (form.save) {
          localStorage.setItem('commentAuthor', JSON.stringify({
            name: form.name,
            email: form.email,
            website: form.website,
          }))
        } else {
          localStorage.removeItem('commentAuthor')
        }
      } else {
        setError(result.error || 'Failed to submit comment. Please try again.')
      }
    } catch (err) {
      console.error('❌ Error submitting comment:', err)
      console.error('Error details:', err.message)
      setError(`Unable to connect to server. Please ensure the backend is running on http://localhost:4000`)
    } finally {
      setLoading(false)
    }
  }

  // Load saved data from localStorage on mount
  React.useEffect(() => {
    const savedData = localStorage.getItem('commentAuthor')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setForm((prev) => ({ ...prev, ...parsed, save: true }))
      } catch (err) {
        console.error('Error parsing saved comment data:', err)
      }
    }
  }, [])

  return (
    <div className="comments">
      <h3>Leave a Comment</h3>
      <p className="muted">Your email address will not be published. Required fields are marked *</p>

      {!submitted ? (
        <form className="comments-form" onSubmit={onSubmit}>
          {error && (
            <div className="error-message" style={{ 
              padding: '12px', 
              marginBottom: '20px', 
              backgroundColor: '#fee', 
              color: '#c33', 
              borderRadius: '4px',
              border: '1px solid #fcc'
            }}>
              {error}
            </div>
          )}

          <div className="form-group">
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Type here.."
              rows={7}
              value={form.message}
              onChange={onChange}
              required
              disabled={loading}
            />
          </div>

          <div className="row-three">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Name*"
                value={form.name}
                onChange={onChange}
                required
                disabled={loading}
              />
            </div>
            <div style={{ flex: 1 }} className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email*"
                value={form.email}
                onChange={onChange}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <input
                type="url"
                name="website"
                className="form-input"
                placeholder="Website"
                value={form.website}
                onChange={onChange}
                disabled={loading}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="save"
                className="checkbox-input"
                checked={form.save}
                onChange={onChange}
                disabled={loading}
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-text">Save my name, email, and website in this browser for the next time I comment.</span>
            </label>
          </div>

          <div>
            <button type="submit" className="btn btn--primary" disabled={loading}>
              {loading ? 'Posting Comment...' : 'Post Comment »'}
            </button>
          </div>
        </form>
      ) : (
        <div className="comment-submitted">
          <p>✅ Thank you — your comment has been received and is pending approval.</p>
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            We've sent a confirmation email to {form.email}
          </p>
        </div>
      )}
    </div>
  )
}

export default Comments