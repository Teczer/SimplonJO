import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sports from './Pages/Sports'
import Athletes from './Pages/Athletes'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Sports/>} />
        <Route path="/athletes" element={<Athletes/>} />
        <Route path="/sports" element={<Sports/>} />
      </Routes>
    </>
  )
}

export default App
