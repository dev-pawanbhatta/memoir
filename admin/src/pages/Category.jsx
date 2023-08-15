import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useLocation } from 'react-router-dom'

export default function Category(props) {

    const location = useLocation();

    // const search = location.search;
    // const params = new URLSearchParams(search);
    // const name = params.get('name');

    const handleInsertion = (event) => {

    }
    const handleEdit = (event) => {

    }
    const handleDelete = (event) => {

    }


    return (
        <div>
            <Navbar />
            <div className='bg-secondary p-4'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb container justify-content-end">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Categories</li>
                    </ol>
                </nav>
            </div>
            {/* Categories */}
            <section id="" class="m-5">
                <div className="card">
                    <div className="card-header">
                        <button type="button" className="btn btn-primary btn-sm float-end" data-bs-toggle="modal" data-bs-target="#add">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>

                        <div className="modal fade" id="add" tabindex="-1" aria-labelledby="addLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered       ">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addLabel">Add Category</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form onSubmit={handleInsertion}>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="slug" className="form-label">Slug</label>
                                                <input type="text" className="form-control" id="slug" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Slug</th>
                                    <th scope="col">Posts</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Science</td>
                                    <td>science</td>
                                    <td>20</td>
                                    <td>
                                        <button type="button" className="btn btn-primary btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#edit">
                                            <i class="fas fa-edit    "></i>
                                        </button>

                                        <div className="modal fade" id="edit" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
                                            <div className="modal-dialog  modal-dialog-centered      ">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="editLabel">Edit Category</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <form onSubmit={handleEdit}>
                                                        <div className="modal-body">
                                                            <div className="mb-3">
                                                                <label htmlFor="name" className="form-label">Name</label>
                                                                <input type="text" className="form-control" id="name" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="slug" className="form-label">Slug</label>
                                                                <input type="text" className="form-control" id="slug" />
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#delete">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </button>

                                        <div className="modal fade" id="delete" tabindex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                                            <div className="modal-dialog     modal-dialog-centered   ">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="deleteLabel">Delete Category</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Are you sure you want to delete this data ?
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" onClick={handleDelete} className="btn btn-danger">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    )
}
