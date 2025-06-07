import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './Components/Form'
import SuccessPage from './Components/SuccessPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  )
}

export default App
