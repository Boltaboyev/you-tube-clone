// icons
import {HiOutlineDotsVertical} from "react-icons/hi"
import {CgMenuGridR} from "react-icons/cg"
import {TfiMenuAlt} from "react-icons/tfi"
import {CgPlayList} from "react-icons/cg"

const Watchlater = () => {
    return (
        <section className="bg-[#212121] w-full pr-5 flex flex-col gap-[20px] py-[20px]">
            <div className="flex justify-between items-center gap-[20px]">
                <div className="text-white">
                    <h1 className="text-[20px] font-bold text-white">
                        Watch later
                    </h1>
                    <small>Updated Oct 31, 2024</small>
                </div>
                <div className=" flex justify-center items-center gap-[20px]">
                    <CgMenuGridR className="text-[22px] text-white cursor-pointer" />
                    <TfiMenuAlt className="text-[22px] text-white cursor-pointer" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <div className="relative">
                        <div className="bg-[#454545db] z-10 absolute w-full bottom-0 text-white p-[5px_10px] flex justify-between items-center cursor-pointer">
                            <CgPlayList className="text-[20px]" />
                            <p className="font-medium">1 video</p>
                        </div>
                        <img
                            src="https://storage.googleapis.com/support-forums-api/attachment/message-223455524-4125100802620654799.jpg"
                            alt=""
                            className="w-full h-[200px] object-cover cursor-pointer opacity-60"
                        />
                    </div>
                    <div className="flex justify-start items-start gap-[10px] relative">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[#f1f1f1] font-medium">
                                React lessons
                            </h2>
                            <small className="text-[#aaa] font-medium">
                                Playlist &#183; Public
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Watchlater
