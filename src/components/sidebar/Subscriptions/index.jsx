// icons
import {HiOutlineDotsVertical} from "react-icons/hi"
import {CgMenuGridR} from "react-icons/cg"
import {TfiMenuAlt} from "react-icons/tfi"


const Subscriptions = () => {
    return (
        <section className="bg-[#212121] w-full pr-5 flex flex-col gap-[20px] py-[20px]">
            <div className="flex justify-between items-center gap-[20px]">
                <h1 className="text-[20px] font-bold text-white">New</h1>

                <div className=" flex justify-center items-center gap-[20px]">
                    <p className="text-[#3ea6ff] font-medium cursor-pointer">
                        Subscription management
                    </p>
                    <CgMenuGridR className="text-[22px] text-white cursor-pointer" />
                    <TfiMenuAlt className="text-[22px] text-white cursor-pointer" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <img
                        src="https://i.ytimg.com/vi/JmREbybex_8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA-fTkxjgGxBOW1lWzXZ2cwNFDkow"
                        alt=""
                        className="w-full h-[200px] object-cover rounded-[10px] cursor-pointer"
                    />
                    <div className="flex justify-start items-start gap-[10px] relative">
                        <img
                            src="https://yt3.googleusercontent.com/ytc/AIdro_lJ44LSWXnpijUqEhjDVkTrZf1JyVqkEp6ayKVxAUYg9A=s900-c-k-c0x00ffffff-no-rj"
                            alt=""
                            className="h-[40px] w-[40px] rounded-full cursor-pointer"
                        />
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[#f1f1f1] font-medium">
                                Javascript | 14. Shartli operatorlar va
                                boshqaruv oqimi
                            </h2>
                            <small className="text-[#aaa] font-medium">
                                Ulugbek Samigjonov
                            </small>
                            <small className="text-[#aaa] font-medium">
                                1.1million views &#183; 1 year ago
                            </small>
                        </div>
                        <HiOutlineDotsVertical className="absolute right-0 top-0 text-white text-[19px] cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <img
                        src="https://i.ytimg.com/vi/N_zjFEV2cPY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCAwisixK2CFZWesVy3de5u0g2jUw"
                        alt=""
                        className="w-full h-[200px] object-cover rounded-[10px] cursor-pointer"
                    />
                    <div className="flex justify-start items-start gap-[10px] relative">
                        <img
                            src="https://yt3.googleusercontent.com/QoU70wuKJqyMebTwPP-HhPuDGhewugFMoO7wb9DiOk03f0H3g4MsoDMAYMkTvUK9lk3T5sQeHw=s900-c-k-c0x00ffffff-no-rj"
                            alt=""
                            className="h-[40px] w-[40px] rounded-full cursor-pointer"
                        />
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[#f1f1f1] font-medium">
                                Hammasi niyatdan boshlanadi
                            </h2>
                            <small className="text-[#aaa] font-medium">
                                Najot Ta'lim
                            </small>
                            <small className="text-[#aaa] font-medium">
                                19.2 million views &#183; 1 months ago
                            </small>
                        </div>
                        <HiOutlineDotsVertical className="absolute right-0 top-0 text-white text-[19px] cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <img
                        src="https://i.ytimg.com/vi/edXr0Gt1AVg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCb7UrE6m5CW9_vEtbGLQW-RBiugg"
                        alt=""
                        className="w-full h-[200px] object-cover rounded-[10px] cursor-pointer"
                    />
                    <div className="flex justify-start items-start gap-[10px] relative">
                        <img
                            src="https://yt3.googleusercontent.com/dRkXqOpILFtZkZNNuvD3a1eg7aog9PKQmjdV0u5upy7hGlxPY6TYwgbjk1kQwKYv5m4_PM52Dkk=s120-c-k-c0x00ffffff-no-rj"
                            alt=""
                            className="h-[40px] w-[40px] rounded-full cursor-pointer"
                        />
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-[#f1f1f1] font-medium">
                                2050-yilda yashayotgan YAPONIYA | Jamshidxon
                                Ziyoxonov
                            </h2>
                            <small className="text-[#aaa] font-medium">
                                Jamshidxon Ziyoxonov
                            </small>
                            <small className="text-[#aaa] font-medium">
                                1.3 million views &#183; 3 months ago
                            </small>
                        </div>
                        <HiOutlineDotsVertical className="absolute right-0 top-0 text-white text-[19px] cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscriptions
