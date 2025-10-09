const Card = ({data}) => {
    const {title, price,image, description, category} = data;
    return (
        <div className="card">
            <h3>{title}</h3>
                <img src={image} className="imgdetalles"></img>
            <p>
                <strong>$ {price}</strong>
            </p>
            <button className="comprar">Agregar al carrito</button>

             <p className="cat">
                <i>Categoria: </i> {category}
            </p>
         

        </div>

    );
} 

export default Card;