import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <>
            <div className="container sticky-top">
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid mx-md-3">
                        <a className="navbar-brand">  <h4 className='text-center web-Name '>EXPLORE <span className='text-warning'>NATIONS</span></h4></a>
                        <form className="d-flex" role="search">
                        <Link to={"/"}><button className="btn search-btn " type="submit">Explore</button></Link>    
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default navbar
