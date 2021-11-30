import React from 'react'
import Home from "../components/Home"
const Index = () => {
    return (
        <div style={
            {   display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                height: '90vh'
            }}>
                <Home />
        </div>
    )
}

export default Index
