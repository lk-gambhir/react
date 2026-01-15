import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setdata] = useState([])
    // useEffect(() => 
    // {
    //     fetch("https://api.github.com/users/lk-gambhir")
    //     .then(response => response.json())
    //     .then(data => {
    //         setdata(data)
    //     })
    // },[])
    const data = useLoaderData()
  return (
    <div className='bg-gray-600 text-white p-4 text-3xl flex flex-col items-center'>
        <img src = {data.avatar_url} alt="Git picture" width={250}></img>
        Github Followers : {data.followers}    
    </div>
  )
}

export default Github

export const githubinfoloader = async() =>
{
    const response = await fetch('https://api.github.com/users/lk-gambhir')
    return response.json()
}