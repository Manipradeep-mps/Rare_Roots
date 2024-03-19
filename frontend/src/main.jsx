import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About'
import Explore from './components/Explore'
import Home from './components/Home'
import Login from './components/Login'
import Postinfo from './components/Postinfo'
import Posts from './components/Posts'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
)
