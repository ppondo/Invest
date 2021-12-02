import React, { Fragment } from 'react'
import Testimonials from '../components/Testimonials';
import {Link} from '@mui/material'
const About = () => {
    return (

        <Fragment>
            <div className="test_text">
                <h1> Reviews </h1>
                <p>
                    We are always looking out for your success story about investing. 
                    Invest wants to know how you were able to learn and grow from our 
                    platform and resources. Feel free to write to us about your journey in 
                    investment and you could be featured on our website. Check out some 
                    testimonials from our users down below. <br />
                    
                </p>
            </div>
            <div className="review_testimonial">
            </div>
            <Testimonials />
            <div className="link">
                <Link style={{fontWeight:"bold"}}  href="https://forms.gle/RwrKiBnofKtrAnfR7">
                    Click here to give us a review
                </Link>
            </div>

        </Fragment>
        
    )
}

export default About
