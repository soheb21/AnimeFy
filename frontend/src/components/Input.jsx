import React from 'react'
import { CgProfile } from "react-icons/cg";
const Input = ({ controls, formData, setFormData }) => {
    return (
        <div className='flex flex-col text-white  items-center p-4 h-fit w-full'>
            {
                controls?.map((item, ind) => (
                    <div key={ind} className=" grid  md:grid-cols-2 overflow-hidden  items-center  md:gap-3  w-full">
                        <label className='mt-2' >{item.label}</label>


                        {
                            item.name === "des"
                                ? <textarea
                                    className={item.name === "user_img" ? "bg-yellow-500" : "w-full my-2 bg-gray-800 text-white  p-2 outline-none border-[1px] rounded-sm "}
                                    rows={3}
                                    name={item?.name}
                                    type={item?.type}
                                    placeholder={item?.placeholder}
                                    value={formData[item?.name]}
                                    onChange={(e) => setFormData({ ...formData, [item.name]: e.target.value })}
                                />
                                : <input
                                    className={item.name === "user_img" ? "bg-yellow-500 my-2" : "w-full bg-gray-800 my-2  text-white  p-2 outline-none border-[1px] rounded-sm "}
                                    name={item?.name}
                                    type={item?.type}
                                    placeholder={item?.placeholder}
                                    value={formData[item?.name]}
                                    onChange={(e) => setFormData({ ...formData, [item.name]: e.target.value })}
                                />
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default Input