import React, { useEffect } from 'react'

import '../styles/NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
    useEffect(() => {
        document.title = "Not Found | Memoir"
    })
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="error-template">
                            <h1>
                                Oops!</h1>
                            <h2 className='text-danger'>
                                404 Not Found</h2>
                            <div class="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div class="error-actions">
                                <Link to="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                    Take Me Home </Link><Link to="/contact" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Contact Support </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
