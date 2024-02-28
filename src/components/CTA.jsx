import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in 
        mind?</p><br className='sm:block hidden'/>
        Let's develope somthing beautiful together!
        <Link to='/contact' className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA