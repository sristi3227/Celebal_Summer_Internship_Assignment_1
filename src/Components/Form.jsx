import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../App.css'

function Form() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    pan: '',
    aadhar: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isFormFilled, setIsFormFilled] = useState(false)

  

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))

    // Remove the error when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }))

    // Check if all fields are filled
    const updatedForm = { ...form, [name]: value }
    const isFilled = Object.values(updatedForm).every(val => val.trim() !== '')
    setIsFormFilled(isFilled)
  }

  const validate = () => {
    let errs = {}

    // Only validate if the field has a value
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email format'
    }
    
    if (form.phoneNumber && !/^\d{10}$/.test(form.phoneNumber)) {
      errs.phoneNumber = 'Must be 10 digits'
    }

    if (form.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan)) {
      errs.pan = 'Invalid PAN format'
    }

    if (form.aadhar && !/^\d{12}$/.test(form.aadhar)) {
      errs.aadhar = 'Must be 12 digits'
    }

    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length === 0) {
      navigate('/success', { state: form })
    } else {
      setErrors(validationErrors)
    }
  }

  const gradientStyle = {
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '40px',

    textAlign: 'center',
    marginBottom: '20px'
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">

        <h2 style={gradientStyle}>Registration Form</h2>
        <div className="name-section">
          <div className="field">
            <label>First Name</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} placeholder='Enter your first name here' />
            <span>{errors.firstName}</span>
          </div>

          <div className="field">
            <label>Last Name</label>

            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder='Enter your last name here' />
            <span>{errors.lastName}</span>
          </div>
        </div>


        <div className="field">
          <label>Username</label>
          <input name="username" value={form.username} onChange={handleChange} placeholder='Enter your username here' />
          <span>{errors.username}</span>
        </div>

        <div className="field">
          <label>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'error' : form.email ? 'valid' : ''}
            placeholder='Enter your email-Id here'
          />
          <span className={`error-message ${errors.email ? 'visible' : ''}`}>
            {errors.email}
          </span>
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder='Enter your password here'
          />
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>Show Password</span>
          </div>
          <span>{errors.password}</span>
        </div>

        <div className="field">
          <label>Phone No.</label>
          <div className="phone-input">
            <input name="phoneCode" placeholder="+91" value={form.phoneCode} onChange={handleChange} style={{ width: '60px' }} />
            <input name="phoneNumber" placeholder="10 digit number" value={form.phoneNumber} onChange={handleChange} />
          </div>
          <span>{errors.phoneNumber}</span>
        </div>


        <div className="place">
          <div className="field">
            <label>Country</label>
            <select name="country" value={form.country} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            <span>{errors.country}</span>
          </div>

          <div className="field">
            <label>City</label>
            <select name="city" value={form.city} onChange={handleChange}>
              <option value="">-- Select --</option>
              {form.country === 'India' && <>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </>}
              {form.country === 'USA' && <>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
              </>}
            </select>
            <span>{errors.city}</span>
          </div>
        </div>


        <div className={`field ${errors.pan ? 'error' : form.pan ? 'valid' : ''}`}>
          <label>PAN No.</label>
          <input
            name="pan"
            value={form.pan}
            onChange={handleChange}
            className={errors.pan ? 'error' : form.pan ? 'valid' : ''}
          />
          {errors.pan && (
            <span className="error-message visible">{errors.pan}</span>
          )}
        </div>

        <div className={`field ${errors.aadhar ? 'error' : form.aadhar ? 'valid' : ''}`}>
          <label>Aadhar No.</label>
          <input
            name="aadhar"
            value={form.aadhar}
            onChange={handleChange}
            className={errors.aadhar ? 'error' : form.aadhar ? 'valid' : ''}
          />
          {errors.aadhar && (
            <span className="error-message visible">{errors.aadhar}</span>
          )}
        </div>

        <button 
          type="submit" 
          disabled={!isFormFilled}
        >
          Submit
        </button>

      </form>
    </>
  )
}

export default Form
