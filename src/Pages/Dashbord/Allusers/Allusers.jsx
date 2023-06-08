
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const Allusers = () => {
  
    const [role, setRole] = useState('student')


    const { data: users = [], refetch, } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:5000/users`)
        return res.json();
    });

    const AdminHandaler = (user) => {

        fetch(`http://localhost:5000/users/${role}/${user?._id}`, {
            method: 'PATCH',


        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch();
                  
                }
            })
    }

    console.log(role)
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
                                            <button onClick={() => AdminHandaler(user, setRole('admin'))} className="btn btn-sm"> admin</button>
                                        </>

                                    } <>
                                        {
                                            user.role === 'Instractor' ? 'instractor' : <>
                                                


                                                <input type="submit"   onClick={() => AdminHandaler(user, setRole('instractor'))}  className={`btn btn-sm `} value="Instractor" />
                                            </>



                                        }

                                    </>
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