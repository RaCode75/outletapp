import { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
        console.log("click")
    }

    return(
        <div className={menu?'transition-[height] ease-in-out delay-150 h-[100vh] px-6 py-4 bg-indigo-500'
            :'transition-[height] ease-in-out delay-150 h-60px px-4 py-4  bg-indigo-500'
            }>
            <section className='container mx-auto sm:flex-row'>
                <div className='flex justify-between items-center'>
                    <div className='text-center mr-2'>
                        <img src='../src/assets/logo.png' className='h-20 w-20 mr-2 ml-2'></img>
                        <h2 className='text-lg font-medium text-gray-300 '>Outlet App</h2>
                    </div>
                    <div className= 'h-10 w-10 text-gray-700 z-10 sm:hidden' onClick={handleMenu}>
                        {menu?<img src='../src/assets/x.png' alt='menu' /> : 
                        <img src='../src/assets/menu.png' alt='menu' />}
                    </div>
                
            
            <ul className={menu?'flex flex-col justify-center items-center h-full absolute top-6 bottom-0 left-0 right-0'
                    :'hidden sm:flex  sm:flex-row sm:h-60px sm:top-0 sm:justify-end sm:items-center sm:gap-10'}>
                <li><button className='text-indigo-50 font-medium text-lg py-0.5 px-auto bg-indigo-500  hover:bg-gray-200 w-100vw  rounded hover:text-gray-600 mx-6'><Link to={'/'}>Inicio</Link></button></li>
                <li><button className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500  hover:bg-gray-200 w-100vw content-center rounded hover:text-gray-600 mx-6'><Link to={'/acerca'}>Acerca de</Link></button></li>
                <li><button className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500  hover:bg-gray-200 w-100vw content-center rounded hover:text-gray-600 mx-6'><Link to={'/categoria'}>Categoria</Link></button></li>
                <li><button className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500  hover:bg-gray-200 w-100vw text-center content-center px-2 rounded hover:text-gray-600 mx-6'><Link to={'/contacto'}>Contacto</Link></button></li>
                <li className=' '><div className='bg-amber-50 w-12 rounded-full my-1'><Link to={'/carrito'}><img src='../src/assets/cart.svg' className='size-12'></img></Link></div></li>
                
            </ul>
            </div>
        </section>
    </div>

    );
}

export default Nav;
