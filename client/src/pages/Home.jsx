import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

import '../styles/Home.css'
import Footer from '../components/Footer'

export default function Home() {
    useEffect(() => {
        document.title = "Home | Memoir"
    })
    return (
        <div>
            <Navbar />
            <div className='hero-section'>
                <h1>Memoir Blogs</h1>
                <div>Technical writing on Software Engineering, Security and Operations</div>
            </div>
            <div className="container-fluid my-3">
                <div className="row g-3">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-12 mb-4">
                        <a href="" className='text-black text-decoration-none'>
                            <div>
                                <span className="badge bg-primary mx-1">Software</span>
                                <span className="badge bg-success mx-1">Writing</span>
                                <span className="badge bg-info mx-1">Documentation</span>
                            </div>
                            <div>
                                <h5 className='my-3'>Buttons in Figma: Part 1 - Basics,Types and States of Buttons</h5>
                                <p style={{ fontSize: "0.8rem" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dolor enim velit quas expedita non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, saepe.</p>
                                <div>
                                    <div className="row">
                                        <div className="col-sm-1 col-3 col-md-2 col-lg-1">
                                            <img src="logo192.png" width={50} height={50} alt="" />
                                        </div>
                                        <div className="col-sm-6 col-mg-5 col-lg-4">
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
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
