import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Sports from './Pages/Sports'
import Epreuves from './Pages/Epreuves'
import Athletes from './Pages/Athletes'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/athletes" element={<Athletes/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/epreuves" element={<Epreuves/>} />
      </Routes>
    </>
  )
}

export default App
