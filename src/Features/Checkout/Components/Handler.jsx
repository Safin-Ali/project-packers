import { useState } from "react";
import { Dropdown } from "../../../Assets";
import Image from "../../../Components/Share/Image";
import SVGIcon from "../../../Components/Share/SVGIcon";
import { useGlobalCtx } from "../../../Contexts/GlobalProvider";
import countrCode from "../Data/countryCode.json";

function Label({ title }) {
    return (
        <span className="text-base text-black">{title}</span>
    )
}

function TbRow({
    label,
    children,
    key,
}) {
    return (
        <tr className="border-b text-base text-pColor" key={key}>
            <td className="pt-5 pb-2">
                <p className="capitalize font-normal">{label}</p>
            </td>
            <td className="pt-5 pb-2 text-right font-medium">{children}</td>
        </tr>
    );
}

function DropDown() {
    const { mbCode, setMbCode } = useGlobalCtx();
    const [open, setOpen] = useState(false);
    return (
        <div className="absolute top-[45%] left-5 border-r-2 pr-2">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => setOpen(!open)}>
                <Image src={mbCode.flag} className="w-6 h-6 object-contain" />
                <span className="text-sm text-black font-normal">{mbCode.number}</span>
                <SVGIcon Icon={Dropdown} />
            </div>
            <div className={`${open ? '' : 'hidden'} absolute w-28 h-40 overflow-y-auto z-50 bg-white shadow-lg p-2 top-9 -left-3 rounded-md`}>
                {countrCode.map((data) => (
                    <div key={data.name} className="flex items-center space-x-3" onClick={() => setMbCode(data) & setOpen(false)}>
                        <Image src={data.flag} className="w-6 h-6 object-contain" />
                        <span className="text-sm text-black font-normal">{data.number}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export { Label, TbRow, DropDown }