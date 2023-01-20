import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signin() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (

        <>
            <section id="signin">
                <div className="login">
                    <h1 className="text-center">Hello Again!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                        <div className="form-group was-validated">
                            <label className="form-label" htmlFor="email">Email address</label>
                            <input className="form-control" type="email" id="email" {...register("person.email")} required />
                            <div className="invalid-feedback">
                                Please enter your email address
                            </div>
                        </div>
                        <div className="form-group was-validated">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" {...register("person.password")} required />
                            <div className="invalid-feedback">
                                Please enter your password
                            </div>
                            <small className=" forgotpass"><a href="/reset">Forgot password</a></small>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-success" type="submit">Signin</button>
                        </div>


                    </form>
                    <div className="text-center mt-3">Do you have an account? <Link to="/form">Create an account</Link></div>
                </div>

            </section>
        </>
    )
}
export default Signin;