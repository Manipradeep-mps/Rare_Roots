import About from './components/About'
import Explore from './components/Explore'
import Home from './components/Home'
import Login from './components/Login'
import Myposts from './components/Myposts'
import Postinfo from './components/Postinfo'
import Posts from './components/Posts'
import Register from './components/Register'
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom';


function App() {


  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myproducts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore/:id" element={<Postinfo />} />
        <Route path='/myproducts/myposts' element={<Myposts/>}/>
      </Routes>
  )
}

export default App
