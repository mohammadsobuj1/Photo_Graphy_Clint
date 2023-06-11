import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheakOutFrom from './CheakOutFrom';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import HeaderSection from '../../../../Components/AuthProvider/HeaderSection/HeaderSection';
import Title from '../../../../Components/Title/Title';




const stripePromise = loadStripe(import.meta.env.VITE_payment_PK);

const Payment = () => {
    const data = useLoaderData()

    const total = data.price
    const price = parseFloat(total.toFixed(2))
   
    return (
        <div className='w-[80%] mx-auto'>
            <HeaderSection subheader={'give info for pay'} header={'payment now '} />
            <Title title={'Payment'} />

            <Elements stripe={stripePromise}>
                <CheakOutFrom data={data} price={price} ></CheakOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;