
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
 
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={ItemListContainer} />
      <Route path='/products' element={ItemListContainer} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
