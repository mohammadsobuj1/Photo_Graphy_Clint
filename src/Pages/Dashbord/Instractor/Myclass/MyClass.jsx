import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import HeaderSection from '../../../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../../../Components/Title/Title';
import { Link } from 'react-router-dom';

const MyClass = () => {

    const { user, loader } = useContext(AuthContext)

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axiosSecure(`/class/${user?.email}`)

            return res.data;
        },
    })



    const modal = <>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box  border-4 bg-violet-200 border-violet-400">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4 0">{'jsjs'}</p>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm px-7  border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white">Close</button>
                </div>
            </form>
        </dialog>
    </>





    return (
        <>

            <div className="w-full">  <HeaderSection header={'my  classes'} subheader={'all cless here'} /></div>
            <Title title={'my class'} />
            <div className='mx-5  h-full grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    classes.map(myclass =>

                        <div key={myclass?._id}  className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={myclass?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 lassName="card-title text-violet-500 font-serif" > Cless Name : {myclass?.classname}</h2>

                                <div className="md:flex justify-between items-center">
                                    <div className='text-gray-600 font-mono'>Status:
                                        {
                                            myclass.status === 'aprove' ? <div className="badge badge-success font-mono text-white">{myclass?.status}</div> : <div className="badge badge-error font-mono text-white">{myclass?.status}</div>
                                        }</div>
                                    <div className="font-semibold"> Seats :
                                        {myclass?.seats}
                                    </div>
                                </div>

                                <h2 className=" text-violet-500 font-serif">Email : {myclass?.email} </h2>

                                <div className="md:flex justify-between items-center">
                                    <div className="">
                                        Students:{myclass?.enrolled_student}
                                    </div>
                                    <div className="">
                                        Price:$ {myclass?.price}
                                    </div>
                                </div>

                                <div className="card-actions md:flex justify-between items-center">
                                    {
                                        myclass?.status === 'deny' ? <>
                                            <button className="btn btn-sm   border-none bg-gradient-to-r from-red-500 to-orange-400 font-sans text-white" onClick={() => window.my_modal_5.showModal()}>FEED BACK</button>
                                            {modal}
                                        </> : ""
                                    }

                                    <Link to={`/dashbord/updateclass/${myclass?._id}`}>   <button className="btn btn-sm px-7  border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white">Upadate</button></Link>

                                </div>
                            </div>
                        </div>

                    )
                }

            </div>



        </>
    );
};

export default MyClass;








{/* <div className='mx-5  h-full grid md:grid-cols-2 lg:grid-cols-3 gap-2'>

{

    classes?.map(clas =>
        <div key={clas._id} className="card card-compact  bg-base-100 shadow-xl w-[95%] mx-auto ">

            <figure><img src={clas?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-violet-500 font-serif">Cless Name : <span className='text-gray-600 font-mono'>{clas?.classname}</span></h2>
                <h2 className=" text-violet-500 font-serif">Email : <span className=' font-mono text-black'>{clas?._id}</span></h2>
                {
                    console.log(clas?._id)
                }
                <div className="md:flex justify-between my-3">
                   
                    <div className="text-sm text-gray-600 font-mono font-semibold" >price: ${clas?.price}</div>
                </div>
                <div className=" md:flex justify-between items-center ">
                    <div className="text-sm text-gray-600 font-mono font-semibold" >Students: {clas?.enrolled_student}</div>
                    <div className="text-sm text-gray-600 font-mono font-semibold" >Seats: {clas?.seats}</div>
                </div>

                <div className="card-actions flex justify-between">
                


// <Link to={`/dashbord/updateclass/${clas?._id}`}>Update</Link>

//         </div>
//     </div>

// </div>

//     )
// }

// </div> */}