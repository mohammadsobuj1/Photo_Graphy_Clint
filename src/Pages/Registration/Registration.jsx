import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";






const Registration = () => {


    const { createUser, googlelogIn, changeName, setReload } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const submitHandelar = (event) => {
        event.preventDefault()
        setError("")
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {

            toast.error(" Password must be More Than 6 Charecter")
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Add Minimum two Uppercase letter")
            return
        }
        if (name.length < 0) {
            setError("plas")
        }

        createUser(email, password)
            .then(result => {



                changeName(result.user, name, photo)
                    .then(() => {

                        const userData = { name, email, photo }

                        fetch(`http://localhost:5000/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    form.reset()
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
     
                const userData = { name: result.user.displayName, email: result.user.email , photo:result.user.photoURL }

                fetch(`http://localhost:5000/users`, {
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

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
                style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/illustration-astronaut-sitting-relaxed_177315-470.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais")` }}
            >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Registration   your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={submitHandelar} className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-white">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="name" required className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 text-orange-600 font-semibold placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-white">Photo Url</label>
                            <div className="mt-2">
                                <input id="photo" name="photo" type="text" required className="block px-2 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-orange-600 font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-white">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 text-orange-600 font-semibold ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-white">Password</label>

                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" required className="block w-full rounded-md px-2 border-0 py-1.5  shadow-sm ring-1 ring-inset text-orange-600 font-semibold ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            </div>
                        </div>
                        <p className='font-semibold  text-red-500 text-center'>{error}</p>

                        <div>
                            <button type="submit" className="flex w-full text-white justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registration</button>
                        </div>
                    </form>


                    <p className='text-center text-white mt-3 font-bold'>---------Or Continue With----------</p>

                    <div className="flex flex-col max-w-sm gap-2 mt-5">


                        <button onClick={googleHandaler} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                                </path>
                            </svg>
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