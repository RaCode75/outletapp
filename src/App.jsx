import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Productos from './components/Productos'
import Inicio from './pages/Inicio'
import Acerca from './components/Acerca'
import Categoria from './pages/Categoria'
import Contacto from './components/Contacto'
import Detalles from './pages/Detalles'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <Header />
    <Nav />
    <Routes>
      <Route path={'/'} element={<Inicio/>}/>
      <Route path={'/acerca'} element={<Acerca/>}/>
      <Route path={'/categoria'} element={<Categoria/>}/>
      <Route path={'/contacto'} element={<Contacto/>}/>
      <Route path={'/productos/:id'} element={<Detalles/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
