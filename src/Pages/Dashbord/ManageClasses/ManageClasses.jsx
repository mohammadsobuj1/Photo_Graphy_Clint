
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import HeaderSection from '../../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../../Components/Title/Title';
import { useState } from 'react';




const ManageClasses = () => {
const [feedback, setFeedback]=useState('')
    const [axiosSecure] = useAxiosSecure()
    const { data: cless = [], refetch, } = useQuery(['cless'], async () => {
        const res = await axiosSecure.get(`/adminclass`)
        return res.data
    });




    const AproveHandaler = (clas) => {
        fetch(`http://localhost:5000/class/aprove/${clas?._id}`, {
            method: 'PATCH',


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Aproved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }

    const DenayHandaler = (clas) => {
        fetch(`http://localhost:5000/class/deny/${clas?._id}`, {
            method: 'PATCH',


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Class Aproved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    const feedBackHandler = (clas) => {
       


        
    }
    const handleSubmit = e => {
        e.preventDefault()
      
        const feedback = e.target.feedback.value
        setFeedback(feedback)
    }




    return (
        <div className='w-[96%] mx-auto'>
            <HeaderSection header={'manage classes'} subheader={'all classes'} />
            <Title title={'Manage class'} />


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-sm font-semibold border-b-2 bg-violet-400 text-white'>
                            <th>#</th>
                            <th>Image</th>
                            <th> Class Name</th>
                            <th>Instructor name</th>
                            <th>Email</th>
                            <th>seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feed Back</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cless.map((clas, index) => <tr
                                key={clas._id}
                            >
                                <th>{index + 1}</th>

                                <td><div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={clas?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></td>
                                <td className='font-medium font-sans '>{clas?.classname}</td>
                                <td className='font-medium font-sans '>{clas?.instructorname}</td>
                                <td className='font-medium font-sans '>{clas?.email}</td>
                                <td className='font-medium font-sans '>hhh</td>
                                <td className='font-medium font-sans '>$ {clas?.price}</td>
                                <td>

                                    <div className="flex justify-center items-center gap-2">
                                        {
                                            clas.status === 'aprove' ? <p className='badge badge-success font-semibold text-white'>Aproved</p> : <>
                                                <button onClick={() => AproveHandaler(clas)} className="btn btn-xs   border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white">Aprove </button>
                                            </>

                                        }
                                        {
                                            clas.status === 'deny' ? <p className='badge badge-error font-bold text-white'>Deny</p> : <>
                                                <button onClick={() => DenayHandaler(clas)} className="btn btn-xs   border-none bg-gradient-to-r from-red-500 to-red-400 font-sans text-white">Deny </button>
                                            </>

                                        }

                                    </div>

                                </td>

                                <a href="#my_modal_8" className="btn btn-sm   border-none bg-gradient-to-r from-violet-500 mt-8 to-violet-400 font-sans text-white">Feed Back</a>
                                <td>

                                </td>
                                <td>
                                    <>




                                        <div className="modal" id="my_modal_8">
                                            <div className="modal-box  border-4 border-violet-400 bg-gray-400">
                                                <form onSubmit={handleSubmit}>

                                                    <input name='feedback' type="text" placeholder="Type here" className="input  input-bordered  w-full py-10" />

                                                    <div className="modal-action">
                                                        <input type="submit" onClick={() => feedBackHandler(clas)}   className="btn btn-sm   border-none bg-gradient-to-r from-violet-500 mt-8 to-violet-400 w-[50%] font-sans text-white" value="SEND" />

                                                        <a href="#"  className="btn btn-sm   border-none bg-gradient-to-r from-red-500 mt-8 to-red-400 font-sans text-white">Close</a>

                                                    </div>
                                                </form>

                                               

                                            </div>
                                        </div>
                                    </>
                                </td>



                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;