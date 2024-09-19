import React, { useEffect, useState } from 'react'
import { getCategoryApi,deleteCategory, addvideoToCategory } from '../services/allApi'
import { toast } from 'react-toastify'
import Videocards from './Videocards'

function CategoryList({res}) {
    const [clist,setClist]=useState([])
    const [resp,setResp]= useState({})

    useEffect(()=>{
        getData()
    },[res,resp])


    const getData=async ()=>{
        const result= await getCategoryApi()
        if(result.status==200){
            setClist(result.data)
            console.log(result.data);
        }
    }

    const deleteCat=async(id)=>{
        const result=await deleteCategory(id)
        if(result.status==200){
            setResp(result)
        }
    }

    const handleDragover=(e)=>{
        e.preventDefault()
        console.log("Dragging over")
    }

    const handleDrop=async(e,cat)=>{
        const video=JSON.parse(e.dataTransfer.getData('video'))
        console.log(video)
        cat.videos.push(video);
        const result=await addvideoToCategory(cat,cat.id)
        if(result.status==200){
            toast.success("Video Added To Category!!")
            getData()
        }
        else{
            toast.error("Failed!!")
        }
        
    }
  


  return (
<>
<div className='shadow p-3 '>
    {
        clist?.length>0 ?
        <div>
            {
                clist?.map(item=>(
                    <div className='w-100 p-3 shadow mb-3' onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,item)} >
                        <div className='d-flex justify-content-between'>
                            <h3>{item.Category}</h3>
                            <button className='btn'><i className="fa-solid fa-trash fa-2xl" onClick={()=>{deleteCat(item.id)}} style={{color: "#cf0707",}} />
                            </button>

                        </div>
                        <div className='p-1 shadow'>
                            {
                                item.videos.length>0 &&
                                item.videos.map(item=>(
                                    <Videocards video={item} cond={true}/>
                                ))
                            }

                        </div>

                    </div>
                    
                ))
            }

        </div>
        :
        <h5 className='text-danger'>No Categories</h5>
    }

</div>




</>  )
}

export default CategoryList