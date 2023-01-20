import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import availableitems from "./jsondata";

function Store() {
    localStorage.setItem("mydata1", JSON.stringify(availableitems));

    const [items, setitems] = useState(availableitems);
    const filterItem = (categitems) => {
        const updatedItems = availableitems.filter((currentitems) => {
            return currentitems.category === categitems;
        })
        setitems(updatedItems);
    }
    return (
        <>
            <section className="shop">
                <div className="container py-5">
                    <div className="row py-5 ">
                        <div className="col-lg-8 m-auto text-center">
                            <h1>Explore Our Store</h1>
                            <h6>Pick Your Product From Our Store</h6>
                        </div>
                    </div>
                    <button className="btn0" type="button" onClick={() => filterItem('Diary')}>Diary</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Vegetable')}>Vegetables</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Sprouts')}>Sprouts</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Diary and breakfast')}>Diary and breakfast</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Dal')}>Dal</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Tea,coffee')}>Tea&coffee</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Spiece')}>Spiece</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Cold drinks & Juice')}>Cold drinks & Juices</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Instant and Frozen Food')}>Instant & Frozen food</button>
                    <button className="btn0" type="button" onClick={() => filterItem('Dry Fruits')}>Dry Fruits</button>

                    <div className="row">
                        {items.map((store) => (
                            <div className="col-lg-3 text-center">
                                <div className="card border-0 bg-light mb-3">
                                    <div className="card-body">
                                        <img src={store.image} className="img-fluid" />
                                    </div>
                                </div>
                                <h6>{store.item}</h6>
                                <p>{store.itemprice}</p>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-6 text-center m-auto">
                            <button className="btn1">Shop MOre</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Store;