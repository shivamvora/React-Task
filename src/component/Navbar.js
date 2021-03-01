import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (



        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <a><Link to="/" className="navbar-brand">Dashboard</Link></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a><Link to="/add-student" className="nav-link">Add Student</Link></a>
                            </li>
                            <li className="nav-item">
                                <a ><Link className="nav-link" to="/student-list">Student List</Link></a>
                            </li>

                            <li className="nav-item">
                                <a ><Link className="nav-link" to="/table">Show Table</Link></a>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
