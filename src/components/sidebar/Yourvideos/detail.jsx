import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"

import {my_axios} from "../../../hook/useAxios"

const Detail = () => {
    const [data, setData] = useState(null)
    const {id} = useParams()
    
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await my_axios.get(`/${id}`)
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

return (
    <section className="h-[100vh] flex justify-center items-center gap-[30px] w-full">
        {data ? (
            <>
                <img
                    src={data.poster}
                    alt={data.title}
                    className="w-[500px] h-[320px] rounded-2xl border-2 border-red-600"
                />
                <div className="flex flex-col gap-[10px] text-white font-medium">
                    <div className="flex justify-start items-center gap-[10px]">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmZYPS5e450qc4_EQE2zEIHsawcif4R7U6A&s"
                            alt={data.title}
                            className="h-[50px] w-[50px] rounded-full"
                        />

                        <h1 className="text-white font-bold text-[22px]">
                            Otabek
                        </h1>
                    </div>
                    <h1>{data.title}</h1>
                    <p>Views : {data.views}</p>
                    <p>Added: {data.addedTime}</p>

                    <small className="w-[400px] opacity-60">{data.desc}</small>

                    <button onClick={() => navigate(-1)} className="border p-[7px] rounded-lg cursor-pointer">Back to videos</button>
                </div>
            </>
        ) : (
            <p>Loading...</p>
        )}
    </section>
)

}

export default Detail
