const Detalles = ({data}) => {

    const {title, price,image, description, category} = data;
    console.log(data);
    return (
        <div className="card">
            <h3>{title}</h3>
                <img src={image} className="imgdetalles"></img>
            <p>
                <strong>$ {price}</strong>
            </p>
            <p className="descripcion">
                {description}
            </p>
            <p className="cat">
                <i>Categoria: </i> {category}
            </p>

        </div>

    );
} 

export default Detalles;