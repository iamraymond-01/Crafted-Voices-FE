import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { updateName } from '../../redux/appSlice';
import { updateEmail } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
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

    //Auto-close Alert
    useEffect(() => {
        if (alertMsg) {
            const timer = setTimeout(() => setalertMsg(""), 5000);
            return () => clearTimeout(timer);
        }
    }, [alertMsg]);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },

        onSubmit: async (values) => {
            try {
                setloading(true)
                let response = await axios.post('https://crafted-voices-be.vercel.app/api/v1/signUp', values)

                if (response.data.status) {
                    let user = response.data.user
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('user', JSON.stringify(user))
                    
                    dispatch(updateName(user.fullName))
                    dispatch(updateEmail(user.email))
                    

                    setalertType("success");
                    setalertMsg(response.data.message);

                    setTimeout(() => {
                        navigate('/home');
                    }, 1500);
                }

                setloading(false)
            } catch (error) {
                setalertType("danger");
                setalertMsg(error.response.data.message);
                setloading(false);
            }
        },

        validationSchema: yup.object({
            fullName: yup.string("").required("Full Name is required"),
            email: yup.string("").email("Invalid email format").required("Email is required"),
            password: yup.string("").required("Password is required").min(6, "Password must be at least 6 characters").matches(
                /[A-Z]+/,
                "Password must contain at least one uppercase letter"
            ).matches(/\d+/, "Password must contain at least one number"),
            confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm password is required"),
        })

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
            <div className='container my-3 my-md-5 p-4 p-md-0'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-8 col-lg-5'>
                        <h3 className='text-center fw-bold fs-2' style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Create account</h3>
                        <p className='font-monospace text-center'>
                            Already have an account? {' '}
                            <Link to={'/login'} className='text-dark fs-6'>Sign in</Link>
                        </p>

                        {/* Alert */}
                        {alertMsg && (<div className={`alert alert-${alertType} alert-dismissible fade show mt-4`} role='alert'>{alertMsg}
                            <button type='button' className='btn-close' onClick={() => setalertMsg("")}></button> </div>)}


                        <form className='mt-5'>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label fw-semibold">Full Name</label>
                                <input type="text" name='fullName' onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${(formik.touched.fullName && formik.errors.fullName) && 'is-invalid'} ${(formik.touched.fullName && !formik.errors.fullName) && 'is-valid'}`} placeholder="John Doe" />
                                {formik.touched.fullName && <small className='text-danger'>{formik.errors.fullName}</small>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label fw-semibold">Email</label>
                                <input type="text" className={`form-control ${(formik.touched.email && formik.errors.email) && 'is-invalid'} ${(formik.touched.email && !formik.errors.email) && 'is-valid'}`} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="johndoe@gmail.com" />
                                {formik.touched.email && <small className='text-danger'>{formik.errors.email} </small>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label fw-semibold">Password</label>
                                <input type="password" className={`form-control ${(formik.touched.password && formik.errors.password) && 'is-invalid'} ${(formik.touched.password && !formik.errors.password) && 'is-valid'}`} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="••••••••" />
                                {formik.touched.password && <small className='text-danger'>{formik.errors.password} </small>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label fw-semibold">Confirm Password</label>
                                <input type="password" className={`form-control ${(formik.touched.confirmPassword && formik.errors.confirmPassword) && 'is-invalid'} ${(formik.touched.confirmPassword && !formik.errors.confirmPassword) && 'is-valid'}`} name='confirmPassword' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="••••••••" />
                                {formik.touched.confirmPassword && <small className='text-danger'>{formik.errors.confirmPassword} </small>}
                            </div>

                            <small>By clicking "Create Account", you accept Crafted Voices's Terms of Service and Privacy Policy.</small>

                            <div className="d-grid mt-3">
                                <button type="submit" className="btn btn-dark rounded-pill" onClick={formik.handleSubmit} disabled={loading}>
                                    {loading ? "Creating acount..." : "Create account"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register