import React from "react"

//images
import logo from "../../assets/img/logo.png"

//svg
import icon1 from "../../assets/icons/icon1.svg"
import icon2 from "../../assets/icons/icon2.svg"
import icon3 from "../../assets/icons/icon3.svg"
import icon4 from "../../assets/icons/icon4.svg"
import icon5 from "../../assets/icons/icon5.svg"
import icon6 from "../../assets/icons/icon6.svg"
import icon7 from "../../assets/icons/icon7.svg"
import icon8 from "../../assets/icons/icon8.svg"

//icons
import {RiMenuFill} from "react-icons/ri"
import {NavLink} from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="bg-[#212121] flex-1 h-[100vh] px-[17px] sticky top-0">
            <div className="flex items-center justify-start gap-[20px] p-[15px_18px]">
                <RiMenuFill className="text-2xl text-white" />
                <img src={logo} alt="" />
            </div>

            <div>
                <div className="flex flex-col border-b-1 border-gray-600 gap-[5px] py-[10px]">
                    <NavLink
                        to="/"
                        className="flex justify-start items-center gap-[25px] rounded-xl p-[9px_12px] text-white font-medium ">
                        <img src={icon1} alt="" />
                        Home
                    </NavLink>

                    <NavLink
                        to="/trending"
                        className="flex justify-start items-center gap-[25px] rounded-xl p-[9px_12px] text-white font-medium ">
                        <img src={icon2} alt="" />
                        Trending
                    </NavLink>

                    <NavLink
                        to="/subscriptions"
                        className="flex justify-start items-center gap-[25px] rounded-xl p-[9px_12px] text-white font-medium ">
                        <img src={icon3} alt="" />
                        Subscriptions
                    </NavLink>
                </div>

                <div className="flex flex-col border-b-1 border-gray-600 gap-[5px] py-[10px]">
                    <NavLink
                        to="/library"
                        className="flex justify-start items-center gap-[25px] rounded-xl p-[9px_12px] text-white font-medium ">
                        <img src={icon4} alt="" />
                        Library
                    </NavLink>

                    <NavLink
                        to="/history"
                        className="flex justify-start items-center gap-[25px] rounded-xl p-[9px_12px] text-white font-medium ">
                        <img src={icon5} alt="" />
                        History
                    </NavLink>

                    <NavLink
                        to="/yourvideos"
                        className="flex justify-start items-center gap-[25px] rounded-xl p-[9px_12px] text-white font-medium ">
                        <img src={icon6} alt="" />
                        Your videos
                    </NavLink>

                    <NavLink
                        to="/watchlater"
                        className="flex justify-start items-center gap-[25px] rounded-xl p-[9px_12px] text-white font-medium ">
                        <img src={icon7} alt="" />
                        Watch later
                    </NavLink>

                    <NavLink
                        to="/likedvideos"
                        className="flex justify-start items-center gap-[25px] rounded-xl p-[9px_12px] text-white font-medium ">
                        <img src={icon8} alt="" />
                        Liked videos
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
