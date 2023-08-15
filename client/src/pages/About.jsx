import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

import '../styles/About.css'
import { Link } from 'react-router-dom'

export default function About() {
    useEffect(() => {
        document.title = "About | Memoir"
    }, [])
    return (
        <div>
            <Navbar />
            {/* <section id="about-section" class="pt-5 pb-5">
                <div class="container wrapabout">
                    <div class="red"></div>
                    <div class="row">
                        <div class="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                            <div class="blockabout">
                                <div class="blockabout-inner text-center text-sm-start">
                                    <div class="title-big pb-3 mb-3">
                                        <h3>ABOUT US</h3>
                                    </div>
                                    <p class="description-p text-muted pe-0 pe-lg-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere sequi, quia, est sed dicta aliquid quidem facilis culpa iure perferendis? Dolor ad quia deserunt.
                                    </p>
                                    <p class="description-p text-muted pe-0 pe-lg-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere.</p>
                                    <div class="sosmed-horizontal pt-3 pb-3">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                    </div>
                                    <a href="#" class="btn rey-btn mt-3">See More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-5 mt-lg-0">
                            <figure class="potoaboutwrap">
                                <img src="https://bootdey.com/image/400x700/FF7F50/000000" alt="potoabout" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="hero-section-about">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb" >
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>

            <div style={{ maxWidth: "700px", margin: "auto" }} className='px-4'>
                <div className='text-center my-5'>
                    <span className="badge bg-danger">About Memoir</span>
                    <h3 className='mt-3' style={{ fontFamily: "cursive" }}>Memoir</h3>
                </div>
                <p style={{ fontFamily: "initial" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis blanditiis nam, tempore dicta sed minus veniam laborum cum, similique, saepe quos cumque? Enim iste incidunt quasi, dolorem quam est pariatur laboriosam quos, aperiam repellendus accusantium sunt doloremque qui odit vel maxime animi voluptatem praesentium ex libero consequuntur, numquam laborum similique rem! Totam, ipsam? Nobis corrupti dolorum molestias eligendi voluptas iure itaque quidem obcaecati praesentium dolorem odio atque eaque illum incidunt reprehenderit cupiditate alias deserunt similique, assumenda quia ut. Iure vitae eum veniam eveniet consectetur aliquam cumque provident necessitatibus nihil inventore, dignissimos quaerat? Maiores assumenda minus saepe nulla asperiores, qui sit, odio illo soluta possimus numquam veniam quisquam provident illum aliquam excepturi reprehenderit fugiat rerum error cum commodi. Doloribus, aut eligendi, architecto quis facere consectetur animi quaerat natus voluptatibus cum optio! Nam, ipsa voluptate aliquid ad temporibus facilis autem magnam esse non odit tempore eum odio, id optio accusantium aperiam numquam nihil error quis similique! Ab magnam excepturi, nam maxime similique dicta iusto repellendus consectetur amet unde libero aliquid velit voluptates magni placeat ea quam voluptas! Molestias quisquam ad pariatur odit iste. Molestias laborum possimus, expedita libero sit quia obcaecati, quam nobis perferendis, eaque exercitationem eum voluptates eveniet tempore labore.</p>
            </div>

            <section class="home-testimonial mt-5">
                <div class="container-fluid">
                    <div class="row d-flex justify-content-center testimonial-pos">
                        <div class="col-md-12 pt-4 d-flex justify-content-center">
                            <h3>Testimonials</h3>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            <h2>Explore the students experience</h2>
                        </div>
                    </div>
                    <section class="home-testimonial-bottom">
                        <div class="container testimonial-inner">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-4 style-3">
                                    <div class="tour-item ">
                                        <div class="tour-desc bg-white">
                                            <div class="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                            <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt="" /></div>
                                            <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                            <div class="link-position d-flex justify-content-center">Student</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 style-3">
                                    <div class="tour-item ">
                                        <div class="tour-desc bg-white">
                                            <div class="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                            <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                            <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                            <div class="link-position d-flex justify-content-center">Student</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 style-3">
                                    <div class="tour-item ">
                                        <div class="tour-desc bg-white">
                                            <div class="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                            <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                            <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                            <div class="link-position d-flex justify-content-center">Student</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
