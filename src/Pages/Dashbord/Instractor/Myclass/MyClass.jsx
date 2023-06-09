import React, { useContext} from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClass = () => {
   
    const { user, loading } = useContext(AuthContext)
   
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/class?email=${user?.email}`)
         
            return res.data;
        },
    })

    





    return (
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
               
                classes?.map(clas => 
                    <div key={clas._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={clas?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{clas?.email}</h2>
                            <div className="badge badge-success">{clas?.status}</div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-sm btn-success"> Update</button>
                            </div>
                        </div>
                    </div> 
                    
                    )
            }

        </div>
    );
};

export default MyClass;