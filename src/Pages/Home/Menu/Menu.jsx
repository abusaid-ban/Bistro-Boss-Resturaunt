import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category == 'dessert')
    const salad = menu.filter(item => item.category == 'salad')
    const soup = menu.filter(item => item.category =='soup')
    const pizza = menu.filter(item => item.category == 'pizza')
    const offered = menu.filter(item => item.category == 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={'Our Menu'}></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"TOdays offer"}></SectionTitle>
            {/* offered items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert item */}
            {/* <SectionTitle subHeading={} heading={}></SectionTitle> */}
            <MenuCategory items={desserts} title={"dessert"} img={dessertImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            {/* salads */}
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>

          

         
        </div>
    );
};

export default Menu;