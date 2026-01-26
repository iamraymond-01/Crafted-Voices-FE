import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div className='body-bg p-4 p-md-5'>
                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header border border-bottom-1 border-top-0 border-end-0 border-start-0 border-dark bg-dark text-light">
                                <h5 className="font-monospace fw-bolder">Crafted Voices</h5>
                                <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className='row justify-content-center mb-3'>
                                    <div className=' col-8 col-md-5'>
                                        <img src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="" width={200} height={150} />
                                    </div>
                                </div>
                                <div className='d-grid gap-2 mb-3'>
                                    <button className='btn btn-outline-dark px-4 rounded-2 border-1 py-2 fs-5 fw-medium' type='button'>
                                        Sign in
                                    </button>
                                    <button className='btn btn-outline-dark px-4 rounded-2 border-1 py-2 fs-5 fw-medium' type='button'>
                                        Create account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-around align-items-center gap-4 text-center text-md-start mb-5'>
                    <div className='d-flex flex-column gap-4 align-items-center align-items-md-start w-100 w-md-50'>
                        <h1 className='font-1 w-100 w-md-75'>Community, Culture & Arts</h1>
                        <p className='fw-medium fs-5' style={{ fontFamily: 'sans-serif' }}>Sharing stories from creators and their cultures.</p>
                        <a href="" className='btn btn-lg btn-dark rounded-5 px-5 fw-semibold' data-bs-toggle="modal" data-bs-target="#exampleModal">Start reading</a>
                    </div>

                    <div className='w-100 w-md-50 d-flex justify-content-center mt-4 mt-md-0'>
                        <div id="carouselExampleIndicators" class="carousel slide" style={{ width: '90%', maxWidth: '350px' }}>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg" class="d-block w-100" alt="..." height={400} width={200} />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1631884838987-66692ad7368e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" class="d-block w-100" alt="..." height={400} width={200} />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://plus.unsplash.com/premium_vector-1727274000289-99ec6fa1f744?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" class="d-block w-100" alt="..." height={400} width={200} />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1608657282762-d925604f8f03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" class="d-block w-100" alt="..." height={400} width={200} />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://images.unsplash.com/vector-1761410507404-8787caa462ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=757" class="d-block w-100" alt="..." height={400} width={200} />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='body-bg px-4 px-md-5 pt-5 pb-2 border border-bottom-0 border-top-1 border-end-0 border-start-0 border-dark'>
                    <div className='container'>
                        <div className='row justify-content-between align-items-start text-center text-sm-start gy-4'>

                            <div class="col-12 col-sm-6 col-md-4 mb-4">
                                <div className='d-flex justify-content-center justify-content-sm-start align-items-center gap-2 mb-3'>
                                    <img src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="" width={30} height={28} />
                                    <h5 className="font-monospace fw-bolder mb-0">Crafted Voices</h5>
                                </div>
                                <p className='small'>
                                    We tell stories of markers, dreamers, and communities shaping the future with their hands and hearts.
                                </p>
                                <div className='d-flex justify-content-center justify-content-sm-start gap-3 mt-2'>
                                    <button className='border-0 bg-transparent fs-5'><i className="fa-brands fa-square-instagram"></i></button>
                                    <button className='border-0 bg-transparent fs-5'><i className="fa-brands fa-facebook"></i></button>
                                    <button className='border-0 bg-transparent fs-5'><i className="fa-brands fa-square-x-twitter"></i></button>
                                    <button className='border-0 bg-transparent'><i className="fa-brands fa-linkedin fs-5"></i></button>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-md-7 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-evenly gap-4'>
                                <div>
                                    <h5 className="fw-semibold">Explore</h5>
                                    <p className="mb-1">About</p>
                                    <p className="mb-1">Maker stories</p>
                                    <p className="mb-1">Culture & code</p>
                                    <p className="mb-1">Community projects</p>
                                    <p className="mb-1">Contact</p>
                                </div>
                                <div class="">
                                    <h5 className="fw-semibold">Legal</h5>
                                    <p className="mb-1">Privacy policy</p>
                                    <p className="mb-1">Terms & condition</p>
                                    <p className="mb-1">FAQ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='my-4' />

                    <p className='text-center fw-semibold font-monospace small mb-0'>&copy; 2025 Crafted voices - All rights reserved.</p>
                </div>

            </div>
        </>
    )
}

export default LandingPage