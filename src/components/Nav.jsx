import '../styles/components.css'
import { useState } from 'react';



const Nav = () => {
    const [visible, setVisible] = useState();

    return(
        <div className='contenedor'>
            <button className= 'hamburguer' onClick={() => setVisible(true) }>nav</button>
          <nav className= {`nav ${visible ? "visible" : ""}`}>
            
            <ul className="ul">
                <li className='close'><button className='close' onClick={() => setVisible(false)}>cerrar</button></li>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Carrito</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default Nav;