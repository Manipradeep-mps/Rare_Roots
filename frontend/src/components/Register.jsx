import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './../styles/Register.css'
import { ToastContainer,toast } from 'react-toastify';
import { useEffect } from 'react';
function Register() {
  useEffect(()=>{
    checktoken()

  },[])

  function checktoken(){
      if(localStorage.getItem('userdata')!=null)
      {
           navigate('/explore');
      }
  }
    const navigate=useNavigate();

    const savetodb=()=>{
        const name=document.getElementById('name').value;
        const password=document.getElementById('password').value;
        const email=document.getElementById('email').value;
        const ph=document.getElementById('ph').value;
        fetchdata();
        
         async function fetchdata(){
           await fetch("http://localhost:8000/register",{
            method:"POST",
            body:JSON.stringify({
              "name":name,
              "email":email,
              "password":password,
              "phoneno":ph
            }),
            headers: {
              'Content-Type': 'application/json'
            }
    
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(data=="Success")
            {
            navigate('/login')
            }
            else
            {
              toast.warn(data,{
                position:'top-right',
                autoClose:3000
              })

            }
           })
           .catch(err=>{
            toast.error("Something went wrong, Please try again later",{
              position:'top-right'
            })
            console.log(err)
           })
        }
      }

  return (
    <>
    <div className="register-container">
    
      <div className='register-form'>
         <label>Name</label>
         <input type="text" id="name" required></input><br></br><br></br>
         <label>Email</label>
         <input type="email" id="email" required></input><br></br><br></br>
         <label>Password</label>
         <input type="password" id="password" required></input><br></br><br></br>
         <label>Phone</label>
         <input type="number" id="ph" required></input><br></br><br></br>
         <button type="submit" onClick={savetodb}>Register</button>
    </div>
    <div className="register-login">
        <p>Already have an account</p>
        <Link to={'/login'}>
            <button>Login</button>
        </Link>
        
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Register
