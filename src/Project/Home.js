import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Home()
    {
        return(
            <>
                <section className="main">
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-lg-7 pt-5 text-center">
                                <h1 className="pt-4">Nature Has Always Cared For Us!</h1>
                                <button className="btn1 mt-3">More tips</button>
                            </div>
                        </div>
                    </div>
                </section>
                
            </>

        )
    }
export default Home;