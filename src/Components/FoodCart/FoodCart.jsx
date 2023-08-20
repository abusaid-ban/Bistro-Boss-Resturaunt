

const FoodCart = ({item}) => {
    const {name,image,recipe,price} = item;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p>Price: ${price}</p>
                <div className="card-actions">
                  
                    <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;