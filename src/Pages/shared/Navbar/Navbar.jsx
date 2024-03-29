import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProviders";
import logo from "../../../assets/icon/logo.png";
import {  FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }
    const navOptions = <>

        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/dashboard'>DashBoard</Link></li> */}
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/dashboard/mycart'>
            <button className="btn text-yellow-400">
                <FaShoppingCart className="h-6 w-6"></FaShoppingCart>
                <div className="badge badge-secondary  text-yellow-300">+{cart?.length || 0 }</div>
            </button>
            </Link>
        </li>

        {
            user ?
                <>
                <h2>{user?.displayName}</h2>

                    <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                </> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }

    </>
    return (
        <div className="navbar max-w-full text-white fixed z-10 bg-opacity-50 bg-black ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="text-white bg-rose-600">
                            {navOptions}
                        </div>
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-16 h-16" src={logo} alt="" />
                    <Link to="/" className="btn btn-ghost normal-case text-xl text-yellow-300">RoadSide Kitchen</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-yellow-400">
                    {navOptions}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;