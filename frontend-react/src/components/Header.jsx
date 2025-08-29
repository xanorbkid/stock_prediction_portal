import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
    <nav className='navbar container align-items-start'>
        <a href="" className='navbar-brand text-dark'>Stock Prediction Portal</a>

        <div>
            <Button text="Login" class="btn-outline-info" />
            &nbsp;
            <Button text="Register" class="btn-info" />

            {/* <a href="" className='btn btn-info'>Register</a> */}
        </div>

    </nav>
   
    </>
  )
}

export default Header