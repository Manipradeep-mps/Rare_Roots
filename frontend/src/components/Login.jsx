import React, { useEffect } from 'react'
import { Link, useFetcher } from 'react-router-dom'
import Register from './Register'
import { useNavigate } from 'react-router-dom';
import './../styles/Login.css'
import { ToastContainer, toast } from 'react-toastify';

function Login() {

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

   

   function check(){
    const password=document.getElementById('password').value;
    const email=document.getElementById('email').value;
    fetchdata();
  


    async function fetchdata(){
        await fetch("https://rare-roots.onrender.com/login",{
         method:"POST",
         body:JSON.stringify({
           "email":email,
           "password":password
         }),
         headers: {
           'Content-Type': 'application/json'
         }
 
        })
        .then(res=>res.json())
        .then(data=>{
          localStorage.setItem('userdata',data.accessToken)
            
            if(data.message=="Login successful !!!")
            {
                toast.success("Login Successful!",{
                position: 'top-right',
                onClose: ()=>{
                  navigate('/explore')
                },
                autoClose:1000

                 })
                 
                 
                 
            }
             else {
              toast.error("Invalid Credentials",{
                position:'top-right'
              })
            }
         
        })
        .catch(err=>{
         console.log(err)
        })
     }
    }

  return (
    <>
    <div className='login-container'>

        <div className='form'>
         <label>Email</label>
         <input type="email" id="email" required></input><br></br><br></br>
         <label>Password</label>
         <input type="password" id="password" required></input><br></br><br></br>
         <button type="submit" onClick={check}>Login</button>

       </div>
      </div>
    
    <div className='register-login'>
         <p>Don't have an account</p>
          <Link to={'/register'}>
            <button>Register</button>
          </Link>
    </div>
    <ToastContainer/>

  
    </>
  )
}

export default Login
