import img from "../../../assets/home/chef-service.jpg"

const ChefService = () => {
    return (
        <div className="my-24">
        <img className="absolute max-w-full" src={img} alt="" />
       <div className=" relative  -bottom-6 md:-bottom-32   text-center  bg-white w-[65%] mx-auto">
       <h3 className="md:text-4xl md:pt-5">Bistro Boss</h3>
        <h5 className="md:text-md lg:text-xl text-xs md:mx-32 px-5 md:pb-10 "> Elevating dining to an art form. Discover a symphony of flavors in every dish, meticulously prepared to captivate your senses. Immerse yourself in a culinary journey that defines excellence in taste and ambiance!</h5>
       </div>
            
        </div>
    );
};

export default ChefService;