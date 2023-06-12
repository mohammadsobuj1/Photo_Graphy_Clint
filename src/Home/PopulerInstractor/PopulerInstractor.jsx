
import React, { useContext } from 'react';
import HeaderSection from '../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../Components/Title/Title';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const PopulerInstractor = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data: instractors = [] } = useQuery({
        queryKey: ['allinstractor', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assainment-sarver.vercel.app/allinstractor?role=instractor`)
            return res.json();
        },
    })

    return (
        <div className='my-10'>
            <HeaderSection header={'populer instractor'} subheader={'meet our mentors'} />
           

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 w-[96%] mx-auto">

                {
                    instractors?.map(instractor =>

                        <div key={instractor._id}
                            className={`card w-[96%]  shadow-xl `}>
                            <figure><img src={instractor
                                ?.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title my-2" >
                                    Instructor Name :  {instractor?.name}

                                </h2>


                                <div className=" md:flex justify-evenly ">

                                    <p className='font-semibold font-mono'>Email :  {instractor?.email}</p>

                                </div>


                            </div>
                        </div>




                    )
                }
            </div>


        </div>
    );
};

export default PopulerInstractor;