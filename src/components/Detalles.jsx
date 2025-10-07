const Detalles = ({data}) => {

    const {title, price,image, description, category,type, size} = data;
    console.log(data);
    return (
        <div className="card">
            <h3>{title}</h3>
                <img src={image}></img>
            <p>
                <strong>{price}</strong>
            </p>
            <p className="descripcion">
                {description}
            </p>
            <p>
                {category} / {type} / {size}
            </p>

        </div>

    );
} 

export default Detalles;