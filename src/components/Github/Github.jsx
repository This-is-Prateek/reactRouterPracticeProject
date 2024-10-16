import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data  = useLoaderData(); //better way to fetch data in a component before it is visited, provided by react router 

  //normal way to fetch data

  // const [data ,  setData] = useState([]);

  // useEffect(()=>{
  //   fetch("https://api.github.com/users/This-is-Prateek")
  //   .then(response=>response.json())
  //   .then(followers=>setData(followers));
  //   console.log(data.followers);
  // },[])

  return (
    <div className='flex justify-center items-center p-4 bg-gray-400 text-white gap-4'>
      <img className='w-40 rounded-2xl border border-[#fd5e00]' src={data.avatar_url} alt="Git picture" />
      <div>Github followers: {data.followers}</div>
    </div>
  )
}

export default Github

//ideally this function should be in another file 
export const githubLoader = async()=>{
  const response = await fetch("https://api.github.com/users/This-is-Prateek") //fetches data from api when this function is called
  return response.json();        
}
