import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {

    //     fetch('https://api.github.com/users/Aditya6112')
    //         .then(response => response.json())
    //         .then(
    //             data => {
    //                 console.log(data)
    //                 setData(data)
    //             }
    //         )
    // }, [])

    return (
        <>
            <div className='bg-gray-500 text-white text-3xl p-4 '>
                Github Followers: {data.followers}
                <img src={data.avatar_url} alt="" />
            </div>

        </>

    )
}

export default Github

export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Aditya6112')
    return response.json()
}