import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';


const Featured = () => {
    return (
        <section className="featured-items bg-fixed text-white pt-12 my-10">
            <SectionTitle subHeading={"check it out"} heading={"Featured Items"}> </SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 gap-10 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 29,2029</p>
                    <h3 className="uppercase">WHERE can i  GET sOME</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio alias molestias facilis dolorem cupiditate fugiat. Molestias ea quos odio distinctio perspiciatis magni, quisquam, impedit quae ducimus cumque provident blanditiis dolore! Officia, quam accusantium. Fugit, tempora commodi corrupti repudiandae non error possimus deserunt animi accusamus odio asperiores itaque iusto delectus!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;