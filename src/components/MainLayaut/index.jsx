import React from "react"

import {Outlet} from "react-router-dom"

import Sidebar from "../sidebar"
import Header from "../Header"


const MainLayout = () => {
    return (
        <div className="h-[100vh]">
            <div className="flex">
                <Sidebar />
                <div className="flex-[5.5] h-full">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout
