import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Productos from './components/Productos'
import Inicio from './components/Inicio'
import Acerca from './components/Acerca'
import Contacto from './components/Contacto'
import Carrito from './components/Carrito'
import Detalles from './components/Detalles'


function App() {


  return (
    <>
    <Header />
    <Nav />
    <Routes>
      <Route path={'/'} element={<Inicio/>}/>
      <Route path={'/Acerca'} element={<Acerca/>}/>
      <Route path={'/Carrito'} element={<Carrito/>}/>
      <Route path={'/Contacto'} element={<Contacto/>}/>
      <Route path={'/productos/:id'} element={<Detalles/>}/>
    </Routes>
    <Productos />
    </>
  )
}

export default App
