import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api_Url } from '../Apiurl';
import { useNavigate } from 'react-router-dom';

const Read = () => {

  const [data,setData] = useState([]);

  const fetchdataFromApi = async()=>{
      const res = await axios(Api_Url);
      setData(res.data)
    }



  useEffect(()=>{
    fetchdataFromApi()
  },[])


  const handledelete = async(id) =>{
    await axios.delete(Api_Url+id)
    fetchdataFromApi()
  } 

const navigate = useNavigate()
  const handleupdate =({name,email,phone,id})=>{
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)
    localStorage.setItem("id",id)
    navigate('/update')
  }

  return (
    <>
    <h1>Read /DELETE /UPDATE Operation</h1>
    <div className="container">
    <table className='table table-dark table-hover'>

<thead >
  <tr > 
    <th >Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Delete</th>
    <th>Update</th>
   </tr>
  </thead>
  <tbody>
  {
  data.map((item)=>(
   <tr className='table-success' key={item.id}>
    <td >{item.name}</td>
    <td>{item.phone}</td>
    <td>{item.email}</td>
    <td><button className='btn btn-warning'  onClick={()=>handledelete(item.id)}>Delete</button></td>
    <td><button className='btn btn-success'  onClick={()=>handleupdate(item)}>update</button></td>
   </tr>
  ))
 }
  </tbody>


</table>
    </div>
    </>
  )
}

export default Read