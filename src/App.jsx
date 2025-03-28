import Home from './pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/player/:Id' element={<Player/>}></Route>
    </Routes>
    </>
  )
}

export default App
