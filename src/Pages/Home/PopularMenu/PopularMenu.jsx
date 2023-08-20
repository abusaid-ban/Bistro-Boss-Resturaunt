// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";
const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu,setMenu]  = useState([]);
    //  useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category == 'popular')
    //         setMenu(popularItems);
    //     })
    //  },[])
  
    return (
       <section className="my-12">
        <SectionTitle
        subHeading={"popular items"}
        heading={"From Our Menu"}>

        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-10 w-[95%] mx-auto ">
            {
                popular.map(item => <MenuItems 
                    key={item._id}
                    item={item}
                ></MenuItems>)
            }
        </div>
       <div className="text-center">
       <Link  to='/menu'>
       <button className="btn btn-outline border-orange-400  border-0 border-b-4 mt-4">View Full Menu</button>
       </Link>
       </div>
       </section>
    );
};

export default PopularMenu;