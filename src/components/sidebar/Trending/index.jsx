import React from "react"

// icons
import {IoMdPlay} from "react-icons/io"
import {MdVolumeUp} from "react-icons/md"
import {AiFillLike} from "react-icons/ai"
import {AiFillDislike} from "react-icons/ai"
import {BiSolidCommentDetail} from "react-icons/bi"
import {IoMdShareAlt} from "react-icons/io"
import {HiOutlineDotsVertical} from "react-icons/hi"
import {FaArrowDown} from "react-icons/fa6"


const Trending = () => {
    return (
        <section className=" w-full h-[75vh] flex justify-center items-center gap-[10px] relative">
            <div className="h-full relative">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3URvFPJwAvX55T_yQuH13YQTPQQ1f8___-rNQ-nDBBSiOVRRLItAJHS7lGyZQh0UAtN4&usqp=CAU"
                    alt=""
                    className="h-[100%] rounded-2xl"
                />
                <div className="bg-[#ffffff14] flex justify-center items-center cursor-pointer text-[20px] absolute top-[10px] left-[10px] text-white h-[40px] w-[40px] rounded-full">
                    <IoMdPlay />
                </div>

                <div className="bg-[#ffffff14] flex justify-center items-center cursor-pointer text-[20px] absolute top-[10px] left-[70px] text-white h-[40px] w-[40px] rounded-full">
                    <MdVolumeUp />
                </div>
            </div>

            <div className="h-full flex flex-col justify-center items-center gap-[20px]">
                <div className="bg-[#ffffff14] flex justify-center items-center cursor-pointer text-[20px]  top-[10px] left-[10px] text-white h-[40px] w-[40px] rounded-full">
                    <AiFillLike />
                </div>

                <div className="bg-[#ffffff14] flex justify-center items-center cursor-pointer text-[20px]  top-[10px] left-[70px] text-white h-[40px] w-[40px] rounded-full">
                    <AiFillDislike />
                </div>

                <div className="bg-[#ffffff14] flex justify-center items-center cursor-pointer text-[20px]  top-[10px] left-[70px] text-white h-[40px] w-[40px] rounded-full">
                    <BiSolidCommentDetail />
                </div>

                <div className="bg-[#ffffff14] flex justify-center items-center cursor-pointer text-[20px]  top-[10px] left-[70px] text-white h-[40px] w-[40px] rounded-full">
                    <IoMdShareAlt />
                </div>

                <div className="bg-[#ffffff14] flex justify-center items-center cursor-pointer text-[20px]  top-[10px] left-[70px] text-white h-[40px] w-[40px] rounded-full">
                    <HiOutlineDotsVertical />
                </div>
            </div>

            <div className="bg-[#ffffff14] flex justify-center items-center cursor-pointer text-[20px] absolute  right-[20px] text-white h-[50px] w-[50px] rounded-full">
                <FaArrowDown />
            </div>
        </section>
    )
}

export default Trending
