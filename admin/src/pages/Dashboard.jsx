
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="content">
                {/* <div className='bg-secondary p-4'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb container justify-content-end">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                </div> */}
                {/* Main Content */}
                <main role="main" class="mt-5 ml-sm-auto px-4">
                    <h2 style={{ color: '#36b8c5' }}>Welcome, Admin!</h2><hr />
                    <div className="row">
                        <div id="" className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-3">
                            <div className="card" >
                                <div className="card-body bg-dark text-light" style={{ borderRadius: "6px" }}>
                                    <h5 className="card-title">New Users</h5>
                                    <span className="card-text">24</span>
                                </div>
                            </div>
                        </div>
                        <div id="" className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-3">
                            <div className="card" >
                                <div className="card-body bg-primary text-light" style={{ borderRadius: "6px" }}>
                                    <h5 className="card-title">New Users</h5>
                                    <span className="card-text">24</span>
                                </div>
                            </div>
                        </div>
                        <div id="" className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-3">
                            <div className="card" >
                                <div className="card-body bg-success text-light" style={{ borderRadius: "6px" }}>
                                    <h5 className="card-title">New Users</h5>
                                    <span className="card-text">24</span>
                                </div>
                            </div>
                        </div>
                        <div id="" className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-3">
                            <div className="card" >
                                <div className="card-body bg-warning text-light" style={{ borderRadius: "6px" }}>
                                    <h5 className="card-title">New Users</h5>
                                    <span className="card-text">24</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

