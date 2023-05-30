import React from 'react'
import { Avatar, DeliveryBx, Logo, Notification, Search } from '../Assets'
import Input from './Share/Input'
import SVGIcon from './Share/SVGIcon'

export default function TopHeader() {
    return (
        <div className="flex justify-between items-center py-5 space-x-8">
            <div className="flex items-center space-x-3.5">
                <SVGIcon Icon={Logo} />
                <p className="text-textHeader font-bold text-base leading-none">Project <br /> packers</p>
            </div>
            <div className="flex-1 relative">
                <Input placeholder="Paste the URL of the product" className="pl-12" />
                <SVGIcon Icon={Search} className="absolute top-1/4 left-3" />
            </div>
            <div className="flex items-center space-x-4 ">
                <p className="text-base font-normal text-textColor pr-2">Support</p>
                <div className="bg-bgLogo w-10 h-10 flex items-center justify-center rounded-full" >
                    <SVGIcon Icon={Notification} />
                </div>
                <div className="bg-bgLogo w-10 h-10 flex items-center justify-center rounded-full">
                    <SVGIcon Icon={DeliveryBx} />
                </div>
                <div className="bg-[#FBE697] w-10 h-10 flex items-center justify-center rounded-full">
                    <SVGIcon Icon={Avatar} />
                </div>
            </div>
        </div >
    )
}
