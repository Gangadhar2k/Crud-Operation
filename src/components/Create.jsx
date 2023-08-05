import axios from 'axios';
import React, { useState } from 'react'
import {Api_Url} from "../Apiurl"
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [data,setData] =useState({
    name:'',
    email:'',
    phone:''

  })

  // destructure
  const {name,email,phone} = data;

  const handleChange = (e) =>{
    setData((prev)=>(
      {   ...prev,[e.target.id]:e.target.value
        }
    ))
  }

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
   await axios.post(Api_Url,data);
    console.log(data)
 
    navigate('/read')
  }



  return (
    <>
    <h1>Create Operation</h1>
    <form className=' card card-body'>
        <div className='mb-3'>
            <label htmlFor="name">Name</label>
            <input className='form-control form' onChange={handleChange} value={name} type='text' id='name' placeholder='Enter Your Name'/>
        </div>
        <div  className='mb-3'>
            <label htmlFor="email">Email</label>
            <input className='form-control form' id='email' onChange={handleChange} value={email} type="email" placeholder='Enter Your Email'/>
        </div>
        <div  className='mb-3'>
            <label htmlFor="phone">Phone</label>
            <input className='form-control form' id='phone' onChange={handleChange} value={phone} type='number' placeholder='Enter Your Number'/>
        </div>

        <button onClick={handleSubmit} className='btn btn-success'>Add</button>
    </form>
    
    </>

  )
}

export default Create