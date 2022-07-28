import * as React from 'react'
import { Link } from 'gatsby'

const getYear = () => {
    const date = new Date();
    return date.getFullYear();
}

const Footer = () => {
    return(
        <footer>
            <p>Copyright © {getYear()} Osiris Resources. All Rights Reserved.</p>
            <Link to="/privacy">Privacy Policy</Link>
        </footer>
    )
}

export default Footer