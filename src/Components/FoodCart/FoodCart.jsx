
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCart = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [ , refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const orderItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();

                        Swal.fire({
                            position: 'center-end',
                            title: "Food Added on Cart!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });

                    }

                })


        }
        else {
            Swal.fire({
                title: "Please login for order food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

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

                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;