const Card = ({data}) => {

    const {title, price,image,category} = data;

    return (
        <div className="card">
            <h3>{title}</h3>
                <img src={image} className="imgCard"></img>
            <p>
                <strong>$ {price}</strong>
            </p>

            <p className="cat">
                <i>Categoria: </i> {category}
            </p>

        </div>

    );
} 

export default Card;