
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: cless = [], refetch, } = useQuery(['cless'], async () => {
        const res = await axiosSecure.get(`/adminclass`)
        return res.data
    });



    const AproveHandaler = (clas) => {
        fetch(`http://localhost:5000/class/aprove/${clas?._id}`, {
            method: 'PATCH',


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Aproved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }

    const DenayHandaler = (clas) => {
        fetch(`http://localhost:5000/class/deny/${clas?._id}`, {
            method: 'PATCH',


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Class Aproved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
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
                            <th>Image</th>
                            <th> Class Name</th>
                            <th>Instructor name</th>
                            <th>Email</th>
                            <th>seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feed Back</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cless.map((clas, index) => <tr
                                key={clas._id}
                            >
                                <th>{index + 1}</th>

                                <td><div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={clas?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></td>
                                <td>{clas?.classname}</td>
                                <td>{clas?.instructorname}</td>
                                <td>{clas?.email}</td>
                                <td>hhh</td>
                                <td>$ {clas?.price}</td>
                                <td>

                                    {
                                        clas.status === 'aprove' ? <p className='badge badge-success'>Aproved</p> : <>
                                            <button onClick={() => AproveHandaler(clas)} className="btn btn-sm">Aprove </button>
                                        </>

                                    }
                                    {
                                        clas.status === 'deny' ? <p className='badge badge-error'>Deny</p> : <>
                                            <button onClick={() => DenayHandaler(clas)} className="btn btn-sm">Deny </button>
                                        </>

                                    }


                                </td>
                                <td><button className='btn btn-sm'>Feed Back</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;