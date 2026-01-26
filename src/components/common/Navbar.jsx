import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
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
                                <Link to={'/register'}
                                    className='btn btn-outline-dark px-4 rounded-2 border-1 py-2 fs-5 fw-medium' type='button' >
                                    Create account
                                </Link>
                                <Link to={'/login'}
                                    className='btn btn-outline-dark px-4 rounded-2 border-1 py-2 fs-5 fw-medium' type='button' >
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-md sticky-top body-bg border border-bottom-1 border-top-0 border-end-0 border-start-0 border-dark py-3 body-bg">
                <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
                    <div className='d-flex align-items-center gap-1'>
                        <img src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="" width={30} height={30} />
                        <a className="navbar-brand font-monospace fw-bold" href="#">Crafted Voices</a>
                    </div>

                    <button className="navbar-toggler border-0 body-bg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav nav-underline justify-content-center gap-lg-3 text-center mx-auto mt-3 mt-lg-0 me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link text-black fw-semibold fs-6" aria-current="page" href="#">Home</Link>
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
    )
}

export default Navbar