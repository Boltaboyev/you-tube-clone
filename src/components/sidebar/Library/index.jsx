// icons
import {HiOutlineDotsVertical} from "react-icons/hi"
import {CgMenuGridR} from "react-icons/cg"
import {TfiMenuAlt} from "react-icons/tfi"
import {CgPlayList} from "react-icons/cg"

const Library = () => {
    return (
        <section className="bg-[#212121] w-full pr-5 flex flex-col gap-[20px] py-[20px]">
            <div className="flex justify-between items-center gap-[20px]">
                <h1 className="text-[20px] font-bold text-white">Library</h1>

                <div className=" flex justify-center items-center gap-[20px]">
                    <p className="text-[#3ea6ff] font-medium cursor-pointer">
                        Library management
                    </p>
                    <CgMenuGridR className="text-[22px] text-white cursor-pointer" />
                    <TfiMenuAlt className="text-[22px] text-white cursor-pointer" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <div className="relative">
                        <div className="bg-[#454545db] z-10 absolute w-full bottom-0 text-white p-[5px_10px] flex justify-between items-center cursor-pointer">
                            <CgPlayList className="text-[20px]" />
                            <p className="font-medium">24 videos</p>
                        </div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNt_g-7y9BnALvcj6SpY0AqMz6OWKhwDco0g&s"
                            alt=""
                            className="w-full h-[200px] object-cover cursor-pointer opacity-60"
                        />
                    </div>
                    <div className="flex justify-start items-start gap-[10px] relative">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[#f1f1f1] font-medium">
                                Javascript lessons
                            </h2>
                            <small className="text-[#aaa] font-medium">
                                Playlist &#183; Public
                            </small>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <div className="relative">
                        <div className="bg-[#454545db] z-10 absolute w-full bottom-0 text-white p-[5px_10px] flex justify-between items-center cursor-pointer">
                            <CgPlayList className="text-[20px]" />
                            <p className="font-medium">58 videos</p>
                        </div>
                        <img
                            src="https://www.ukmusic.org/wp-content/uploads/2024/11/Website.png"
                            alt=""
                            className="w-full h-[200px] object-cover cursor-pointer opacity-60"
                        />
                    </div>
                    <div className="flex justify-start items-start gap-[10px] relative">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[#f1f1f1] font-medium">
                                2024 music playlist
                            </h2>
                            <small className="text-[#aaa] font-medium">
                                Playlist &#183; Private
                            </small>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="flex flex-col gap-[10px]">
                    <div className="relative">
                        <div className="bg-[#454545db] z-10 absolute w-full bottom-0 text-white p-[5px_10px] flex justify-between items-center cursor-pointer">
                            <CgPlayList className="text-[20px]" />
                            <p className="font-medium">37 videos</p>
                        </div>
                        <img
                            src="https://yt3.googleusercontent.com/ytc/AIdro_kMNOnWzS_BqiVkca2Y0YmL-kLLzLPKqJuA3yKw4odZJQ=s900-c-k-c0x00ffffff-no-rj"
                            alt=""
                            className="w-full h-[200px] object-cover cursor-pointer opacity-60"
                        />
                    </div>
                    <div className="flex justify-start items-start gap-[10px] relative">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[#f1f1f1] font-medium">
                                Osmondagi Bolalar
                            </h2>
                            <small className="text-[#aaa] font-medium">
                                Playlist &#183; Public
                            </small>
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className="flex flex-col gap-[10px]">
                    <div className="relative">
                        <div className="bg-[#454545db] z-10 absolute w-full bottom-0 text-white p-[5px_10px] flex justify-between items-center cursor-pointer">
                            <CgPlayList className="text-[20px]" />
                            <p className="font-medium">392 videos</p>
                        </div>
                        <img
                            src="https://www.polytechnique-insights.com/wp-content/uploads/2022/11/space-1024x640.jpeg"
                            alt=""
                            className="w-full h-[200px] object-cover cursor-pointer opacity-60"
                        />
                    </div>
                    <div className="flex justify-start items-start gap-[10px] relative">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[#f1f1f1] font-medium">
                                Travel to space
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

export default Library
