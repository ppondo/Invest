import React from 'react'
import Testimonials from '../components/Testimonials'


const About = () => {
    return (
        <div style={
            {   display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                height: '90vh'
            }}>
          <h1>About</h1>  
          <Testimonials />
        </div>
    )
}

export default About
