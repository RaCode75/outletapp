import { useAuthContext } from '../context/AuthContext';
import Nav from './Nav'
import {Link} from 'react-router-dom';

const Header = () => {
    const {usuario, logout} = useAuthContext();
    const isLogin = !!usuario;

    return(
        <header  className="flex items-center justify-between bg-indigo-500 ">
            <div className='text-center mx-3 my-1'>
                <img src='../src/assets/logo.png' className='h-20 w-20 mr-2 ml-2'></img>
                <h2 className='text-lg font-medium text-gray-300 '>Outlet App</h2>
            </div>
            <div>
                <Nav /> 
            </div>
            <div className='text-center mr-2 bg-indigo-500'>
                <div className='bg-amber-50 w-12 rounded-full my-1 mx-auto'>
                    <Link to={'/carrito'}><img src='../src/assets/cart.svg' className='size-12'></img>
                    </Link></div>

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