import { useContext } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { CarritoContext } from '../context/CarritoContext';
import Nav from './Nav'
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'
import cart from '../assets/cart.svg'


const Header = () => {
    const {carrito} = useContext(CarritoContext);
    const {usuario, logout} = useAuthContext();
    const isLogin = !!usuario;
    const contadorCarrito = carrito.length;

    return(
        <header  className="flex flex-row pt-4 sm:pt-0  sm:items-start justify-around bg-indigo-500">
            <div className='items-start text-center my-1 mx-1'>
                <img src= {logo} className='h-15 w-15 mr-2 ml-2 md:h-20 md:w-20'></img>
                <h2 className='text-lg font-medium text-gray-300 '>Outlet App</h2>
            </div>
            <div className='px-0 mx-0'>
                <Nav /> 
            </div>
            <div className='bg-indigo-500 mt-3'>
                      {contadorCarrito > 0 && (
                        <span className=' absolute bg-amber-300 w-5 rounded-full'>
                            {contadorCarrito}
                        </span>
                    )}
                <div className='bg-amber-50 w-12 rounded-full my-1 mx-auto'>
                    {isLogin?
                    <Link to={'/carrito'}><img src={cart} className='size-12'></img>
                 
                    </Link>
                    :
                    <Link to={'/login'}><img src={cart} className='size-12'></img>

                    </Link>
                    }
                 
                    </div>

                {isLogin ? 
                    <button onClick={logout} 
                    className='text-indigo-50 font-medium text-lg mr-6 md:mx-auto py-0.5 bg-indigo-500
                    hover:bg-gray-200 w-100vw content-center px-2 rounded hover:text-gray-600'>Logout</button>
                    :
                    <button className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500  hover:bg-gray-200 w-100vw text-center content-center px-2 rounded hover:text-gray-600 mx-6'>
                        <Link to={'/login'}>Login</Link></button>   
                }
                
            </div>
    </header>
    );
}
export default Header;