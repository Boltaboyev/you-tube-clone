import React, {useEffect, useState} from "react"

import {my_axios} from "../../../hook/useAxios"


// icons
import {HiOutlineDotsVertical} from "react-icons/hi"
import { useNavigate } from "react-router-dom"

const Yourvideos = () => {
    let [videos, setVideos] = useState([])

    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const {data} = await my_axios.get("/")
            setVideos(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="bg-[#212121] w-full pr-[30px] pb-[40px]">
            <div className="grid grid-cols-3 gap-[20px]">
                {videos.map((value) => (
                    <button onClick={()=> navigate(`/details/${value.id}`)} className="flex flex-col gap-[10px]" key={value.id}>
                        <img
                            src={value?.poster}
                            alt=""
                            className="w-full h-[200px] object-cover rounded-[10px] cursor-pointer"
                        />
                        <div className="flex justify-start items-start gap-[10px] relative">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmZYPS5e450qc4_EQE2zEIHsawcif4R7U6A&s"
                                alt=""
                                className="h-[40px] w-[40px] rounded-full cursor-pointer"
                            />
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-[#f1f1f1] font-medium">
                                    {value?.title}
                                </h2>
                                <small className="text-[#aaa] font-medium">
                                    Otabek
                                </small>
                                <small className="text-[#aaa] font-medium">
                                    {value?.views} views &#183;{" "}
                                    {value?.addedTime}
                                </small>
                            </div>
                            <HiOutlineDotsVertical className="absolute right-0 top-0 text-white text-[19px] cursor-pointer" />
                        </div>
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Yourvideos
