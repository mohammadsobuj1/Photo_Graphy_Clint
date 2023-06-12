import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Classes from '../../../Classes/Classes';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';
import HeaderSection from '../../../../Components/AuthProvider/HeaderSection/HeaderSection';
import { FaTrashAlt } from 'react-icons/fa';
import Title from '../../../../Components/Title/Title';


const MySelectedClasses = () => {

    const { user } = useContext(AuthContext)


    const { refetch, data: cartClasses = [] } = useQuery({
        queryKey: ['selactedclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assainment-sarver.vercel.app/selactedclass?email=${user?.email}`)
            return res.json();
        },
    })

    const deleteHandaler = (cartClass) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assainment-sarver.vercel.app/selactedclass/${cartClass?._id}`, {
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
        <div className='md:w-[90%] mx-auto md:h-full'>
            <Title title={'Selact Classes'}/>
            <HeaderSection subheader={'booking first'} header={'my seclacted classes'} />
            <div className="md:overflow-x-auto">
                <table className="md:table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-sm font-semibold border-b-4 border-white bg-violet-400 text-white'>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Enrolled_student</th>
                            <th>Price</th>
                           
                            <th>PAYMENT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            cartClasses.map((cartClass, index) => <tr key={cartClass._id}>
                                <td><p className='font-serif'>{index + 1}</p></td>
                                <td><p className='font-serif font-semibold'>{cartClass?.classname}</p></td>
                                
                                <td><p className='font-medium font-sans '>{cartClass?.instructorname}</p></td>
                                <td><p className='font-medium font-sans '>{cartClass?.enrolled_student}</p></td>
                                
                                <td className='font-medium font-sans '>$ {cartClass?.price}</td>
                         

                                <td><Link to={`/dashbord/payment/${cartClass?._id}`}><button className="btn btn-sm   border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white">PAYMENT</button></Link></td>
                                <td><button onClick={() => deleteHandaler(cartClass)} className="btn btn-circle bg-gradient-to-r from-red-500 to-red-400 "><FaTrashAlt className='text-xl text-white ' /></button></td>






                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MySelectedClasses;