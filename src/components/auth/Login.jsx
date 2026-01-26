import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { updateEmail, updateName } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [alertMsg, setalertMsg] = useState("");
    const [alertType, setalertType] = useState("success");

    useEffect(() => {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) backdrop.remove();
    }, []);

    useEffect(() => {
        if (alertMsg) {
            const timer = setTimeout(() => setalertMsg(""), 5000);
            return () => clearTimeout(timer);
        }
    }, [alertMsg]);//Auto-close Alert

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: async (values) => {
            try {
                setloading(true)
                setalertMsg('')

                let response = await axios.post('https://crafted-voices-be.vercel.app//api/v1/login', values)
                console.log('Login response:', response.data);

                if (response.data.status) {
                    let user = response.data.user

                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.user));

                    dispatch(updateName(user.fullName))
                    dispatch(updateEmail(user.email))

                    setalertType("success")
                    setalertMsg(response.data.message);

                    setTimeout(() => {
                        navigate('/home');
                    }, 1500);
                }

                setloading(false)

            } catch (error) {
                setalertType("danger")
                setalertMsg(error.response.data.message);

                setloading(false)
            }
        },
    })

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg p-3 border border-bottom-1 border-top-0 border-end-0 border-start-0 border-dark">
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <div className='d-flex justify-content-center justify-content-sm-start align-items-center gap-2'>
                        <img src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="" width={30} height={28} />
                        <h5 className="font-monospace fw-bolder">Crafted Voices</h5>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link to={'/'} className='btn btn-dark btn-sm'>Back</Link>
                    </div>
                </div>
            </nav>
            <div className='container my-5 p-4 p-md-0'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-8 col-lg-5'>
                        <h3 className='text-center fw-bold fs-2' style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Login</h3>

                        <p className='font-monospace text-center'>
                            Don't have an account? {' '}
                            <Link to={'/register'} className='text-dark fs-6'>Sign Up</Link>
                        </p>

                        {/* Alert */}
                        {alertMsg && (<div className={`alert alert-${alertType} alert-dismissible fade show mt-4`} role='alert'>{alertMsg}
                            <button type='button' className='btn-close' onClick={() => setalertMsg("")}> </button> </div>)}

                        <form className='mt-3'>
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label fw-semibold">Email</label>
                                <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" placeholder="johndoe@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label fw-semibold">Password</label>
                                <input type="text" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" placeholder="••••••••" />
                            </div>

                            <div className="d-grid">
                                <button type="submit" onClick={formik.handleSubmit} className="btn btn-dark rounded-pill">
                                    {loading ? "Logging in..." : "Log in"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login