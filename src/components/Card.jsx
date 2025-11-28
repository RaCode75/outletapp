const Card = ({data}) => {

    /*const {title, price,image,category} = data;*/
    const {nombre, precio ,imagen , descripcion, categoria} = data;

    return (
        <div className="h-[300px] w-[200px] bg-white rounded-3xl p-3 shadow-md shadow-slate-400  grid-rows-4 justify-items-center content-between m-1">
            <h3 className="text-lg font-semibold text-center">{nombre}</h3>
                <img src={imagen}
                 alt={nombre}
                 className="size-20 m-1 object-cover"></img>
            <p>
                <strong>$ {precio}</strong>
            </p>
            <p className="mt-2 mb-1 bg-indigo-100 rounded-2xl">
                <i>Categoria: </i> {categoria}
            </p>
            <p className="overflow-y-auto max-h-20 p-1 fancy-scroll ">
                {descripcion}
                
            </p>

        </div>

    );
} 

export default Card;