import React, { Fragment } from 'react'
import Testimonials from '../components/Testimonials'

const About = () => {
    return (

        <Fragment>
            <div className="test_text">
                <p>
                    We are always looking out for your success story about investing. 
                    Invest wants to know how you were able to learn and grow from our 
                    platform and resources. Feel free to write to us about your journey in 
                    investment and you could be featured on our website. Check out some 
                    testimonials from our users down below. <br />
                </p>
            </div>
            <div className="review_testimonial">
                <h2>Testimonials</h2>  
            </div>
            <Testimonials />

        </Fragment>
        
    )
}

export default About
