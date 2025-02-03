import React from "react"

// icons
import {IoCloseOutline} from "react-icons/io5"
import {FaRegTrashAlt} from "react-icons/fa"
import {IoPauseOutline} from "react-icons/io5"
import {GoGear} from "react-icons/go"



const History = () => {
    return (
        <section className="py-[20px] flex w-full gap-[10px]">
            <div className=" h-full flex-[4.5] flex flex-col gap-[20px]">
                <h1 className="text-[24px] font-bold text-white">
                    Browsing history
                </h1>

                {/* 2 */}
                <div className="grid grid-cols-2 items-center gap-[0px] relative w-full">
                    <div className="h-[150px] rounded-md overflow-hidden history">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Mountain Landscape"
                            className="h-full w-full rounded-md object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-[2px] pr-[20px]">
                        <p className="text-white leading-[140%] text-[20px] font-medium">
                            Relaxing Piano Music - 1 Hour Meditation
                        </p>
                        <p className="text-[white] opacity-60">
                            Calm Vibes . 2.3 million views
                        </p>
                        <p className="text-[white] opacity-60 text-[13px]">
                            Perfect for meditation, yoga, or relaxation. Let the
                            soothing piano melodies calm your mind.
                        </p>
                    </div>
                    <IoCloseOutline className="text-white !text-[24px] absolute z-10 right-0 top-0 cursor-pointer" />
                </div>

                {/* 3 */}
                <div className="grid grid-cols-2 items-center gap-[0px] relative w-full">
                    <div className="h-[150px] overflow-hidden history">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Beach Sunset"
                            className="h-full rounded-md w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-[2px] pr-[20px]">
                        <p className="text-white leading-[140%] text-[20px] font-medium">
                            Ocean Waves - Sleep Sounds
                        </p>
                        <p className="text-[white] opacity-60">
                            Nature Sounds . 1.5 million views
                        </p>
                        <p className="text-[white] opacity-60 text-[13px]">
                            Drift off to sleep with the calming sounds of ocean
                            waves crashing on the shore.
                        </p>
                    </div>
                    <IoCloseOutline className="text-white !text-[24px] absolute z-10 right-0 top-0 cursor-pointer" />
                </div>

                {/* 4 */}
                <div className="grid grid-cols-2 items-center gap-[0px] relative w-full">
                    <div className="h-[150px] overflow-hidden history">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Forest Path"
                            className="h-full rounded-md w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-[2px] pr-[20px]">
                        <p className="text-white leading-[140%] text-[20px] font-medium">
                            Forest Ambience - Nature Sounds
                        </p>
                        <p className="text-[white] opacity-60">
                            Green World . 1.2 million views
                        </p>
                        <p className="text-[white] opacity-60 text-[13px]">
                            Immerse yourself in the sounds of a peaceful forest
                            with birds chirping and leaves rustling.
                        </p>
                    </div>
                    <IoCloseOutline className="text-white !text-[24px] absolute z-10 right-0 top-0 cursor-pointer" />
                </div>

                {/* 5 */}
                <div className="grid grid-cols-2 items-center gap-[0px] relative w-full">
                    <div className="h-[150px] overflow-hidden history">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="City Skyline"
                            className="h-full rounded-md w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-[2px] pr-[20px]">
                        <p className="text-white leading-[140%] text-[20px] font-medium">
                            Urban Jazz - Late Night Vibes
                        </p>
                        <p className="text-[white] opacity-60">
                            City Beats . 1.9 million views
                        </p>
                        <p className="text-[white] opacity-60 text-[13px]">
                            Enjoy smooth jazz music perfect for late-night
                            drives or relaxing evenings in the city.
                        </p>
                    </div>
                    <IoCloseOutline className="text-white !text-[24px] absolute z-10 right-0 top-0 cursor-pointer" />
                </div>

                {/* 6 */}
                <div className="grid grid-cols-2 items-center gap-[0px] relative w-full">
                    <div className="h-[150px] overflow-hidden history">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Desert Landscape"
                            className="h-full rounded-md w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-[2px] pr-[20px]">
                        <p className="text-white leading-[140%] text-[20px] font-medium">
                            Desert Winds - Ambient Sounds
                        </p>
                        <p className="text-[white] opacity-60">
                            Sandy Tunes . 1.1 million views
                        </p>
                        <p className="text-[white] opacity-60 text-[13px]">
                            Experience the serene sounds of the desert with
                            gentle winds and distant echoes.
                        </p>
                    </div>
                    <IoCloseOutline className="text-white !text-[24px] absolute z-10 right-0 top-0 cursor-pointer" />
                </div>
            </div>

            <div className="flex-[3] h-[70vh] sticky top-0 flex flex-col gap-[20px] justify-center items-start pl-[40px]">
                <input
                    type="text"
                    placeholder="search in browsing history"
                    className="border-b border-white pb-[2px] w-[300px] text-gray-400"
                />

                <p className="text-white flex justify-center items-center text-start gap-[10px] cursor-pointer">
                    <FaRegTrashAlt />
                    Clear browsing history
                </p>

                <p className="text-white flex justify-center items-center text-start gap-[10px] cursor-pointer">
                    <IoPauseOutline />
                    Do not save browsing history
                </p>

                <p className="text-white flex justify-center items-center text-start gap-[10px] cursor-pointer">
                    <GoGear />
                    Manage browsing history
                </p>
            </div>
        </section>
    )
}

export default History
