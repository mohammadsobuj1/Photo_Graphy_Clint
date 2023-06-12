import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import HeaderSection from '../../../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../../../Components/Title/Title';



const image_hostin_token = import.meta.env.VITE_image_token

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hostin_token}`

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useContext(AuthContext)

    const onSubmit = data => {
        const enrolled_student = 0
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    // const newItem = { name, category, recipe,  }
                    const { classname, instructorname, price, seats, instructoremail, status } = data;
                    const addData = { classname, instructorname, seats: parseFloat(seats), email: instructoremail, enrolled_student, image: imgURL, price: parseFloat(price), status }

                    axiosSecure.post('/class', addData)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })









      

    };


    return (
        <>

            <div className='w-full h-full pt-10  md:px-32 bg-slate-200'>

                <HeaderSection header={'Add a class here'} />
                <Title title={'Add Class'} />
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='grid md:grid-cols-2 gap-5  md:ml-0 ml-44'>
                        <div className="">
                            <p className=' font-semibold my-2 '>Class Name :</p>
                            <input  {...register("classname", { required: true, maxLength: 20 })} type="text" placeholder="Type here" className="input input-bordered  text-white w-full max-w-xs" />
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
                            <input  {...register("image", { required: true, })} type="file" className="file-input  file-input-bordered w-full max-w-xs" />
                        </div>

                        <div className="">
                            <p className=' font-semibold my-2 '>Price :</p>
                            <input {...register("price", { required: true, maxLength: 20 })} type="number" placeholder="$" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="">
                            <p className=' font-semibold my-2 '>Available Seats :</p>
                            <input {...register("seats", { required: true, maxLength: 20 })} type="number" placeholder="Seats" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="">
                            <p className=' font-semibold my-2 '>Status :</p>
                            <input {...register("status", { required: true, maxLength: 20 })} type="text" placeholder="Type here" value={'Peinding'} className="input input-bordered w-full max-w-xs" />
                        </div>

                    </div>
                    <div className="text-center mt-10">
                        <input className="btn btn-outline   border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white" type="submit" value="ADD CLASS" />
                    </div>
                </form>

            </div>
        </>
    );
};

export default AddClass;