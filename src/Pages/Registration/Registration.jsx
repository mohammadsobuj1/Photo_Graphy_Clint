import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";






const Registration = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, googlelogIn, changeName, setReload } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')


    const onSubmit = data => {
        console.log(data)
        const { name, email, photo, password } = data ;
        createUser(email, password)
            .then(result => {



                changeName(result.user, name, photo)
                    .then(() => {

                        const userData = { name, email, photo }

                        fetch(`https://assainment-sarver.vercel.app/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    navigate('/')

                                }

                            })

                        setReload(new Date().getTime())
                    })
                    .catch(error => {
                        setError(error.message)
                    })

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
                    .then(() =>

                        navigate('/')

                    )
            })
    }




    return (
        <div>

            <div className="flex min-h-full flex-col justify-center bg-opacity-40 bg-violet-700 px-6 py-12 lg:px-8"
            // style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/illustration-astronaut-sitting-relaxed_177315-470.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais")` }}
            >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Registration   your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-white">Name</label>
                            <div className="mt-2">
                                <input  {...register("name", { required: true, maxLength: 20 })} id="name" name="name" type="name" required className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 text-orange-600 font-semibold placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-white">Photo Url</label>
                            <div className="mt-2">
                                <input  {...register("photo", { required: true, maxLength: 500})} id="photo" name="photo" type="url" required className="block px-2 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-orange-600 font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-white">Email address</label>
                            <div className="mt-2">
                                <input  {...register("email", { required: true, maxLength: 20 })} id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 text-orange-600 font-semibold ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-white">Password</label>

                            </div>
                            <div className="mt-2">
                                <input  {...register("password", { required: true, minLength:6, maxLength: 20 ,  })} id="password" name="password" type="password" required className="block w-full rounded-md px-2 border-0 py-1.5  shadow-sm ring-1 ring-inset text-orange-600 font-semibold ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            </div>
                        </div>
                        <p className='font-semibold  text-red-500 text-center'>{error}</p>

                        <div>
                            <button type="submit" className="flex w-full text-white justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registration</button>
                        </div>
                    </form>
                    {/* pattern:!/(?=.*[A-Z].*[A-Z])/ */}

                    <p className='text-center text-white mt-3 font-bold'>---------Or Continue With----------</p>

                    <div className="flex flex-col max-w-sm gap-2 mt-5">


                        <button onClick={googleHandaler} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">

                            <FaGoogle className="mr-4 text-xl" />
                            Sign in with Google
                        </button>

                    </div>


                    <p className=' mt-4 font-semibold text-white text-center'>to log in Click Here<Link className=' btn btn-link  text-xl font-bold' to="/login">Log In</Link></p>

                </div>
            </div>

        </div>
    );
};

export default Registration;