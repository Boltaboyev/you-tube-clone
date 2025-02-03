import React from "react"

// icons
import {CiSearch} from "react-icons/ci"
import {PiMicrophoneFill} from "react-icons/pi"
import {LuBellRing} from "react-icons/lu"

const Header = () => {
    return (
        <div className="flex flex-col bg-[#212121] px-[20px] w-full sticky top-0 z-[999]">
            <div className="w-full py-[8px] flex justify-between items-center gap-[10px]">
                <span></span>
                <div className="flex justify-center items-center gap-[18px]">
                    <div className="flex justify-between items-center border border-[#424242] overflow-hidden h-[40px] pl-[10px] rounded-[30px] w-[530px]">
                        <input
                            type="text"
                            placeholder="Enter your query"
                            className="text-gray-300"
                        />

                        <button className="bg-[#ffffff14] h-full w-[65px] flex justify-center items-center text-white text-[22px]">
                            <CiSearch />
                        </button>
                    </div>

                    <div className="h-[40px] w-[40px] rounded-full bg-[#ffffff14] text-white flex justify-center items-center text-[20px] cursor-pointer">
                        <PiMicrophoneFill />
                    </div>
                </div>

                <div className="flex justify-end items-center gap-[24px]">
                    <LuBellRing className="text-[20px] text-white cursor-pointer" />

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmZYPS5e450qc4_EQE2zEIHsawcif4R7U6A&s"
                        alt=""
                        className="h-[30px] w-[30px] rounded-full cursor-pointer object-cover"
                    />
                </div>
            </div>

            <div className="flex justify-start items-center pt-[10px] pb-[20px] gap-[8px]">
                <button className="text-[#212121] bg-[white] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    All
                </button>
                <button className="text-[white] bg-[#ffffff14] hover:bg-[#ffffff30] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    Music
                </button>
                <button className="text-[white] bg-[#ffffff14] hover:bg-[#ffffff30] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    Jams
                </button>
                <button className="text-[white] bg-[#ffffff14] hover:bg-[#ffffff30] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    Now on air
                </button>
                <button className="text-[white] bg-[#ffffff14] hover:bg-[#ffffff30] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    Video games
                </button>
                <button className="text-[white] bg-[#ffffff14] hover:bg-[#ffffff30] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    Football
                </button>
                <button className="text-[white] bg-[#ffffff14] hover:bg-[#ffffff30] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    Nature
                </button>
                <button className="text-[white] bg-[#ffffff14] hover:bg-[#ffffff30] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    Recently Published
                </button>
                <button className="text-[white] bg-[#ffffff14] hover:bg-[#ffffff30] p-[4px_15px] font-medium rounded-lg cursor-pointer">
                    New for you
                </button>
            </div>
        </div>
    )
}

export default Header
