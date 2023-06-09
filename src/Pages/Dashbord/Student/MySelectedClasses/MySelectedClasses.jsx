import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const MySelectedClasses = () => {

    const { user } = useContext(AuthContext)
 
    useEffect(()=>{
        fetch(`http://localhost:5000/selactedclass?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))

    },[])

    // const { refetch, data: cartClass = [] } = useQuery({
    //     queryKey: ['selactedclass', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/selactedclass?email=${user?.email}`)
    //         return res.json();
    //     },
    // })


    // console.log(cartClass)

    return (
        <div>
            my classes
        </div>
    );
};

export default MySelectedClasses;