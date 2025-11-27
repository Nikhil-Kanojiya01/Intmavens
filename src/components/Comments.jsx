import React, { useState } from 'react'

const Comments = () => {
  const [form, setForm] = useState({ name: '', email: '', website: '', save: false, message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') setForm((s) => ({ ...s, [name]: checked }))
    else setForm((s) => ({ ...s, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // For now just show a simple confirmation. Integrate real submit logic as needed.
    setSubmitted(true)
  }

  return (
    <div className="comments">
      <h3>Leave a Comment</h3>
      <p className="muted">Your email address will not be published. Required fields are marked *</p>

      {!submitted ? (
        <form className="comments-form" onSubmit={onSubmit}>
          <div className="form-group">
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Type here.."
              rows={7}
              value={form.message}
              onChange={onChange}
              required
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
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-text">Save my name, email, and website in this browser for the next time I comment.</span>
            </label>
          </div>

          <div>
            <button type="submit" className="btn btn--primary">Post Comment »</button>
          </div>
        </form>
      ) : (
        <div className="comment-submitted">
          <p>Thank you — your comment has been received and is pending approval.</p>
        </div>
      )}
    </div>
  )
}

export default Comments