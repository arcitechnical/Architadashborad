import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Link} from "react-router-dom";

function Header()
    {
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" href="#">Organic</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/trending">Trending</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/store">Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/testimonial">Testimonial</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin">Signin</Link>
                    </li>
                    </ul>
                   
                </div>
                </div>
                </nav>
            </>

        )
    }
export default Header;