import React from 'react'
import { getHistory } from '../services/allApi'
import { useState,useEffect } from 'react'
import { deleteHistory } from '../services/allApi'

function History() {


  const [historylist,setHistorylist]=useState([])
  const[dlt,setDlt]=useState({})

  useEffect(()=>{
    getData()

  },[dlt])

  const getData=async()=>{
    const result=await getHistory()
    if(result.status==200){
      setHistorylist(result.data)
      console.log(result.data)
    }
  }

  const deleteHis=async(id)=>{
    const result=await deleteHistory(id)
    if(result.status==200){
        setDlt(result)
    }
}




  return (
    <>
    <h2>Watch History</h2>
    {
      historylist.length>0?
      <table className='table table-dark'>

<thead>
  <tr>
    <td>ID</td>
    <td>Title</td>
    <td>video URL</td>
    <td>Date And Time</td>
    <td></td>
  </tr>
</thead>
<tbody>
  {
    historylist.map(item=>(
      <tr>
      <td>{item.vid}</td>
      <td>{item.title}</td>
      <td>{item.url}</td>
      <td>{item.date}</td>
      <td>
        <button className='btn'>
        <i className="fa-solid fa-trash fa-2xl" onClick={()=>{deleteHis(item.id)}} style={{color: "#cf0707",}} />
        </button>
      </td>
     </tr>

    ))

  }
 
</tbody>

</table>:
<h3>No History</h3>
    }
    

    
    </>
  )
}

export default History