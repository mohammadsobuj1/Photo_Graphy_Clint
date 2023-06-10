import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Classes = () => {

    // const [classes, setClasses] = useState()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const loaction = useLocation()

    // useEffect(() => {
    //     fetch(`http://localhost:5000/class?status=aprove`)
    //         .then(res => res.json())
    //         .then(data => setClasses(data))

    // }, [])

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/class?status=aprove`)
            return res.json();
        },
    })

    console.log(classes)



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
        <div>
            {
                classes?.map(classe =>
                    <div key={classe._id}
                        className={`card w-96 bg-base-100 shadow-xl${classe?.seats == 0 ? 'bg-red-300' : console.log('by')}  `}>
                        <figure><img src={classe?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {classe?.instructorname}

                            </h2>
                            <p>{classe?.seats}</p>
                            <p>{classe?.price}</p>

                            <div className="card-actions justify-end">
                                <div onClick={() => SeclactHandelar(classe)} className="btn btn-outline">Selact</div>

                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Classes;