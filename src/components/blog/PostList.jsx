import React from 'react'
import PostCards from './PostCards'

const PostList = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <p className='text-muted'>No Posts</p>;
    }

    return (
        <div className='row g-4'>
            {posts.map(post => (
                <div className="col-12 col-sm-6 col-lg-4" key={post._id}>
                    <PostCards post={post} />
                </div>
            ))}
        </div>
    );
};

export default PostList