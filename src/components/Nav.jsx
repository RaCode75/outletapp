import '../styles/components.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
    const [visible, setVisible] = useState();

    return(
        <div className='contenedor'>
            <button className= 'hamburguer' onClick={() => setVisible(true) }>nav</button>
          <nav className= {`nav ${visible ? "visible" : ""}`}>
            
            <ul className="ul">
                <li className='close'><button className='close' onClick={() => setVisible(false)}>cerrar</button></li>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/acerca'}>Acerca de</Link></li>
                <li><Link to={'/categoria'}>Categoria</Link></li>
                <li><Link to={'/contacto'}>Contacto</Link></li>
                
            </ul>
        </nav>
    </div>
    );
}

export default Nav;