import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="center">
    <h1>404 - Page Not Found</h1>
    <p>
      The page you are looking for does not exist. <Link to="/">Return home</Link>
    </p>
  </section>
)

export default NotFound
