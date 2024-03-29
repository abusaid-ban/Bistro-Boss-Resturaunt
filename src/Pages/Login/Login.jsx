import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import Sociallogin from '../shared/Sociallogin/Sociallogin';


const Login = () => {
    
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/" ;

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  });
                  navigate(from,{replace: true});
            })
            .catch((error) => {
             
                console.log(error.message);
            });


    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        }
    }
    return (
       <>
        <Helmet>
                <title>RoadSite Kitchen | Login</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6"></p>
                </div>
                <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text"  name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                            {/* <button  className='btn btn-outline mt-2 btn-xs'>Validate</button> */}

                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" disabled={disabled} type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center pb-3'><small>New Here? <Link className='text-blue-600' to="/signup">Create an Account!</Link></small></p>
                    <Sociallogin></Sociallogin>
                </div>
            </div>
        </div>
       </>
    );
};

export default Login;

// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2'

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";

//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, [])

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     title: 'User Login Successful.',
//                     showClass: {
//                         popup: 'animate__animated animate__fadeInDown'
//                     },
//                     hideClass: {
//                         popup: 'animate__animated animate__fadeOutUp'
//                     }
//                 });
//                 navigate(from, { replace: true });
//             })
//     }

//     const handleValidateCaptcha = (e) => {
//         const user_captcha_value = e.target.value;
//         if (validateCaptcha(user_captcha_value)) {
//             setDisabled(false);
//         }
//         else {
//             setDisabled(true)
//         }
//     }

//     return (
//         <>
//             <Helmet>
//                 <title>Bistro Boss | Login</title>
//             </Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col md:flex-row-reverse">
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <LoadCanvasTemplate />
//                                 </label>
//                                 <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

//                             </div>
//                             <div className="form-control mt-6">
//                                 <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
//                             </div>
//                         </form>
//                         <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;