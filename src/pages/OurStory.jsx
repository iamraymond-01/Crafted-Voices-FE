import React from 'react'

const OurStory = () => {
  return (
    <div className='body-bg'>
      <div className="container py-5" style={{ maxWidth: "800px" }}>
        <h1 className="fw-bold mb-4 text-center display-5">Everyone has a story to tell</h1>

        <div className="text-center text-muted mb-4">
          <small>By Crafted Voices • Updated Today</small>
        </div>

        <p className="lead">At crafted voices we lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa provident, dicta voluptates, id a sint quidem dignissimos aliquam vitae corporis voluptas iure recusandae quis, consectetur alias asperiores ullam similique! Accusantium!</p>

        <div className="my-4 text-center">
          <img src="https://images.unsplash.com/photo-1664273739027-e865a6443e94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuZGVyc3RhbmRpbmd8ZW58MHx8MHx8fDA%3D" alt="" className="img-fluid rounded shadow-sm" style={{height:'500px', width:'500px'}}/>
        </div>

        <h4 className="fw-semibold mt-5 mb-3">Ultimately, our goal is to deepen our collective understanding of various worldwide cutures and art stories through the power of writing.</h4>

        <p>We believe Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, cupiditate officiis laboriosam facilis consequuntur dignissimos quos et provident odio nemo quasi, placeat ex minus magni dolore nobis ipsum non iste?
          Cum quae commodi culpa. Molestias dolorem velit quaerat nihil tempora? Ipsum, vero amet reprehenderit impedit temporibus repellendus hic quisquam quam? Iure, asperiores. Dignissimos sit vero dolorum velit, esse quaerat magnam.
          Obcaecati nulla voluptates cum veniam, maiores aliquam sit aliquid, perspiciatis velit alias ex voluptatum? Architecto eum, illum natus unde minima quas provident a, modi, nesciunt explicabo dignissimos suscipit non quo!</p>

        <div className="my-4 text-center">
          <img src="https://plus.unsplash.com/premium_photo-1667891219118-1c067aa2afee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbm5lY3Rpb258ZW58MHx8MHx8fDA%3D" alt="" className="img-fluid rounded shadow-sm"/>
        </div>

        <p>Over 100 million people Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi alias minima dolorem facere eaque culpa impedit illum error similique at modi reiciendis animi, odio consequuntur, eum, unde suscipit odit!
          Inventore accusamus animi expedita facilis unde quibusdam dignissimos, assumenda autem ea excepturi fuga omnis officia libero dolorum harum distinctio, non dolorem cumque at maiores sapiente quisquam nemo repellendus? Optio, temporibus!
          Totam, voluptate! Facere, deserunt, voluptatibus asperiores vel maiores adipisci soluta consequuntur optio et perspiciatis eligendi, facilis accusamus voluptatum numquam eaque doloribus. Ipsam laborum debitis quo molestias labore eligendi ex consequatur!
          Esse eligendi labore reiciendis nulla, reprehenderit asperiores tempore deserunt neque, recusandae atque ad. Debitis, cum. Nam nostrum asperiores eligendi ratione! Molestiae, aliquid ducimus commodi eveniet officia itaque quos quas sint.
          Distinctio nostrum necessitatibus rerum reiciendis fugiat officia non laborum, veniam obcaecati aspernatur nihil ex? Esse nam eum cum fuga ipsum dolore natus at ratione impedit laudantium? Enim quisquam possimus sunt.</p>

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
            <hr className='my-4'/>

            <p className='text-center fw-semibold font-monospace small mb-0'>&copy; 2025 Crafted voices - All rights reserved.</p>
        </div>
        
    </div>
  )
}

export default OurStory