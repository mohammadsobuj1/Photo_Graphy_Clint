import React from 'react';
import { useForm } from 'react-hook-form';
import Title from '../../../../Components/Title/Title';
import HeaderSection from '../../../../Components/AuthProvider/HeaderSection/HeaderSection';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const image_hostin_token = import.meta.env.VITE_image_token
const Update = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hostin_token}`

const update = useLoaderData()


    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;


                    const { classname, price, seats } = data;
                    const addData = { classname, seats: parseFloat(seats), image: imgURL, price: parseFloat(price), }

                    fetch(`http://localhost:5000/update/${update?._id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(addData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)

                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Your Class has been Updated',
                                    showConfirmButton: false,
                                    timer: 1500

                                })
                            }
                            reset();


                        })


                }
            })


    }
    return (
        <div>
            <Title title={'Upadate Class'} />
            <HeaderSection header={'Update Your Class'} subheader={'update is here'} />

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='grid md:grid-cols-2'>
                    <div className="">
                        <p className=' font-semibold my-2 '>Class Name :</p>
                        <input  {...register("classname", { required: true, maxLength: 20 })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs " />
                    </div>



                    <div className=" md:space-x-5">
                        <p className=' font-semibold my-2 '>Class Image :</p>
                        <input  {...register("image", { required: true, })} type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs " />

                    </div>

                    <div className="">
                        <p className=' font-semibold my-2 '>Price :</p>
                        <input {...register("price", { required: true, maxLength: 20 })} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="">
                        <p className=' font-semibold my-2 '>Available Seats :</p>
                        <input {...register("seats", { required: true, maxLength: 20 })} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>


                </div>
                <div className="text-center mt-10">
                    <input className="btn btn-block  border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white" type="submit" value="UPADTE" />
                </div>
            </form>
        </div>
    );
};

export default Update;