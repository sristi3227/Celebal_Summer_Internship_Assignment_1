import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function SuccessPage() {
  const { state } = useLocation()

  return (
    <div className="success-container">
      <h2>Registration Successful!</h2>
      <ul className="success-details">
        {Object.entries(state).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
            <span>{value}</span>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-button">Go Back</Link>
    </div>
  )
}

export default SuccessPage
