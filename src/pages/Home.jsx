import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostList from '../components/blog/PostList'
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://crafted-voices-be.vercel.app/api/posts?limit=3')
            .then(res => setPosts(res.data.posts))
    }, []);

    return (
        <>
            {/* FIRST SECTION (Hero) */}
            <section className="py-4 py-md-5">
                <div className="container">
                    <div className="row align-items-center gy-5">

                        {/* Text */}
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <h1 className="font-1 mb-4">
                                Community, Culture & Arts
                            </h1>
                            <p className="fw-medium fs-5">
                                Sharing stories, insights, and perspectives on the creative expressions that shape our world.
                            </p>
                            <Link
                                to="/blog"
                                className="btn btn-lg btn-dark rounded-pill px-5 fw-semibold mt-3"
                            >
                                Explore
                            </Link>
                        </div>

                        {/* Carousel */}
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide w-100"
                                style={{ maxWidth: "350px" }}
                            >
                                <div className="carousel-indicators">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={i}
                                            className={i === 0 ? "active" : ""}
                                        ></button>
                                    ))}
                                </div>

                                <div className="carousel-inner rounded shadow">
                                    {[
                                        "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg",
                                        "https://images.unsplash.com/photo-1631884838987-66692ad7368e",
                                        "https://plus.unsplash.com/premium_vector-1727274000289-99ec6fa1f744",
                                        "https://images.unsplash.com/photo-1608657282762-d925604f8f03",
                                        "https://images.unsplash.com/vector-1761410507404-8787caa462ac",
                                    ].map((src, index) => (
                                        <div
                                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                                            key={index}
                                        >
                                            <img
                                                src={src}
                                                className="d-block w-100"
                                                alt="slide"
                                                style={{ height: "400px", objectFit: "cover" }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>

                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECOND SECTION */}
            <section className="py-5">
                <div className="container">
                    <h1 className="text-center mb-4 fw-bolder text-secondary-emphasis">
                        Latest Articles
                    </h1>
                    <PostList posts={posts} />
                </div>
            </section>

            {/* THIRD SECTION */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h1 className="fw-bold text-center display-5 mb-4">
                        Everyone has a story to tell
                    </h1>

                    <p className="lead text-center mx-auto" style={{ maxWidth: "800px" }}>
                        Crafted Voices is a quiet place on the internet where words are allowed to breathe.
                        A space shaped for stories—unrushed, intentional, and deeply human.
                    </p>

                    <p className="text-center mx-auto mt-4" style={{ maxWidth: "800px" }}>
                        A quiet space where words drift softly and stories take shape.
                        Crafted Voices is a home for thoughtful expression—where ideas are shaped with care, and every voice is allowed to linger.
                        <br /><br />
                        <strong>Unhurried. Intentional. Human.</strong>
                    </p>
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="py-5 text-center bg-body-secondary">
                <div className="container">
                    <h4 className="fw-bolder fs-3">Join Our Weekly Digest</h4>
                    <p className="font-monospace fw-medium">
                        Get Exclusive Promotions & Updates Straight Into Your Inbox
                    </p>

                    <div className="mx-auto" style={{ maxWidth: "500px" }}>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Enter your email here"
                        />

                        <div className="form-check text-start mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                required
                            />
                            <label className="form-check-label text-muted">
                                I agree to Crafted Voices Privacy and Cookie Policy.
                            </label>
                        </div>

                        <button className="btn btn-dark px-5 py-2 rounded-pill">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home