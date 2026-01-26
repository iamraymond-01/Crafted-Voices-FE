import React, { useEffect, useState } from 'react'
import PostList from '../components/blog/PostList';
import axios from 'axios';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError("");

            try {
                const res = await axios.get("https://crafted-voices-be.vercel.app//api/posts");

                setPosts(res.data.posts);
            } catch (error) {
                setError("Failed to load posts. Please try again.")
                console.log(error)
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <p className="text-center mt-5">Loading posts...</p>;
    }

    if (error) {
        return <p className="text-center text-danger mt-5">{error}</p>;
    }
    return (
        <>
            <div className="container-fluid px-3 px-md-4 px-lg-5 py-4 py-md-5">

                {/* Header Section */}
                <div className='d-flex flex-column align-items-center text-center my-3'>
                    <div className="mb-2">
                        <img
                            src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
                            alt="Artistic pattern"
                            className="img-fluid rounded shadow"
                            style={{ maxWidth: '350px', height: '100px' }}
                        />
                    </div>
                    <h2 className="mb-3 fst-italic mb-2">Crafted Voices</h2>
                    <h1 className="text-center mb-4 fw-bolder text-secondary-emphasis" style={{ fontFamily: 'sans-serif' }}>All Blog Posts</h1>
                </div>

                {/* Blog Posts */}
                <PostList posts={posts} />
            </div>
        </>

    )
}

export default Blog