import React, { useContext } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import HeaderSection from '../../../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../../../Components/Title/Title';

const MyEnroll = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: myenroll = [], refetch, } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`)
        return res.data
    });



  
    return (
        <div className='w-[90%] mx-auto h-[90%]'>
            <Title title={'My Enroll Class'}/>
            <HeaderSection subheader={'all enroll'} header={'my enrollment classes'} />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-sm font-semibold border-b-2   bg-violet-400 text-white '>

                            <th>#</th>
                            <th>Instructor Name</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Enrolled Student</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myenroll.map((enroll, index) =>
                                <tr key={enroll?._id}>


                                    <td><p className='font-serif'>{index+1}</p></td>
                                    <td><p className='font-serif font-semibold'>{enroll?.instructorname}</p></td>
                                    <td><p className='font-medium font-sans '>{enroll?.className}</p></td>
                                    <td className='font-medium font-sans '>$ {enroll?.price}</td>
                                    <td className='font-medium font-sans '> {enroll?.enrolled_student}</td>
                                    <td className='font-medium font-sans '> {enroll?.date}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnroll;