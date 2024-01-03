import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";


const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=> item.price + sum , 0)
    return (
        <div>
             <Helmet>
                <title>RoadSite Kitchen | My Cart</title>
            </Helmet>
           <div>
            <h2 className="text-3xl">Total products: {cart.length}</h2>
            <h2 className="text-3xl">Total Price: {total}</h2>
            <h2 className="text-3xl">Total products: {cart.length}</h2>
            <h2 className="text-3xl">Total Price: {total}</h2>
           </div>
            
        </div>
    );
};

export default MyCart;