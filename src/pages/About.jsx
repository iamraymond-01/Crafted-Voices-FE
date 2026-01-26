import React from 'react'

const About = () => {
    return (
        <>

            {/* Our Story Section */}
            <div className="container py-5" style={{ maxWidth: "800px" }}>
                <h1 className="fw-bold mb-4 text-center display-5">Everyone has a story to tell</h1>

                <div className="text-center text-muted mb-4">
                    <small>By Crafted Voices • Updated Today</small>
                </div>

                <p className="lead">At crafted voices we lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident, dicta voluptates, id a sint quidem dignissimos aliquam vitae corporis voluptas iure recusandae quis, consectetur alias asperiores ullam similique! Accusantium!</p>

                <div className="my-4 text-center">
                    <img src="https://images.unsplash.com/photo-1664273739027-e865a6443e94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuZGVyc3RhbmRpbmd8ZW58MHx8MHx8fDA%3D" alt="" className="img-fluid rounded shadow-sm" style={{ height: '500px', width: '500px' }} />
                </div>

                <h4 className="fw-semibold mt-5 mb-3">Ultimately, our goal is to deepen our collective understanding of various worldwide cutures and art stories through the power of writing.</h4>

                <p>We believe Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, cupiditate officiis laboriosam facilis consequuntur dignissimos quos et provident odio nemo quasi, placeat ex minus magni dolore nobis ipsum non iste?
                    Cum quae commodi culpa. Molestias dolorem velit quaerat nihil tempora? Ipsum, vero amet reprehenderit impedit temporibus repellendus hic quisquam quam? Iure, asperiores. Dignissimos sit vero dolorum velit, esse quaerat magnam.
                    Obcaecati nulla voluptates cum veniam, maiores aliquam sit aliquid, perspiciatis velit alias ex voluptatum? Architecto eum, illum natus unde minima quas provident a, modi, nesciunt explicabo dignissimos suscipit non quo!</p>

                <div className="my-4 text-center">
                    <img src="https://plus.unsplash.com/premium_photo-1667891219118-1c067aa2afee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbm5lY3Rpb258ZW58MHx8MHx8fDA%3D" alt="" className="img-fluid rounded shadow-sm" />
                </div>

                <p>Over 100 million people Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi alias minima dolorem facere eaque culpa impedit illum error similique at modi reiciendis animi, odio consequuntur, eum, unde suscipit odit!
                    Inventore accusamus animi expedita facilis unde quibusdam dignissimos, assumenda autem ea excepturi fuga omnis officia libero dolorum harum distinctio, non dolorem cumque at maiores sapiente quisquam nemo repellendus? Optio, temporibus!
                    Totam, voluptate! Facere, deserunt, voluptatibus asperiores vel maiores adipisci soluta consequuntur optio et perspiciatis eligendi, facilis accusamus voluptatum numquam eaque doloribus. Ipsam laborum debitis quo molestias labore eligendi ex consequatur!
                    Esse eligendi labore reiciendis nulla, reprehenderit asperiores tempore deserunt neque, recusandae atque ad. Debitis, cum. Nam nostrum asperiores eligendi ratione! Molestiae, aliquid ducimus commodi eveniet officia itaque quos quas sint.
                    Distinctio nostrum necessitatibus rerum reiciendis fugiat officia non laborum, veniam obcaecati aspernatur nihil ex? Esse nam eum cum fuga ipsum dolore natus at ratione impedit laudantium? Enim quisquam possimus sunt.</p>

            </div>

            {/* Contact Us */}
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
        </>
    )
}

export default About