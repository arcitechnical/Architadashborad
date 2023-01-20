import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; 
import { Form, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Trending from "./Trending";
import Store from "./Store";
import About from "./About";
import Testimonial from "./Testimonial";
import Contact from "./Contact ";
import Footer from "./Footer";
import Signin from "./Signin";



function Layout()
    {
        return(
            <>
            <Header/>
        
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signin" element={<Signin />} />  
                 </Routes>
            <Footer/>
            </>
        )
    }
export default Layout;