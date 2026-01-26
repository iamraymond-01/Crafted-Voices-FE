import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Comment = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // Get current user from localStorage
    useEffect(() => {
        const getUser = () => {
            try {
                const userStr = localStorage.getItem('user');
                console.log('User string from localStorage:', userStr);

                if (userStr && userStr !== 'undefined' && userStr !== 'null') {
                    const user = JSON.parse(userStr);
                    console.log('Parsed user:', user);
                    setCurrentUser(user);
                } else {
                    console.log('No valid user in localStorage');
                    setCurrentUser(null);
                }
            } catch (error) {
                console.error('Error parsing user:', error);
                setCurrentUser(null);
            }
        };

        getUser();
    }, []);

    // Fetch comments
    const fetchComments = useCallback(async () => {
        if (!postId) {
            console.log('No postId provided');
            return;
        }

        setLoading(true);
        setError('');
        try {
            console.log('Fetching comments for post:', postId);
            const res = await axios.get(`https://crafted-voices-be.onrender.com/api/comments/${postId}`);
            console.log('Comments API Response:', res.data);

            if (res.data && Array.isArray(res.data.comments)) {
                setComments(res.data.comments);
                console.log('Comments loaded:', res.data.comments.length);
            } else {
                console.error('Unexpected response format:', res.data);
                setError('Failed to load comments - unexpected format');
                setComments([]);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);

            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
                setError(error.response.data?.message || `Error ${error.response.status}: Failed to load comments`);
            } else if (error.request) {
                console.error('No response received');
                setError('Network error. Please check your connection.');
            } else {
                console.error('Request error:', error.message);
                setError('Failed to load comments');
            }
            setComments([]);
        } finally {
            setLoading(false);
        }
    }, [postId]);

    useEffect(() => {
        if (postId) {
            fetchComments();
        }
    }, [postId, fetchComments]);

    const submitComment = async (e) => {
        e.preventDefault();
        const trimmedText = text.trim();

        if (!trimmedText) {
            setError('Comment cannot be empty');
            return;
        }

        if (!postId) {
            setError('Post ID is missing');
            return;
        }

        if (!currentUser) {
            setError('Please login to comment');
            return;
        }

        setSubmitting(true);
        setError('');

        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('Please login to comment');
                setSubmitting(false);
                return;
            }

            const response = await axios.post(
                `https://crafted-voices-be.onrender.com/api/comments/${postId}`,
                {
                    content: trimmedText
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Comment submitted successfully!', response.data);

            setText('');
            setTimeout(() => fetchComments(), 500);

        } catch (err) {

            if (err.response) {
                if (err.response.status === 401) {
                    setError('Session expired. Please login again.');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    setCurrentUser(null);
                } else if (err.response.status === 400) {
                    setError(err.response.data?.message || 'Invalid comment data');
                } else if (err.response.status === 404) {
                    setError('Post not found');
                } else if (err.response.status === 500) {
                    setError(`Server error: ${err.response.data?.message || 'Internal server error'}`);
                } else {
                    setError(`Error ${err.response.status}: ${err.response.data?.message || 'Unknown error'}`);
                }
            } else if (err.request) {
                setError('Network error. Is the backend server running?');
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setSubmitting(false);
        }
    };


    // Format date
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            const now = new Date();
            const diffMs = now - date;
            const diffMins = Math.floor(diffMs / 60000);
            const diffHours = Math.floor(diffMs / 3600000);
            const diffDays = Math.floor(diffMs / 86400000);

            if (diffMins < 1) return 'Just now';
            if (diffMins < 60) return `${diffMins}m ago`;
            if (diffHours < 24) return `${diffHours}h ago`;
            if (diffDays < 7) return `${diffDays}d ago`;

            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            });
        } catch {
            return 'Recently';
        }
    };

    return (
        <div className="card border-0 shadow-sm">
            <div className="card-body p-4">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="card-title mb-0 fw-bold">
                        <i className="fas fa-comments me-2 text-primary"></i>
                        Comments ({comments.length})
                    </h5>
                    <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={fetchComments}
                        disabled={loading}
                    >
                        <i className="fas fa-sync-alt me-1"></i>
                        Refresh
                    </button>
                </div>

                {/* Error Alert */}
                {error && (
                    <div className="alert alert-danger mb-4" role="alert">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        {error}
                    </div>
                )}

                {/* Comment Form */}
                {currentUser ? (
                    <form className="mb-4" onSubmit={submitComment}>
                        <div className="mb-3">
                            <label className="form-label fw-medium">
                                Comment as {currentUser.fullName || currentUser.email}
                            </label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Share your thoughts..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                disabled={submitting}
                                maxLength={500}
                            />
                            <div className="form-text">
                                {text.length}/500 characters
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setText('')}
                                disabled={submitting}
                            >
                                Clear
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={!text.trim() || submitting}
                            >
                                {submitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                        Posting...
                                    </>
                                ) : (
                                    'Post Comment'
                                )}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="alert alert-info mb-4">
                        <i className="fas fa-info-circle me-2"></i>
                        Please <Link to="/login">login</Link> to add comments.
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-4">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2">Loading comments...</p>
                    </div>
                )}

                {/* Comments List */}
                {!loading && comments.length > 0 ? (
                    <div className="mt-4">
                        {comments.map((comment) => (
                            <div key={comment._id} className="mb-3 pb-3 border-bottom">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                            style={{ width: '40px', height: '40px' }}>
                                            {comment.user?.fullName?.charAt(0) || 'U'}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="fw-bold mb-1">
                                                {comment.user?.fullName || 'Anonymous'}
                                            </h6>
                                            <small className="text-muted">
                                                {formatDate(comment.createdAt)}
                                            </small>
                                        </div>
                                        <p className="mb-0">{comment.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : !loading && (
                    <div className="text-center py-4">
                        <p className="text-muted">No comments yet. Be the first to comment!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;