import GestionProductos from "../components/GestionProductos";

const Admin = () => {
    return(
        <div>
            <h1 className="text-center py-2 font-bold text-indigo-50 text-3xl bg-indigo-300">Gestión de Productos</h1>
            <GestionProductos />
        </div>
    );
}

export default Admin;