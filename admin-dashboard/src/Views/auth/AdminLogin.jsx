import { useRef , useState} from 'react';
import {useDispatch} from "react-redux";
import {admin_login} from "../../store/reducers/AuthReducer.js";


const AdminLogin = () => {
    const dispatch = useDispatch()
    const [data,setData] = useState([])
    //console.log(data)
    let email, password = useRef()


    const HandleSubmit = (e) =>{
        e.preventDefault()
        let Email = email.value
        let Password = password.value
        const result = {
            Email,Password
        }
        setData(result)
        dispatch(admin_login(data))
    }

    return (
        <section className='bg_body'>
            <div className='container'>
                <div className="row login_style">
                    <div className="col-md-4 card p-4">
                        <h4>Wellcome To Admin Panel</h4>
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
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;