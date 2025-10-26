const Card = ({data}) => {

    const {title, price,image,category} = data;

    return (
        <div className="h-[300px] w-[200px] bg-white rounded-3x1 p-3 shadow-md  grid-rows-4 justify-items-center content-between m-1">
            <h3>{title}</h3>
                <img src={image} className="size-20 m-1"></img>
            <p>
                <strong>$ {price}</strong>
            </p>
            <p className="m-1">
                <i>Categoria: </i> {category}
            </p>

        </div>

    );
} 

export default Card;