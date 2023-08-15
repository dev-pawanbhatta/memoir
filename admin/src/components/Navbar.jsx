import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import '../styles/Navbar.css'

export default function Navbar() {
    const url = useLocation().pathname;
    document.title = "Dashboard | Memoir"
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container px-5">
                    <Link className="navbar-brand" href="#">
                        <span data-bs-toggle="offcanvas" href="#sidebar" role="button" aria-controls="sidebar">
                            <i className="fas fa-sliders-h"></i>
                        </span>
                    </Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link" href="#" id="messages" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-inbox position-relative" aria-hidden="true"><span style={{ fontSize: "0.5rem" }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        99+
                                        <span className="visually-hidden">unread messages</span>
                                    </span></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="messages">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link" href="#" id="notifications" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-bell position-relative" aria-hidden="true"><span style={{ fontSize: "0.5rem" }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        99+
                                        <span className="visually-hidden">unread messages</span>
                                    </span></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="notifications">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link" href="#" id="account" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="rounded-circle border d-flex justify-content-center align-items-center"
                                        style={{ width: "25px", height: "25px" }}
                                        alt="Avatar">
                                        <i class="fas fa-user-alt "></i>
                                    </div>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="account">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start bg-dark text-light" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="sidebar" aria-labelledby="sidebarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="sidebarLabel">Sidebar</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="side-items">
                        <div className="side-item">
                            <Link to='/' className={(url == '/' ? 'side-link active' : 'side-link')}>Dashboard</Link>
                        </div>
                        <div className="side-item">
                            <Link to='/categories' className={(url == '/categories' ? 'side-link active' : 'side-link')}>Categories</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
