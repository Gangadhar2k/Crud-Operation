import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { Api_Url } from '../Apiurl';
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const [name,setname] =useState('')
    const [email,setemail] =useState('')
    const [phone,setphone] =useState('')
    const [id,setId] =useState()
    
      // destructure
   

      useEffect(()=>{
      setname(localStorage.getItem("name"))
       setemail( localStorage.getItem("email"))
       setphone(localStorage.getItem("phone"))
       setId(localStorage.getItem("id"))
      },[])
        

      const navigate = useNavigate();
      const handleSubmit = async(e)=>{
        e.preventDefault();
            await axios.put(Api_Url+id,{
                name,
                email,
                phone
            })
        
            navigate('/read')
      }
    
   

    
  return (<>
    <h1>Create Operation</h1>
    <form className=' card card-body'>
        <div className='mb-3'>
            <label htmlFor="name">Name</label>
            <input className='form-control form' onChange={(e)=>setname(e.target.value)} value={name} type='text' id='name' placeholder='Enter Your Name'/>
        </div>
        <div  className='mb-3'>
            <label htmlFor="email">Email</label>
            <input className='form-control form' id='email' onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder='Enter Your Email'/>
        </div>
        <div  className='mb-3'>
            <label htmlFor="phone">Phone</label>
            <input className='form-control form' id='phone' onChange={(e)=>setphone(e.target.value)} value={phone} type='number' placeholder='Enter Your Number'/>
        </div>

        <button onClick={handleSubmit} className='btn btn-success'>Update</button>
    </form></>
  )
}

export default Update