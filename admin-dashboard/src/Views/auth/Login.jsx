import React, { useRef , useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [data,setData] = useState([])
    console.log(data)
    let email, password = useRef()


    const HandleSubmit = (e) =>{
        e.preventDefault()
        let Email = email.value
        let Password = password.value
        const result = {
            Email,Password
        }
        setData(result)
    }

    return (
        <section className='bg_body'>
        <div className='container'>
            <div className="row login_style">
                <div className="col-md-4 card p-4">
                    <h4>Wellcome To Ecommerce</h4>
                    <p>Please Sign Your Account</p>
                    <form onSubmit={HandleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input ref={(input)=>email=input} type="email" className="form-control" name='email' id="email" placeholder='Enter Your Email'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input ref={(input)=>password=input} type="password" className="form-control" name='password' id="password" placeholder='Enter Your Password'/>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </div>
                        <div className='text-center pt-3'>
                            <p>Don't Have An Account ? 
                                <Link to='/register'>sign up</Link>
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

export default Login;