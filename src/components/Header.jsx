import { useContext } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { CarritoContext } from '../context/CarritoContext';
import Nav from './Nav'
import {Link} from 'react-router-dom';


const Header = () => {
    const {carrito} = useContext(CarritoContext);
    const {usuario, logout} = useAuthContext();
    const isLogin = !!usuario;
    const contadorCarrito = carrito.length;

    return(
        <header  className="flex items-center justify-between bg-indigo-500">
            <div className='text-center my-1 mx-1'>
                <img src='../src/assets/logo.png' className='h-20 w-20 mr-2 ml-2'></img>
                <h2 className='text-lg font-medium text-gray-300 '>Outlet App</h2>
            </div>
            <div className='px-0 mx-0'>
                <Nav /> 
            </div>
            <div className='text-center mr-2 bg-indigo-500 ml-0'>
                      {contadorCarrito > 0 && (
                        <span className=' absolute bg-amber-300 w-5 rounded-full'>
                            {contadorCarrito}
                        </span>
                    )}
                <div className='bg-amber-50 w-12 rounded-full my-1 mx-auto'>
                    {isLogin?
                    <Link to={'/carrito'}><img src='../src/assets/cart.svg' className='size-12'></img>
                 
                    </Link>
                    :
                    <Link to={'/login'}><img src='../src/assets/cart.svg' className='size-12'></img>

                    </Link>
                    }
                 
                    </div>

                {isLogin ? 
                    <button onClick={logout} 
                    className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500
                    hover:bg-gray-200 w-100vw text-center content-center px-2 rounded hover:text-gray-600 mx-6'>Logout</button>
                    :
                    <button className='text-indigo-50 font-medium text-lg py-0.5 bg-indigo-500  hover:bg-gray-200 w-100vw text-center content-center px-2 rounded hover:text-gray-600 mx-6'>
                        <Link to={'/login'}>Login</Link></button>   
                }
                
            </div>
    </header>
    );
}
export default Header;