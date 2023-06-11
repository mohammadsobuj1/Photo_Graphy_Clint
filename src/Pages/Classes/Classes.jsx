import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderSection from '../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../Components/Title/Title';

const Classes = () => {

    // const [classes, setClasses] = useState()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const loaction = useLocation()

   

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/class?status=aprove`)
            return res.json();
        },
    })





    const SeclactHandelar = (classe) => {



        if (user) {
            const { _id, classname, email, enrolled_student, image, instructorname, price, status } = classe;
            const selactdata = { classid: _id, classname, email: user.email, instractorEmail: email, enrolled_student, image, instructorname, price, status }

            fetch(`http://localhost:5000/selactedclass`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selactdata)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })

        }

        else {


            Swal.fire({
                title: 'Log in first',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: ' Log In '
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: loaction } })
                }
            })
        }

    }



   

    return (
        <div className='bg-gray-200 '>
            <HeaderSection header={'ALL APROVED CLASSES'} subheader={'Enroll now'} />
            <Title title={'Classes'} />

            <div className="grid md:grid-cols-3 gap-7 w-[96%] mx-auto">

                {
                    classes?.map(classe =>

                        <div key={classe._id}
                            className={`card w-[96%]  shadow-xl ${classe.seats <= 0 ? 'bg-red-300  ' : "bg-violet-200 "}   `}>
                            <figure><img src={classe?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title my-2" >
                                    Instructor Name : {classe?.instructorname}

                                </h2>
                                <p className='font-semibold font-mono my-'>Class Name :  {classe?.classname}</p>
                                <div className="md:flex justify-between ">
                                    <p className='font-semibold font-mono'>seats : {classe?.seats}</p>
                                    <p className='font-semibold font-mono'>Price :$ {classe?.price}</p>

                                </div>

                                <div className=" md:flex justify-evenly ">
                                    
                                    <p className='font-semibold font-mono'>Students :{classe?.enrolled_student}</p>

                                </div>

                                <div className="card-actions justify-center">
                                    {classe.seats <= 0 ? <>
                                        <p className='badge badge-error text-xs font-semibold text-white font-mono'>SEATS full can't selact </p>
                                    </> :
                                        <button className="btn btn-sm px-10 border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white" onClick={() => SeclactHandelar(classe)} >Selact</button >
                                    }


                                </div>
                            </div>
                        </div>




                    )
                }
            </div>
        </div>
    );
};

export default Classes;