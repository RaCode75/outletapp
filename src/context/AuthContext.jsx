import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    const login = (nombreUsuario) => {
        const token = `fake-token-${nombreUsuario}`;
        localStorage.setItem('authToken', token);
        setUsuario(nombreUsuario);
    }
    const logout = () => {
        localStorage.removeItem('authToken');
        setUsuario(null);
        navigate('/login')
    };

    return(
        <AuthContext.Provider value={{usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);