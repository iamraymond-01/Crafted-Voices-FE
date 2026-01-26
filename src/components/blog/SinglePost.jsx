import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Comment from '../comments/Comment';

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                setError('');
                const res = await axios.get(`https://crafted-voices-be.vercel.app/api/posts/${id}`);
                
                if (res.data) {
                    setPost(res.data);
                } else {
                    setError('Post not found');
                    setPost(null);
                }
            } catch (err) {
                console.error('Error fetching post:', err);
                if (err.response) {
                    setError(err.response.data?.message || 'Failed to load post');
                } else if (err.request) {
                    setError('Network error. Please check your connection.');
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPost();
        } else {
            setError('Invalid Post ID');
            setLoading(false);
        }
    }, [id]);

    // Loading state
    if (loading) {
        return (
            <div className="container py-5">
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <span className="ms-3">Loading post...</span>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    {error}
                </div>
                <div className="text-center mt-3">
                    <Link to="/blog" className="btn btn-dark">
                        <i className="fas fa-arrow-left me-2"></i>
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container py-5">
                <div className="alert alert-warning" role="alert">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    Post not found
                </div>
                <div className="text-center mt-3">
                    <Link to="/blog" className="btn btn-dark">
                        <i className="fas fa-arrow-left me-2"></i>
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="mb-4">
                <Link to="/blog" className="btn btn-outline-dark btn-sm">
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to All Posts
                </Link>
            </div>

            {/* Post Card */}
            <div className="card shadow-sm border-0 mb-5 overflow-hidden">
                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="card-img-top img-fluid"
                        style={{ 
                            maxHeight: '500px', 
                            objectFit: 'cover',
                            width: '100%'
                        }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                        }}
                    />
                )}
                
                <div className="card-body p-4 p-lg-5">
                    {/* Post Header */}
                    <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                            <h1 className="card-title fw-bold mb-2">{post.title}</h1>
                            <div className="text-muted">
                                <i className="far fa-calendar me-1"></i>
                                {new Date(post.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                    </div>
                    
                    {/* Post Content */}
                    <div className="post-content mb-5">
                        <div className="card-text fs-5 text-dark lh-lg">
                            {post.content.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <Comment postId={id} />
        </div>
    );
};

export default SinglePost;