import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Productlist from './Pages/Productlist'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-list" element={<Productlist />} />
      </Routes>
    </div>
  )
}

export default App
