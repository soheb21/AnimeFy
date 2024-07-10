import React from 'react'
import { CgProfile } from "react-icons/cg";
const Input = ({ controls, formData, setFormData }) => {
    return (
        <div className='flex flex-col text-white  items-center p-4 h-fit w-full'>
            {
                controls.length > 0 && controls.map((item) => (
                    <div key={item.name} className=" flex flex-col gap-3 items-start w-full">
                        <label className='mt-2' >{item.label}</label>
                        {
                            item.name === "user_img" && <CgProfile className='text-white text-4xl' />
                        }
                        <input
                            className={item.name === "user_img" ? "bg-yellow-500" : "w-full  p-2 outline-none border-[1px] rounded-sm "}
                            type={item?.type}
                            placeholder={item?.placeholder}
                            name={item?.name}
                            value={formData[item.name]}
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        />

                    </div>
                ))
            }
        </div>
    )
}

export default Input