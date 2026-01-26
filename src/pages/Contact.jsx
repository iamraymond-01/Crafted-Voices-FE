import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className=''>
            <div className=''>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border border-bottom-1 border-top-0 border-end-0 border-start-0 border-dark bg-dark text-light">
                                <h5 className="font-monospace fw-bolder">Crafted Voices</h5>
                                <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='row justify-content-center mb-3'>
                                    <div className=' col-8 col-md-5'>
                                        <img src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="" width={200} height={150} />
                                    </div>
                                </div>
                                <div className='d-grid gap-2 mb-3'>
                                    <Link to={'/login'}
                                        className='btn btn-outline-dark px-4 rounded-2 border-1 py-2 fs-5 fw-medium' type='button' >
                                        Sign in
                                    </Link>
                                    <Link to={'/register'}
                                        className='btn btn-outline-dark px-4 rounded-2 border-1 py-2 fs-5 fw-medium' type='button' >
                                        Create account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-md sticky-top border border-bottom-1 border-top-0 border-end-0 border-start-0 border-dark py-3">
                    <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
                        <div className='d-flex align-items-center gap-1'>
                            <img src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="" width={30} height={30} />
                            <a className="navbar-brand font-monospace fw-bold" href="#">Crafted Voices</a>
                        </div>

                        <button className="navbar-toggler border-0 body-bg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav justify-content-center gap-lg-3 text-center mx-auto mt-3 mt-lg-0 me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link active text-black fw-semibold fs-6" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/story'} className="nav-link text-black fw-semibold fs-6" aria-current="page" href="#">Our story</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/contact'} className="nav-link text-black fw-semibold fs-6">Contact</Link>
                                </li>
                            </ul>

                            <div className=''>
                                <a href='' className="btn btn-dark rounded-5 px-3 fw-semibold" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='container p-4 p-md-0 py-3 py-sm-4 py-md-5'>
                <div className='row align-items-center justify-content-center g-4'>
                    <div className='col-12 col-md-8 col-lg-6'>
                        <h2 className='text-center'>Send Us a Message</h2>
                        <div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control text-light nav-bg" id="fullName" placeholder="John Doe" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="email" class="form-control text-light nav-bg" id="email" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="tel" class="form-control text-light nav-bg" id="exampleFormControlInput1" placeholder="070-123-456-67" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control text-light nav-bg" id="exampleFormControlTextarea1" rows="4" placeholder='Type here . . .'></textarea>
                            </div>
                        </div>
                        <button className='btn btn-dark w-100'>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact