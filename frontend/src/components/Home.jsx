import React from 'react'
import { Link } from 'react-router-dom'
import NewHeader from './NewHeader'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  function navfromhome(){
    navigate('login')

  }
  return (
   <>
   <NewHeader/>
    <div className='H-container'>
       <span className='start'> <strong><span className='greet'>Welcome to RareRoots,</span> </strong><br/>your exclusive gateway to a world 
       of exceptional products, meticulously curated <br/>for those who seek the extraordinary. </span><br/>

       <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add21737efd7005aae65_hero-top%402x.png' className='firstimage'></img><br/>

      <span className='second'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At RareRoots, we pride ourselves on offering a unique platform that cuts out the middleman, 
      ensuring a direct and authentic connection 
      between producers of rare herbs and nuts and the discerning customers who appreciate them.</span><br/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className='innercontainer'>
         <div className='image'>
        <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add2d36c718fe4185989_why-1%402x.png'className='secondimage'></img>
        </div>
  
        <div className='point'>
         <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' ></img>
                      <span className='pt1'>&nbsp;&nbsp;Empower producers to directly upload and showcase their products, fostering
                           a direct link between producers and consumers.</span><br></br><br></br><br></br>
         <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg'></img>
                     <span className='pt1'>&nbsp;&nbsp;Buyers can connect with producers, eliminating intermediaries,
                      ensuring transparency, and promoting fair pricing for both parties.</span><br></br><br></br><br></br>
         <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg'></img>
                      <span className='pt1'>&nbsp;&nbsp;Highlight transparent pricing structures, ensuring that 
                      producers receive fair compensation while offering competitive prices to consumers.</span><br></br><br></br><br></br>
          <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg'></img>
                      <span className='pt1'>&nbsp;&nbsp;Enhance user experience by providing a map interface, 
                      enabling consumers to locate producers nearby and explore regional agricultural specialties.</span><br></br><br></br><br></br>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <span className='high'>Explore a diverse range of rare agricultural products, including herbs and nuts, through a visually appealing display.</span>
    <br></br>
    <br></br>
    <br></br>
    <div className='final'>
      <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add2e188105c63993f93_cta-3%402x.png' alt='Image Loading'></img>
      <br></br>
      <br></br>
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the garden of innovation, our platform blossoms as a sanctuary for rare agricultural treasures. 
      Connecting producers to consumers, fostering transparency and fairness, our digital marketplace is
       the fertile ground where authenticity meets efficiency.
       <br></br>
      <br></br>
      <br></br>
      <span className='quote'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discover, Connect, Thrive—where 
      the roots of agriculture intertwine with the branches of progress.</span>
      <br></br>
      <button className='btt' onClick={navfromhome}>Get Started&nbsp;{'>'}</button>
      <br></br>
      <br></br>
      <br></br>

    </div>
     
      



   </div>
   </>
  )
}

export default Home
