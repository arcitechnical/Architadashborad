import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'font-awesome/css/font-awesome.css';

function Footer()
    {
        return(
            <>
                 <section className="news">
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-lg-9 m-auto text-center">
                                <h1 >Join Our Secret Society</h1>
                                 <input type="text" placeholder="Enter Your Email" className="px-3"/>
                                 <button className="btn2">Submit</button>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-11">
                                <div className="row">
                                   <div className="col-lg-3 py-3">
                                    <h5 className="pb-3"> Customer Care</h5>
                                    <p>Regular</p>
                                    <p>Ontime</p>
                                    <p>Always</p>
                                   </div>
                                   <div className="col-lg-3 py-3">
                                   <h5 className="pb-3"> Customer Care</h5>
                                    <p>Regular</p>
                                    <p>Ontime</p>
                                    <p>Always</p>
                                   </div>
                                   <div className="col-lg-3 py-3">
                                    <h5 className="pb-3"> Customer Care</h5>
                                    <p>Regular</p>
                                    <p>Ontime</p>
                                    <p>Always</p>
                                   </div>
                                   <div className="col-lg-3 py-3">
                                   <h5 className="pb-3"> Customer Care</h5>
                                    <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-google-plus" aria-hidden="true"></i></span>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <p className="text-center"> Copyright @2021 All rights reserved</p>
                    </div>
                </section>
            </>

        )
    }
export default Footer;