import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side  bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">
                <h2 className="text-3xl font-bold text-blue-700">RoadSite Kitchen</h2>
                <h2 className="text-center mr-3">Restaurant</h2>

                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;