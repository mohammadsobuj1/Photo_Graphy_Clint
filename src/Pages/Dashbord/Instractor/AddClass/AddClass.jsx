import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useContext(AuthContext)

    const onSubmit = data => {
        const price = parseFloat(data.price)
        const { classname, instructorname, instructoremail, image, status } = data;
        const addData = { classname, instructorname, email:instructoremail, image, price, status }
        console.log(data)

        axios.post('http://localhost:5000/class', addData)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class has has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                }

            })


    };


    return (
        <>
            <h1 className='text-4xl uppercase font-semibold w-full text-center text-white bg-slate-600 p-3 '>add a class here</h1>
            <div className='w-full h-full pt-10  md:px-32 bg-slate-200'>


                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='grid md:grid-cols-2'>
                        <div className="">
                            <p className=' font-semibold my-2 '>Class Name :</p>
                            <input  {...register("classname", { required: true, maxLength: 20 })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="">
                            <p className=' font-semibold my-2 '>Instructor name  :</p>
                            <input value={user?.displayName
                            }  {...register("instructorname", { required: true, maxLength: 20 })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="">
                            <p className=' font-semibold my-2 '>Instructor email :</p>
                            <input value={user?.email}  {...register("instructoremail", { required: true, })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="">
                            <p className=' font-semibold my-2 '>Class Image :</p>
                            <input  {...register("image", { required: true, })} type="text" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>

                        <div className="">
                            <p className=' font-semibold my-2 '>Price :</p>
                            <input {...register("price", { required: true, maxLength: 20 })} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="">
                            <p className=' font-semibold my-2 '>Status :</p>
                            <input {...register("status", { required: true, maxLength: 20 })} type="text" placeholder="Type here" value={'Peinding'} className="input input-bordered w-full max-w-xs" />
                        </div>

                    </div>
                    <div className="text-center mt-10">
                        <input className='btn btn-neutral mr-10' type="submit" value="ADD CLASS" />
                    </div>
                </form>

            </div>
        </>
    );
};

export default AddClass;