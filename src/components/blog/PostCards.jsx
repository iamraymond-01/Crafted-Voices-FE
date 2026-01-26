import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import DeletePostButton from './DeletePost';

const PostCards = ({ post, onDeleteSuccess }) => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const isAdmin = user.isAdmin;

    return (
        <div className="card border-0 shadow-sm hover-lift transition-all h-100 hover-effect">
            {/* Image with overlay */}
            <div className="position-relative overflow-hidden rounded-top">
                {post.image && (
                    <img
                        src={post.image}
                        className="card-img-top"
                        alt={post.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                )}
                {!post.image && (
                    <div className="bg-gradient-primary" style={{ height: '200px' }}>
                        <div className="h-100 d-flex flex-column align-items-center justify-content-center text-white">
                            <i className="fas fa-file-alt fa-3x mb-3"></i>
                            <span className="h6 mb-0">Blog Post</span>
                        </div>
                    </div>
                )}

                {/* Date Badge */}
                <div className="position-absolute top-0 end-0 m-3">
                    <div className="bg-white rounded-circle p-2 shadow-sm">
                        <div className="text-center">
                            <div className="fw-bold text-dark">
                                {new Date(post.createdAt).getDate()}
                            </div>
                            <div className="small text-muted">
                                {new Date(post.createdAt).toLocaleString('default', { month: 'short' })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">
                    {post.title}
                </h5>
                <p className="card-text text-muted flex-grow-1 mb-4 line-clamp-3">
                    {post.content.substring(0, 120)}...
                </p>

                <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                    <div className="d-flex align-items-center">
                        <div className="text-muted small">
                            {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                    </div>

                    <Link
                        to={`/post/${post._id}`}
                        className="btn btn-link text-primary fst-italic fw-light text-decoration-none p-0"
                    >
                        Read more...
                    </Link>
                </div>

                 {/* Admin Delete Button - Top Right */}
                {isAdmin && (
                    <div className="position-absolute top-0 start-0 m-2">
                        <DeletePostButton 
                            postId={post._id}
                            postTitle={post.title}
                            onDeleteSuccess={onDeleteSuccess}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostCards