import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == 'popular')
  
    return (
       <section className="mb-12">
        <SectionTitle
        subHeading={"popular items"}
        heading={"From Our Menu"}>

        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-10 ">
            {
                popular.map(item => <MenuItems 
                    key={item._id}
                    item={item}
                ></MenuItems>)
            }
        </div>
       </section>
    );
};

export default PopularMenu;