import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';





const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { logIn, googlelogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState("")
    const forms = location?.state?.from?.pathname || "/"



    const onSubmit = data => {
        setError("")

        logIn( data.email, data.password)
        .then(result => {

            navigate(forms)
           reset();

        })
        .catch(error => {
            setError(error.message)
        })



    }

 

    const googleHandaler = () => {
        googlelogIn()
            .then(result => {
                const userData = { name: result.user.displayName, email: result.user.email, photo: result.user.photoURL }

                fetch(`https://assainment-sarver.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data =>
                        navigate(forms)
                    )

            })
    }



    return (
        <div className=''>



            <div className="flex min-h-full flex-col bg-opacity-40 justify-center px-6 py-12 lg:px-8 bg-violet-700"
                // style={{ backgroundImage: `url("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZSUyMHBob3RvJTIwZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")` }}
            >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold  tracking-tight  text-white">Log In in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"  >
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-white">Email address</label>
                            <div className="mt-2">
                                <input   {...register("email", { required: true, maxLength: 20 })}  id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-orange-600 font-semibold px-2 shadow-sm ring-1 ring-inset ring-gray-300  text-2xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-white">Password</label>
                                <Link className=' text-sm font-bold  leading-6 text-white '>forget password ?</Link>
                            </div>
                            <div className="mt-2 text-orange-600 font-semibold">
                                <input  {...register("password", { required: true, maxLength: 20 })}  id="password" name="password" type="password" required className="block w-full rounded-md px-2 border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            </div>
                        </div>
                        <p className='font-semibold  text-red-500 text-center'>{error}</p>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className='text-center text-white mt-3 font-bold'>---------Or Continue With----------</p>

                    <div className="flex flex-col max-w-sm gap-2 mt-5">


                        <button onClick={googleHandaler} type="button" className="bg-orange-400 py-2 px-4 flex justify-center items-center hover:bg-orange-500  focus:ring-red-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <FaGoogle className="mr-4 text-xl"/>
                            Sign in with Google
                        </button>



                    </div>



                    <p className=' mt-4 font-semibold text-white text-center'>to registration Click here <Link className=' btn btn-link text-xl font-bold' to="/registration">Registration</Link></p>

                </div>
            </div>
        </div>


    );
};

export default Login;