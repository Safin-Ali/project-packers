import React from 'react'
import { Ameraca, Bkash, Call, CustomerSp, DachBangla, Location, Logo, MasterCard, Nogot, Paypal, Rocket, Visa } from '../Assets'
import Image from './Share/Image'
import SVGIcon from './Share/SVGIcon'

const Info = [
    { id: 1, icon: Call, info: "+880 12656 99958" },
    { id: 2, icon: CustomerSp, info: "Support@projectpackers.com" },
    { id: 3, icon: Location, info: "2118 Thornridge Cir. Syracuse, Connecticut 35624" },
]
const Navigate = [
    { id: 1, info: "Home" },
    { id: 2, info: "About us" },
    { id: 3, info: "My Requests" },
    { id: 4, info: "Contact us" },
    { id: 5, info: "My Requests" },
    { id: 6, info: "Careers" },
]
const Helps = [
    { id: 1, info: "Support Center" },
    { id: 2, info: "How Project packers Works" },
    { id: 3, info: "Shipping & Delivery" },
    { id: 4, info: "Cancellation & Refund" },
    { id: 5, info: "FAQs" },
    { id: 6, info: "Live Chat Support" },
]
const Payments = [
    { id: 1, image: Visa },
    { id: 2, image: MasterCard },
    { id: 3, image: Ameraca },
    { id: 4, image: Bkash },
    { id: 5, image: Rocket },
    { id: 6, image: Nogot },
    { id: 7, image: DachBangla },
    { id: 8, image: Paypal },
]
export default function Footer() {
    return (
        <div className="bg-header pt-12 ">
            <div className="ml-auto mr-auto container grid grid-cols-12 gap-x-11 border-b border-white border-opacity-10 pb-12 ">
                <div className="space-y-8 col-span-3">
                    <div className="flex items-center space-x-3.5">
                        <SVGIcon Icon={Logo} />
                        <p className="text-white font-bold text-base leading-none">Project <br /> packers</p>
                    </div>
                    <div className="space-y-5">
                        {Info.map((data) => (
                            <div key={data.id} className="flex items-center space-x-3 text-white">
                                <SVGIcon Icon={data.icon} />
                                <span className="text-base font-normal">{data.info}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/*  */}
                <div className="col-span-3 space-y-8">
                    <p className="text-[#6BCCCB] font-semibold text-lg">Quick Navigation</p>
                    <div className="space-y-5">
                        {Navigate.map((data) => (
                            <div key={data.id} className="flex items-center space-x-3 text-white">
                                <span className="text-base font-normal">{data.info}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/*  */}
                <div className="col-span-3 space-y-8">
                    <p className="text-[#6BCCCB] font-semibold text-lg">Help</p>
                    <div className="space-y-5">
                        {Helps.map((data) => (
                            <div key={data.id} className="flex items-center space-x-3 text-white">
                                <span className="text-base font-normal">{data.info}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/*  */}
                <div className="col-span-3 space-y-8">
                    <p className="text-[#6BCCCB] font-semibold text-lg">Payment Methods</p>
                    <div className="grid grid-cols-4 gap-2">
                        {Payments.map((data) => (
                            <div key={data.id}>
                                <Image src={data.image} className="w-full h-auto object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className="font-normal text-base text-white opacity-70 ml-auto mr-auto container py-4">© Copyright 2023 Project Packers</p>
        </div>
    )
}
