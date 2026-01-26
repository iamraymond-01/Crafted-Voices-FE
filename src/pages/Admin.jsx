import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from '../components/blog/PostList'
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updateName } from '../redux/appSlice';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email)
  const userInitial = fullName ? fullName.charAt(0).toUpperCase() : "A";

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = () => {
    dispatch(updateName("Guest"));
    dispatch(updateEmail("Guest"));
    localStorage.clear();
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Title, content and image URL are required");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://crafted-voices-be.vercel.app//api/posts",
        {
          title,
          content,
          image, // URL string
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Post created successfully");
      console.log({ title, content, image });

      // reset
      setTitle("");
      setContent("");
      setImage("");

      fetchPosts();
    } catch (error) {
      console.error(error);
      alert("Failed to create post");
    }
  };



  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get("https://crafted-voices-be.vercel.app//api/posts?limit=20");
      setPosts(res.data.posts);

    } catch (err) {
      setError("Failed to load posts");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {/* Nav section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm border border-bottom-1 border-top-0 border-end-0 border-start-0 border-dark">
        <div className="container-fluid px-3">
          <span className="navbar-brand fw-bold fs-4 text-dark">
            Admin Dashboard
          </span>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <div>
              <Link to={'/blog'} className='text-decoration-none text-secondary font-monospace'>Visit Blog →</Link>
            </div>

            {/* User Dropdown */}
            <div className="dropdown ms-auto">
              <button
                className="btn d-flex align-items-center gap-2 border-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div
                  className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center fw-semibold"
                  style={{ width: 40, height: 40 }}
                >
                  {userInitial}
                </div>
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 p-2">
                <li className="px-3 py-2">
                  <div className="fw-semibold">{fullName}</div>
                  <small className="text-muted">{email}</small>
                </li>

                <li><hr className="dropdown-divider my-1" /></li>

                <li>
                  <button
                    className="dropdown-item text-danger fw-medium"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid my-4">
        <div className="row g-4">

          {/* Form Section — Sticky on large screens */}
          <div className="col-12 col-lg-4">
            <div className="card p-3 shadow-sm position-lg-sticky top-0">
              <h4 className="mb-3">Create New Post</h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-medium">Post Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Post Content</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your post content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Post Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://example.com/image.jpg"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-dark w-100 fw-medium">
                  Create Post
                </button>
              </form>
            </div>
          </div>

          {/* Posts Section — Scrollable */}
          <div className="col-12 col-lg-8">
            <div className="card p-3 shadow-sm" style={{ height: "85vh" }}>
              <h5 className="mb-3 fw-bold d-flex align-items-center gap-2 fs-4">
                All Posts
                <span className="badge text-bg-dark">{posts.length}</span>
              </h5>

              <div className="overflow-auto pe-2" style={{ height: "100%" }}>
                {loading && <p className="text-center">Loading posts...</p>}
                {error && <p className="text-danger text-center">{error}</p>}
                {!loading && !error && <PostList posts={posts} />}
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Admin
