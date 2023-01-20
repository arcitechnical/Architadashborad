import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const productdetails =[
    {
        image:'https://blog.sathguru.com/wp-content/uploads/2021/10/How-modern-dairy-products-are-replenishing-the-dairy-market-in-India-1.jpg',
        productname:'Diary Products',
        productdetails:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
        image:'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2glMjB2ZWdldGFibGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        productname:'Fresh Vegetables',
        productdetails:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
       image:'https://images.unsplash.com/photo-1521483451569-e33803c0330c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VyZWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600',
       productname:'Cereals',
       productdetails:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    }

];
function About()
    {
        localStorage.setItem("mydata1",JSON.stringify(productdetails));
        return(
            <>
                <section className="about">
                    <div className="container py-5">
                        <div className="row py-5 ">
                            <div className="col-lg-8 m-auto text-center">
                                <h1>Welcome to our Organic food Store</h1>
                                <h6>Be Healthy Organic Food</h6>
                            </div> 
                        </div>
                        <div className="row ">
                        {productdetails.map((product)=>(
                                <div className="col-lg-4 ">
                                    <img src={product.image} className="img-fluid mb-3"/>
                                    <h5>{product.productname}</h5>
                                    <p>{product.productdetails}</p>
                                </div>
                              ))}   
                        </div>
                        <div className="row">
                            <div className="col-lg-6 text-center m-auto">
                                <button className="btn1">Know MOre</button>
                            </div>
                        </div>
                    </div>
                </section>   
            </>
        )
    }
export default About;