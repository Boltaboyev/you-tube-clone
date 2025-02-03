import React, {useEffect, useState} from "react"

import {my_axios} from "../../../hook/useAxios"

// icons
import {HiOutlineDotsVertical} from "react-icons/hi"

const Home = () => {
    let [videos, setVideos] = useState([])

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
                    <div className="flex flex-col gap-[10px]">
                        <img
                            src={value?.poster}
                            alt=""
                            className="w-full h-[200px] object-cover rounded-[10px] cursor-pointer"
                        />
                        <div className="flex justify-start items-start gap-[10px] relative">
                            <img
                                src={value?.avatar}
                                alt=""
                                className="h-[40px] w-[40px] rounded-full cursor-pointer"
                            />
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-[#f1f1f1] font-medium">
                                    {value?.title}
                                </h2>
                                <small className="text-[#aaa] font-medium">
                                    {value?.username}
                                </small>
                                <small className="text-[#aaa] font-medium">
                                    {value?.views} views &#183;{" "}
                                    {value?.addedTime}
                                </small>
                            </div>
                            <HiOutlineDotsVertical className="absolute right-0 top-0 text-white text-[19px] cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home
