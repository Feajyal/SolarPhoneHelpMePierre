import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import HomePage from './pages/HomePage'
import Map from './pages/Map'

import './App.css'

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="" element={<LandingPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="forget-password" element={<ForgetPasswordPage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="map" element={<Map />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  )
}
const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by Solar Phone</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
