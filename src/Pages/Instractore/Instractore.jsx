import React, { useContext } from 'react';
import HeaderSection from '../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../Components/Title/Title';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Instractore = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data: instractors = [] } = useQuery({
        queryKey: ['allinstractor', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allinstractor?role=instractor`)
            return res.json();
        },
    })

    console.log(instractors)

    return (
        <div>
            <HeaderSection header={'all instractor'} subheader={'meet our mentors'} />
            <Title title={'Instractors'} />

            <div className="grid md:grid-cols-3 gap-7 w-[96%] mx-auto">

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

export default Instractore;