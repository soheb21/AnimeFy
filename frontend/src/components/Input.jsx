import React from 'react'
const Input = ({ controls, formData, setFormData }) => {
    return (
        <div className='flex flex-col text-white  items-center p-4 h-fit w-full'>
            {
                controls?.map((item, ind) => (
                    <div key={ind} className=" grid  md:grid-cols-2 overflow-hidden  items-center  md:gap-3  w-full">
                        <label htmlFor={"img"} className='mt-2 w-full ' >{item.label} {item.type === "file" && <span className=' bg-white text-black px-2  rounded-md transition-all hover:scale-110 cursor-pointer '>Upload Img</span>}  </label>
                        {
                            item.name === "des"
                                ? <textarea
                                    className={"w-full my-2 bg-gray-800 text-white  p-2 outline-none border-[1px] rounded-sm "}
                                    rows={3}
                                    name={item?.name}
                                    type={item?.type}
                                    placeholder={item?.placeholder}
                                    value={formData[item?.name]}
                                    onChange={(e) => setFormData({ ...formData, [item.name]: e.target.value })}
                                />
                                : <input

                                    id={item.type === "file" ? "img" : ""}
                                    className={item.type === "file" ? "hidden" : "w-full bg-gray-800 my-2  text-white  p-2 outline-none border-[1px] rounded-sm "}
                                    name={item?.name}
                                    type={item?.type}
                                    placeholder={item?.placeholder}
                                    value={item.type === "file" ? "" : formData[item?.name]}
                                    onChange={(e) => setFormData(item.type !== "file" ? { ...formData, [item.name]: e.target.value } : { ...formData, [item.name]: e.target.files[0] })}
                                />
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default Input