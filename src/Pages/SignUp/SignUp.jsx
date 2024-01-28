import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";
import Sociallogin from "../shared/Sociallogin/Sociallogin";


const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        
        createUser(data.email,data.password)
        .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
        .then(() => {
            const saveUser = {name: data.name, email:data.email}
           fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
               'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)

           })
           .then(res => res.json())
           .then(data => {
            if(data.insertedId){
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "New User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

            }})
          
              navigate('/')
          })
          
          .catch((error) => {
            console.log(error);
          });
    })};
    
    return (
      <>
        <Helmet>
                <title>RoadSide Kitchen | SignUp</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6"></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 p-1">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} name="photoURL" placeholder="photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600 p-1">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 p-1">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required : true,
                            minLength:6,
                            maxLength: 20,
                            pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/
                             })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <p className="text-red-600 p-1">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600 p-1">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600 p-1">Password must be one uppercase, one lowercase, one number</p>}
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center pb-3'>Already have an Account? <Link className='text-blue-600' to="/login">Login </Link>here</p>
                    <Sociallogin></Sociallogin>
                </div>
            </div>
        </div>
      </>
    );
};

export default SignUp;