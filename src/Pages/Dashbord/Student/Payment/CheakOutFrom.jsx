import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import './CheacOut.css'

const CheakOutFrom = ({ price, data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [TransactionId, setTransactionId] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                   
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])




    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError('error', error.message)

        }
        else {
            setError('')
            // console.log('payment method', paymentMethod)
        }



        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },

                },
            },
        );

        if (confirmError) {
            setError(confirmError.message);
        }
        console.log('payment intent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                name: data?.name,
                class_id: data.classid,
                className: data?.classname,
                instructorname: data?.instructorname,
                enrolled_student: data?.enrolled_student,
                instractorEmail: data?.instractorEmail


            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {

                        fetch(`http://localhost:5000/selactedclass/${data?._id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {

                                    Swal.fire(
                                        'SUCCESS PAYMENT',
                                        
                                        'Your Payment Success.',
                                        'success',

                                    )
                                }
                            })
                    }
                })
        }


    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-sm font-semibold text-rose-600 my-2'> {error}</p>
            <p className='text-sm font-semibold text-success my-2'> { TransactionId}</p>
            <p>Test Cart :  4242424242424242</p>
            <div className="">
                <button className="btn btn-sm px-7  border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
        </form>
        
        </>
    );
};

export default CheakOutFrom;