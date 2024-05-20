import { lazy } from 'react';

const Login = lazy(()=> import('../../Views/auth/Login'))
const Register = lazy(()=> import('../../Views/auth/Register'))
const AdminLogin = lazy(()=> import('../../Views/auth/AdminLogin'))

const PublicRoute = [
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : "/register",
        element : <Register/>
    },
    {
        path : "/admin/login",
        element : <AdminLogin/>
    }
]


export default PublicRoute;