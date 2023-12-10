import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover/Cover";
import MenuItems from "../../MenuItems/MenuItems";


const MenuCategory = ({ items, title, img }) => {
    return (

        <div className="w-[95%] mx-auto">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16 mb-4 ">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 border-orange-400 mb-12">Order Your Favorite Dish</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;