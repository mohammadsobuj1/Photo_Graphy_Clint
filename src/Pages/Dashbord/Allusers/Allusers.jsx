
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import { FaTrashAlt, FaUserAlt, FaUserShield, FaUsers } from 'react-icons/fa';
import HeaderSection from '../../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../../Components/Title/Title';
import Swal from 'sweetalert2';

const Allusers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch, } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data
    });

    const AdminHandaler = (user) => {

        fetch(`http://localhost:5000/users/admin/${user?._id}`, {
            method: 'PATCH',


        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch();

                }
            })
    }
    const instractorHandaler = (user) => {

        fetch(`http://localhost:5000/users/instractor/${user?._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch();

                }
            })
    }



    const deleteHandaler = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: `bg-violet-200`,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteuser/${user?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }







    return (
        <div className='w-[95%] mx-auto'>
            <HeaderSection header={'Manage Users '} subheader={'All users'} />
            <Title title={'Manage Users'} />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-sm font-semibold border-b-2 bg-violet-400 text-white'>
                            <th>#</th>
                            <th>PHOTO</th>
                            <th>Name</th>
                            <th>Gmail</th>
                            <th>ROLE</th>
                            <th>Action</th>
                            <th>DELETE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className='font-medium font-sans '>{user?.name}</td>
                                <td className='font-medium font-sans '>{user?.email}</td>
                                <td className='font-medium font-sans '> {
                                    user?.role === 'admin' ? <FaUserShield  className='text-4xl text-red-400' /> : ""
                                        || user?.role === 'instractor' ? <FaUserAlt className='text-3xl text-blue-400' /> : <FaUsers className='text-4xl text-violet-400' />
                                } </td>
                                <td >



                                    <div className="flex gap-2 items-center justify-center">

                                        {
                                            user.role === 'admin' ? <div className='font-medium font-sans text-red-400'>ADMIN</div> : <>
                                                <button onClick={() => AdminHandaler(user)} className="btn btn-xs   border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white"> admin</button>
                                            </>

                                        }

                                        {
                                            user.role === 'instractor' ? <div className='font-medium font-sans text-blue-400'>INSTRACTOR</div> : <>
                                                <button onClick={() => instractorHandaler(user)} className="btn btn-xs  border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white"> instractor</button>



                                            </>

                                        }
                                    </div>
                                </td>

                                <td><button onClick={() => deleteHandaler(user)} className="btn btn-circle bg-gradient-to-r from-red-500 to-red-400 "><FaTrashAlt className='text-xl text-white ' /></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default Allusers;