import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [data,setData] = useState([])
    console.log(data)
    let name , email, password = useRef()
    const HandleSubmit = (e) =>{
        e.preventDefault()
        let Name = name.value
        let Email = email.value
        let Password = password.value
        const result = {
            Name,Email,Password
        }
        setData(result)
    }
    return (
        <section className='bg_body'>
        <div className='container'>
            <div className="row login_style">
                <div className="col-md-4 card p-4">
                    <h4>Wellcome To Ecommerce</h4>
                    <p>Please Register Your Account</p>
                    <form onSubmit={HandleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input ref={(input)=>name=input} type="text" className="form-control" name='name' id="name" placeholder='Enter Your Name'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input ref={(input)=>email=input} type="email" className="form-control" name='email' id="email" placeholder='Enter Your Email'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input ref={(input)=>password=input} type="password" className="form-control" name='password' id="password" placeholder='Enter Your Password'/>
                        </div>
              

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox"/>
                            <label className="form-check-label">I agree to privacy policy & tearms</label>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className='text-center pt-3'>
                            <p>Already Have An Account ? 
                                <Link to='/login'>sign in</Link>
                            </p>
                        </div>
                        <div className='text-center'>
                            <p>Or</p>
                        </div>
                        <div className='go'>
                            <div className='go_btn'><i className="bi bi-google"></i></div>
                            <div className='fb_btn'><i className="bi bi-facebook"></i></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Register;