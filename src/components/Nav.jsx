import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useAuthContext } from '../context/AuthContext';
import menuHam from '../assets/menu.png';
import x from '../assets/x.png';



const Nav = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    const {usuario} = useAuthContext();
    const esAdmin = usuario === 'admin';

    return(
        <div className={menu?'transition-[height] ease-in-out delay-150 h-[100vh] py-4 bg-indigo-500'
            :'transition-[height] ease-in-out delay-150 h-60px py-4  bg-indigo-500'
            }>
            <section className='mx-auto sm:flex-row'>
                <div className='flex justify-between items-center'>                    
                    <div className= 'h-10 w-10 text-gray-700 z-10 sm:hidden' onClick={handleMenu}>
                        {menu?<img src={x} alt='menu' /> : 
                        <img src={menuHam} alt='menu' />}
                    </div>
                
            
            <ul className={menu?'flex flex-col items-center h-full absolute top-6 pt-20 bottom-0 left-0 right-0 gap-2'
                    :'hidden sm:flex  sm:flex-row sm:h-60px sm:top-0 items-center justify-center mt-6'}>
                <li><button className='text-indigo-50 font-medium text-lg py-0.5 px-auto bg-indigo-500  hover:bg-gray-200   rounded hover:text-gray-600 mx-6'><Link to={'/'}>Inicio</Link></button></li>
                <li><button className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500  hover:bg-gray-200  content-center rounded hover:text-gray-600 mx-6'><Link to={'/categoria'}>Categoria</Link></button></li>
                <li><button className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500  hover:bg-gray-200  text-center content-center px-2 rounded hover:text-gray-600 mx-6'><Link to={'/contacto'}>Contacto</Link></button></li>
                    

                    {esAdmin &&
                <li><button className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500  hover:bg-gray-200 text-center content-center px-2 rounded hover:text-gray-600 mx-6'>
                    <Link to={'/admin'}>Admin</Link></button></li>
                    }
                <li className=' '></li>
                
            </ul>
            </div>
        </section>
    </div>

    );
}

export default Nav;
