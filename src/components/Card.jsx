const Card = ({data}) => {

    /*const {title, price,image,category} = data;*/
    const {nombre, precio,imagen,categoria} = data;

    return (
        <div className="h-[300px] w-[200px] bg-white rounded-3xl p-3 shadow-md shadow-slate-400  grid-rows-4 justify-items-center content-between m-1">
            <h3 className="text-lg font-semibold">{nombre}</h3>
                <img src={imagen} className="size-20 m-1"></img>
            <p>
                <strong>$ {precio}</strong>
            </p>
            <p className="mt-4">
                <i>Categoria: </i> {categoria}
            </p>

        </div>

    );
} 

export default Card;