import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';

const TotalEnroll = () => {

    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/enrollclass?email=${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default TotalEnroll;