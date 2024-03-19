import React from 'react'
import { Link } from 'react-router-dom'
import Postinfo from './Postinfo'

function Allpost(props) {
  const {res}=props
  //console.log(res._id)
  return (
    <>
        <div className='Allposts'>
             <div>
              <Link to={`/explore/${res._id}`} className='post-link'>
               <img src={res.product.image}></img>
               <div className='post-text'>{
                   `${res.product.name}`
                }</div>
              </Link>
              </div>
             
        </div>
    </>
  )
}

export default Allpost
