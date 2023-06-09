
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';

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


    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
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
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td>




                                    {
                                        user.role === 'admin' ? 'Admin' : <>
                                            <button onClick={() => AdminHandaler(user)} className="btn btn-sm"> admin</button>
                                        </>

                                    }

                                    {
                                        user.role === 'instractor' ? 'instractor' : <>
                                            <button onClick={() => instractorHandaler(user)} className="btn btn-sm"> instractor</button>
                                        </>

                                    }
                                </td>

                                <td>
                                    <button className='btn btn-sm btn-neutral'>d</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default Allusers;