import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useForm } from "react-hook-form";
function Register()
    {

        const { register, handleSubmit} = useForm();
        const onSubmit = (data) => 
        {
            console.log(data);
        }
       
        return(
            <>
                <section id="reg">
                    <div className="signup-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Register</h2>
                            <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                                <div className="form-group ">
                                    <div className="row">
                                        <div className="col"><input type="text" className="form-control" {...register("person.fname")} placeholder="FirstName" required /></div>
                                        <div className="col"><input type="text" className="form-control" {...register("person.lname")} placeholder="LastName"required/></div>
                                    </div>        	
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" {...register("person.email")} placeholder="EmailId" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" {...register("person.password")}placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"{...register("person.confirmpassword")}placeholder="Confirmpassword" required />
                                </div>        
                                <div className="form-group">
                                    <label className="form-check-label"><input type="checkbox" required /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                                </div>
                        </form>
                        <div className="text-center">Already have an account? <a href="/signin">Sign in</a></div>
                    </div>
                   
                </section>
          
            </>
        )
    }
export default Register;