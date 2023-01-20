import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Contact()
    {
        return(
            <>
                <section className="contact">
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-lg-5 m-auto text-center">
                                <h1 >Contact Us</h1>
                                <h6>Always be in touch with Us</h6>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-lg-9 m-auto">
                                <div className="row">
                                  <div className="col-lg-4">
                                     <h5>Location</h5>
                                     <p>Indirapuram, Ghaziabad,201014</p>
                                 
                               
                                     <h5>Phone</h5>
                                     <p>+91 987678890</p>
                                 
                                
                                     <h5>Email</h5>
                                     <p>example@gmail.com</p>
                                     </div>
                                     <div className="col-lg-7 ">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control bg-light" placeholder="First name"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control bg-light" placeholder="Last Name"/>
                                            </div>

                                        </div>
                                        <div className="row py-3">
                                            <div className="col-lg-12">
                                                <textarea className="form-control bg-light" cols="10" rows="5" placeholder="Any query"/>
                                            </div>
                                        </div>
                                        <button className="btn1 mt-3">Submit</button>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
            </>

        )
    }
export default Contact;