import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeletePostButton = ({ postId, postTitle, onDeleteSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const canDelete = user.isAdmin;

    const handleDelete = async () => {
        if (!canDelete) return;
        
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(
                `https://crafted-voices-be.onrender.com/api/posts/${postId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            console.log('Post deleted:', response.data);
            
            if (onDeleteSuccess) {
                onDeleteSuccess(postId);
            } else {
                // Redirect to blog page
                navigate('/blog');
            }
            
        } catch (error) {
            console.error('Error deleting post:', error);
            alert(error.response?.data?.message || 'Failed to delete post');
        } finally {
            setLoading(false);
            setShowConfirm(false);
        }
    };

    if (!canDelete) return null;

    return (
        <>
            {/* Delete Button */}
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => setShowConfirm(true)}
                title="Delete Post"
                disabled={loading}
            >
                {loading ? (
                    <span className="spinner-border spinner-border-sm"></span>
                ) : (
                    <i className="fas fa-trash"></i>
                )}
            </button>

            {/* Confirmation Modal */}
            {showConfirm && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger">
                                    <i className="fas fa-exclamation-triangle me-2"></i>
                                    Confirm Deletion
                                </h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowConfirm(false)}
                                    disabled={loading}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p className="fw-bold">Are you sure you want to delete this post?</p>
                                <p className="text-muted">
                                    Post: <strong>"{postTitle}"</strong>
                                </p>
                                <p className="text-danger small">
                                    <i className="fas fa-info-circle me-1"></i>
                                    This action cannot be undone.
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-outline-secondary" 
                                    onClick={() => setShowConfirm(false)}
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-danger" 
                                    onClick={handleDelete}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            Deleting...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-trash me-2"></i>
                                            Delete Permanently
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeletePostButton;