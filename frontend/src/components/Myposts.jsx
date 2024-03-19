import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from './Header';
import Allpost from './Allpost';
import { useNavigate } from 'react-router-dom';
import '../styles/Myposts.css'

function Myposts() {
    const navigate=useNavigate();
    useEffect(()=>{
       getmypost();
      //  window.addEventListener('unload',handleunload)
      //  return ()=>{
      //  window.removeEventListener('unload',handleunload)
      //  }
      //  function handleunload(){
      //    localStorage.removeItem('userdata');
      //  }
    },[])
    function nav(){
        navigate('/myproducts')
    }
 
    const [data,setdata]=useState([])
    let access
    let curruseremail
    let objid
    async function getmypost(){
        await display()
        await getobjid()
        // console.log(objid)
           const reqobj={
             objectid:objid
           }
           const res=await fetch(`https://rare-roots.onrender.com/api/getMyPost?objectid=${objid}`,{
             method:"GET",
             headers:{
               'Authorization':`Bearer ${localStorage.getItem('userdata')}`
             }
           })
           const info=await res.json();
           console.log(info)
           setdata(info);
       }
       async function getobjid(){
         const res=await fetch('https://rare-roots.onrender.com/login/obj',{
           method:"POST",
         body:JSON.stringify({
           "email":`${curruseremail}`
         }),
         headers: {
           'Content-Type': 'application/json'
       
         }
       })
         const info= await res.json();
         console.log(info)
         objid=info[0]._id
       }
       async function display(){
        // Your JWT Access Token
    var accessToken = `${localStorage.getItem('userdata')}`;
    access=accessToken;
    
    // Split the token into its three parts: header, payload, and signature
    var tokenParts = accessToken.split('.');
    
    // Access the payload (second part)
    var encodedPayload = tokenParts[1];
    
    // Decode the Base64Url-encoded payload
    var decodedPayload = atob(encodedPayload.replace(/-/g, '+').replace(/_/g, '/'));
    
    // Parse the JSON data from the decoded payload
    var payloadObject = JSON.parse(decodedPayload);
    
    // Access the information in the payload
    curruseremail=payloadObject.useremail;
    
      }
 if(data.length==0)
 {
    return(
        <h3>Loading......</h3>
    )
 }
  return (
    <>
    <div className='backbutton'>
      <button onClick={nav}>Back</button>
    </div>
    <div>
      <div className='posts'>
        {data.map((res, index) => {
          return <Allpost key={index} res={res} />;
        })}
      
        
      </div>
    </div>
  </>
  )
}

export default Myposts
