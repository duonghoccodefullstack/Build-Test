import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './Component/Layout/Layout.jsx'
import Home from './Component/Layout/Home/home.jsx'
import About from './Component/Layout/About/about.jsx'
import Contact  from './Component/Layout/Contact/contact.jsx';
// import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <Router>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Layout/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </Router>
  

  </React.StrictMode>,
)
