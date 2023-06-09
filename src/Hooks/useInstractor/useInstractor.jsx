import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstractor = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstractor, isLoading: isinstractorLoading } = useQuery({
        queryKey: ['isInstractor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instractor/${user?.email}`);

         
            return res.data.instractor;
        }
    })
    return [isInstractor, isinstractorLoading]


};

export default useInstractor;