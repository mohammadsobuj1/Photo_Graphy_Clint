import React, { useContext } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import HeaderSection from '../../../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../../../Components/Title/Title';

const PaymentHistorey = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: mypayment = [], refetch, } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`)
        return res.data
    });


    

    const totalPrice = mypayment.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
    );

    return (
        <div className='w-[%] mx-auto h-full '>
            <Title title={'Payment Historey'} />
            <HeaderSection subheader={'happy payment'} header={'payment history'} />
            <div className="flex justify-between">
                <h1 className='text-xl font-sans text-gray-600 font-semibold'>Total Clasess : {mypayment?.length}</h1>
                <h1 className='text-xl font-sans text-gray-600 font-semibold'>Total Price : $ {totalPrice}</h1>
            </div>

            <div className="overflow-x-auto mt-8">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-sm font-semibold bg-violet-400 text-white border-b-2 border-fuchsia-600 '>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Payment Date</th>
                            <th>Transaction Id</th>


                        </tr>
                    </thead>
                    <tbody>
                        {

                            mypayment.map((payment, index) => <tr key={payment._id}>
                                <td><p className='font-serif'>{index + 1}</p></td>
                                <td><p className='font-serif font-semibold'>{payment?.className}</p></td>

                                <td><p className='font-medium font-sans '>{payment?.email}</p></td>

                                <td className='font-medium font-sans '>$ {payment?.price}</td>
                                
                                <td className='font-medium font-sans '> {payment?.date}</td>
                                <td className='font-medium font-sans '> {payment?.transactionId}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default PaymentHistorey;