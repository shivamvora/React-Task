import React from 'react'
import Navbar from './Navbar'

const UpdateForm = () => {
    return (
        <div>
            <Navbar />
            <form>
                <div className=" form-group col-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div className="form-group col-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary ">Update Value</button>
            </form>
        </div>
    )
}

export default UpdateForm;
