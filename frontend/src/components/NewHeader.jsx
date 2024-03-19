import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/NewHeader.css'
function NewHeader() {

  return (
    <div className='newheader'>
      <img src='https://events-mps.s3.amazonaws.com/Logo.NIiMh9mR4eLRKIcSfWg--' className='himage'></img>
        <nav className='newnav'>

            <Link to='/register' className='nn'>Register</Link>
            <Link to='/login' className='nn'>Login</Link>
            
            

        </nav>
        

    </div>
  )
}

export default NewHeader
