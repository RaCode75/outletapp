import GestionProductos from "../components/GestionProductos";

const Admin = () => {
    return(
        <div className="bg-slate-100">
            <h1 className="text-center py-2 font-bold text-slate-50 text-3xl bg-slate-400">Gestión de Productos</h1>
            <GestionProductos />
        </div>
    );
}

export default Admin;