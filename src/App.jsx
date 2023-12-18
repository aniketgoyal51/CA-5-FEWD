import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App
