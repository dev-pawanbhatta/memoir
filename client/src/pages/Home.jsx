import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

import '../styles/Home.css'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'

import $ from 'jquery'


export default function Home() {
    useEffect(() => {
        document.title = "Home | Memoir"
    })

    const [loop, setLoop] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    const [blogs, setBlogs] = useState([]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
            setLoop(prevLoop => [...prevLoop, prevLoop.length + 1]);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const blogCards = loop.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-sm-12 col-12 mb-4">
                <div className='card'>
                    <Link to="/" className='text-black text-decoration-none card-body'>
                        <div>
                            <span className="badge bg-primary mx-1">Software</span>
                            <span className="badge bg-success mx-1">Writing</span>
                            <span className="badge bg-info mx-1">Documentation</span>
                        </div>
                        <div>
                            <h5 className='my-3'>Buttons in Figma: Part 1 - Basics,Types and States of Buttons</h5>
                            <p style={{ fontSize: "0.8rem" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dolor enim velit quas expedita non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, saepe.</p>
                            <div>
                                <div className="row" style={{ flexWrap: "nowrap" }}>
                                    <div className="col-lg-1 col-md-2 col-sm-2 col-2">
                                        <img src="logo192.png" width={50} height={50} alt="" />
                                    </div>
                                    <div className="col-lg-11 col-md-10 col-sm-10 col-10">
                                        <div>
                                            <div>
                                                <strong>
                                                    Pawan Bhatta
                                                </strong>
                                            </div>
                                            <small style={{ fontSize: "0.7rem" }}>Aug 11 2023</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        ));
        setBlogs(blogCards);
    }, [loop]);

    const navigate = useNavigate();

    const handleSearch = event => {
        event.preventDefault()
        let searchText = $('#search-box').val();
        if (searchText || searchText != "") {
            navigate(`/search?query=${searchText}`)
        }

    }


    return (
        <div>
            <Navbar />
            <div className='hero-section'>
                <h1>Memoir Blogs</h1>
                <div>Technical writing on Software Engineering, Security and Operations</div>
                <form action="" onSubmit={handleSearch}>
                    <div className="d-flex my-4" style={{ maxWidth: "500px", margin: "auto", }} role="group">
                        <input type="text" className="form-control text-light bg-transparent outline-1 search-box border-1" placeholder='Search blogs...' name='search' id="search-box" style={{ borderRight: "none", borderRadius: "0", margin: "0" }} />
                        <button type='submit' className="fa fa-search p-2 bg-dark text-light" style={{ border: "1px solid white" }}></button>
                    </div>
                </form>
            </div>
            <div className="container-fluid my-3">
                <div className="row g-3">
                    {blogs}
                </div>
            </div>
            <Footer />
        </div >
    )
}
