import React, { useEffect, useState } from 'react'
import Videocards from './Videocards'
import { getVideosApi } from '../services/allApi'

function Videos(result) {
  const[data,setData]=useState([])
  const [resp,setResp]=useState({})

  useEffect(()=>{
    getData()

 },[result,resp])

const getData=async()=>{
  const result=await getVideosApi()
  console.log(result)
  if(result.status==200){
    setData(result.data)
  }
}
  return (
    <>
    <div className='container-fluid p-0  border-dark shadow'>
      {

        data?.length>0 ?
        <div className='row p-0'>
          {data?.map(item=>(
            <Videocards video={item} res={setResp}/>
          ))}
        </div>
        :
        <h4 className='text-danger text-center'>No Videos Available!!</h4>
      }




    
    </div>
    </>
  )
}

export default Videos