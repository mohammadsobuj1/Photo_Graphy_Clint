import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';

const TotalEnroll = () => {

    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://assainment-sarver.vercel.app/enrollclass?email=${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default TotalEnroll;