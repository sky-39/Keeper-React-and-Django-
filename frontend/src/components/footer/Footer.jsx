import React from 'react'
import './footer.css'

function Footer() {
    const curYear = new Date().getFullYear()
    return (
        <div className='footer'>
            <p>Copyright © {curYear}</p>
        </div>
    )
}

export default Footer