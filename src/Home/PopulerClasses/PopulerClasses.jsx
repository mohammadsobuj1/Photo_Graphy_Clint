import { useQuery } from '@tanstack/react-query';
import React from 'react';
import HeaderSection from '../../Components/AuthProvider/HeaderSection/HeaderSection';
import { Link } from 'react-router-dom';

const PopulerClasses = () => {

    const { refetch, data: topClass = [] } = useQuery({
        queryKey: ['enrollsort'],
        queryFn: async () => {
            const res = await fetch(`https://assainment-sarver.vercel.app/enrollsort`)
            return res.json();
        },
    })

    const populerClasses = topClass

    return (
        <div>
            <HeaderSection header={'populer class '} />

            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 w-[90%] mx-auto ">

                {

                    populerClasses.map(populer =>
                        <div key={populer?._id} className="card  bg-base-100 shadow-xl">
                            <figure><img src={populer?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name : {populer?.classname}</h2>

                                <div className="md:flex justify-between items-center">
                                    <div className="">
                                        Students:{populer?.enrolled_student}
                                    </div>
                                    <div className="">
                                        Price:$ {populer?.price}
                                    </div>
                                </div>
                                <div className="md:flex justify-between items-center">

                                    <div className="font-semibold"> Seats :
                                        {populer?.seats}
                                    </div>
                                </div>

                                <div className="card-actions justify-end">
                                    <Link to='/classes'>
                                    <button className="btn btn-sm px-7  border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white">Enroll Now</button>
                                    </Link>
                                 
                                </div>
                            </div>
                        </div>)


                }
            </div>





        </div>
    );
};

export default PopulerClasses;