import React from 'react';
import { Cancel, DeliveryBx2 } from '../../Assets';
import { useGlobalCtx } from '../../Contexts/GlobalProvider';
import Btn from '../Share/Btn';
import SVGIcon from '../Share/SVGIcon';
import styles from './paymentMd.module.css';
import { useSearchParams } from 'react-router-dom';

export default function PaymentMd() {
    const { toggleModal } = useGlobalCtx();
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");

    const getDate = (dayIncrement) => {
        if (!dayIncrement) return new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
        return new Date(new Date().getTime() + (dayIncrement * 86400000)).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className={styles.modal}>
            <div className="w-[25.813rem] shadow-md bg-white rounded-xl p-9 space-y-12">
                <div className="flex justify-end mb-6">
                    <SVGIcon Icon={Cancel} onClick={toggleModal} />
                </div>
                <SVGIcon Icon={DeliveryBx2} className="w-20 h-20" />
                <div className="text-textColor">
                    <h1 className="text-xl font-semibold">Thanks your for your order.</h1>
                    <div className="text-sm mt-2">
                        <p className="opacity-50 text-black">we sent an order confirmation to:</p>
                        <span className="font-medium  ">{email || 'demo@gmail.com'}</span>
                    </div>
                    <div className="text-sm mt-4">
                        <p className="opacity-50 text-black">Your order will deliver on:</p>
                        <span className="font-medium  ">{getDate()} - {getDate(7)}</span>
                    </div>
                    <div className="text-sm mt-4">
                        <p className="opacity-50 text-black">to the address:</p>
                        <span className="font-medium  ">3829 Main St. Los Angeles. CA 90210</span>
                    </div>
                </div>
                <Btn onClick={toggleModal}>Keep Shopping</Btn>
            </div>
        </div>
    )
}
