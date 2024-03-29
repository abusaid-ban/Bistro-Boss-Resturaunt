import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart,refetch] = useCart();
    const total = cart.reduce((sum,item)=> item.price + sum , 0);
    const handleDelete = item =>{
        Swal.fire({
            title: "Are you sure?",
           
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`,{
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "1 item deleted from Carts.",
                        icon: "success"
                      });

                }
              })
            }
          });
    }
    return (
        <div>
             <Helmet>
                <title>RoadSite Kitchen | My Cart</title>
            </Helmet>
           <div className="upper-case font-semibold pb-2 flex justify-evenly items-end">
            <h2 className="text-2xl">Total products: {cart.length}</h2>
            <h2 className="text-2xl">Total Price: ${total}</h2>
            <button className="btn btn-warning btn-sm">Pay</button>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>#</th>
        <th>Food</th>
        <th>Item Name </th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
      cart.map((item,index) =><tr
      key={item._id}>
        <td>
         {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
        {item.name}
        </td>
        <td className="text-end">${item.price}</td>
        <td>
          <button onClick={()=>handleDelete(item)} className="text-xl bg-red-500 text-white btn btn-ghost btn-sm"><FaTrashAlt /></button>
        </td>
      </tr>)
      }
      
     
    </tbody>
   
    
  </table>
</div>
            
        </div>
    );
};

export default MyCart;