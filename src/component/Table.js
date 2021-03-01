import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Table = () => {
    return (
        <div>
            <Navbar />
            <h1>Table</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Dob</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">shivam</th>
                        <td>shivam@gmail.com</td>
                        <td>7458961230</td>
                        <td>20/20/20</td>
                        <td>Toggle for active inactive</td>
                        <td><Link to="/update-form"><a><i class="fas fa-user-edit"></i></a></Link></td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default Table;
