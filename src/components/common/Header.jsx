import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../../redux/appSlice";
import { updateEmail } from "../../redux/appSlice";
import './Header.css'

const Header = () => {
    const dispatch = useDispatch();

    const fullName = useSelector((state) => state.fullName);
    const email = useSelector((state) => state.email);
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const userInitial = fullName
        ? fullName.charAt(0).toUpperCase()
        : "G";

    const handleLogout = () => {
        dispatch(updateName("Guest"));
        dispatch(updateEmail("Guest"));
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm border border-bottom-1 border-top-0 border-end-0 border-start-0 border-dark">
                <div className="container-fluid px-3">

                    {/* Brand Logo & Name */}
                    <div className='d-flex align-items-center gap-1 me-4'>
                        <img src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="" width={25} height={30} />
                        <a className="navbar-brand font-monospace fw-bold" href="#">Crafted Voices</a>
                    </div>

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

                    {/* Navigation Links */}
                    <div className="collapse navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav nav nav-underline mx-auto gap-1 gap-lg-3 my-2 my-lg-0">
                            <li className="nav-item">
                                <Link
                                    to={'/home'}
                                    className="nav-link position-relative px-2 py-2 fw-medium text-dark"
                                    activeClassName="active"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to={'/blog'}
                                    className="nav-link position-relative px-2 py-2 fw-medium text-dark"
                                    activeClassName="active"
                                >
                                    Blog
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to={'/gallery'}
                                    className="nav-link position-relative px-2 py-2 fw-medium text-dark"
                                    activeClassName="active"
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to={'/about'}
                                    className="nav-link position-relative px-2 py-2 fw-medium text-dark"
                                    activeClassName="active"
                                >
                                    About
                                </Link>
                            </li>

                            {user.isAdmin && (
                                <Link to="/admin" className="nav-link text-warning">
                                    Admin
                                </Link>
                            )}
                        </ul>

                        {/* User Profile */}
                        <div className="dropdown ms-auto">
                            <button
                                className="btn dropdown-toggle d-flex align-items-center border-0"
                                data-bs-toggle="dropdown" aria-expanded="false"
                            >
                                <div className="rounded-circle bg-gradient-primary text-white d-flex justify-content-center align-items-center"
                                    style={{ width: 40, height: 40 }}>
                                    {userInitial}
                                </div>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                                <li className="dropdown-item d-flex align-items-center">
                                    <i className="fas fa-user-circle me-3 text-muted"></i>
                                    <div className="fw-medium">Your Profile</div>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="px-3 py-2">
                                    <div className="fw-semibold">{fullName}</div>
                                </li>
                                <li className="px-3 py-2">
                                    <div className="fw-semibold">{email}</div>
                                </li>

                                <li><hr className="dropdown-divider" /></li>

                                <li>
                                    <button onClick={handleLogout} className="dropdown-item text-danger">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
