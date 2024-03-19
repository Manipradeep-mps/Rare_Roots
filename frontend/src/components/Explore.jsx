import React, { useState,useEffect} from 'react';
import Header from './Header';
import Allpost from './Allpost';
import './../styles/Explore.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Explore() {
  const navigate=useNavigate()


  useEffect(() => {
    checkauth()
    getpost();
    // window.addEventListener('unload',handleunload)
    // return ()=>{
    // window.removeEventListener('unload',handleunload)
    // }
    // function handleunload(){
    //   localStorage.removeItem('userdata');
    // }
  }, [])

  const [data,setdata]=useState([]);
  
  function checkauth(){
     if(localStorage.getItem('userdata')==null)
     {
      toast.error("Unauthorized !, Please Login to Continue",{
        position:'top-right',
        onClose:()=>{
          navigate('/login')

        },
        autoClose:1000
      })
      navigate('/login')
      
       
     }
  }



  async function getpost() {
    try {
      const res = await fetch('https://rare-roots.onrender.com/api/getAllPosts',{
         method:"GET",
         headers:{
           'Authorization':`Bearer ${localStorage.getItem('userdata')}`
         }
      });
      const info = await res.json();
      setdata(info);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  if(data.length==0)
      {
        return (
          <img  src='https://img1.picmix.com/output/stamp/normal/0/8/0/6/2306080_b674e.gif'></img>
        )
      }
  return (
    <>
      <Header />
      <div>
        <div className='posts'>
          {data.map((res, index) => {
            return <Allpost key={index} res={res} />;
          })}
        
          
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Explore;
