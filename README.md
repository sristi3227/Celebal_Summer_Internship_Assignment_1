# React Form with Validation — Celebal Summer Internship Task

This is Celebal Summer Internship First assignment.

## 🚀 Task Overview

The task was to create a responsive React form that includes:

- ✅ Field validation (required fields)
- ✅ Real-time error messages
- ✅ Submit button disabled until the form is valid
- ✅ Password field with show/hide functionality
- ✅ On successful submission, redirect to a new route showing all entered details


---

## 🧩 Form Fields

- First Name
- Last Name
- Username
- Email
- Password (with checkbox show/hide)
- Phone Number:
  - Country Code 
  - Phone Number (input)
- Country (dropdown)
- City (dropdown based on selected country)
- PAN Number
- Aadhar Number

---

## ⚙️ Tech Stack

- React (with Vite)
- React Router (for navigation between form and success page)
- Basic CSS (no CSS framework)
- Local React `useState` and `useEffect` hooks

---
## 📁 Folder Structure

Assignment_1/
├── public/
├── src/
│ ├── assets/
│ └── Components/
│ ├── Form.jsx # Main form component
│ └── SuccessPage.jsx # Shows submitted data
├── App.jsx # Entry component using routes
├── App.css # App-wide styles
├── index.css 
├── index.html 
├── main.jsx 
├── vite.config.js 
├── eslint.config.js 
├── package.json 
