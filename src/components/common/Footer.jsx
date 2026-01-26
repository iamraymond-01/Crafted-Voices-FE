import React from 'react'

const Footer = () => {
    return (
        <div className='px-4 px-md-5 pt-5 pb-2 border border-bottom-0 border-top-1 border-end-0 border-start-0 border-dark'>
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
            <hr className='my-4'/>

            <p className='text-center fw-semibold font-monospace small mb-0'>&copy; 2025 Crafted voices - All rights reserved.</p>
        </div>
    )
}

export default Footer