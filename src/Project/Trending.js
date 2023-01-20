import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const trendingitems =[
    {
        image:'https://www.designerpeople.com/wp-content/uploads/2019/08/awesome-healthy-food-packaging-design-3.jpg',
        items:'Energy Food',
        itemprice:'35/-'
    },
    {
        image:'https://www.bigbasket.com/media/uploads/p/l/40186071_3-patwa-farm-fresh-green-peas.jpg',
        items:'Frozen Peas',
        itemprice:'220/-'
    },
    {
       image:'https://5.imimg.com/data5/PK/AY/MY-35065415/sasya-farm-fresh-paneer-500x500.jpg',
       items:'Fresh Farm Paneer',
       itemprice:'120/-'
    },
    {
        image:'https://ik.imagekit.io/dunzo/tr:w-$w$,h-$h$,cm-pad_resize/bzlVOEx2UDlGKzdOMWR0YXI5eGEzQT09-product_image.jpg',
        items:'Eggs',
        itemprice:'60/-'
     },
     
];

function Trending()
    {
        localStorage.setItem("mydata1",JSON.stringify(trendingitems));
        return(
            <>
                <section className="product">
                    <div className="container py-5">
                        <div className="row py-5 ">
                            <div className="col-lg-5 m-auto text-center">
                                <h1>What's Trending</h1>
                                <h6>Be Healthy Organic Food</h6>
                            </div>
                        </div>
                        <div className="row">
                            {trendingitems.map((trending)=>(
                                <div className="col-lg-3 text-center">
                                    <div className="card border-0 bg-light mb-3">
                                        <div className="card-body">
                                            <img src={trending.image} className="img-fluid"/>
                                        </div>
                                    </div>
                                    <h6>{trending.items}</h6>
                                    <p>{trending.itemprice}</p>
                                </div>
                            ))}   
                        </div>
                        <div className="row">
                            <div className="col-lg-6 text-center m-auto">
                                <button className="btn1">Click for MOre</button>
                            </div>
                        </div>
                    </div>
                </section>   
            </>
        )
    }
export default Trending;