import React, {useState} from 'react'

function AddActivity() {
    const [data,setData] = useState({});

    const handleChange = (e) => {
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    return (
        <div className={"add"}>
            <div className={"input-section"}>
                <p>Activity:</p>
                <input onChange={handleChange} name={"name"} placeholder={"Activity Name....."}/>
            </div>

            <div className={"input-section"}>
                <p>Duration:</p>
                <input onChange={handleChange} name={"duration"} placeholder={"Activity Name....."}/>
            </div>
            
        </div>
    )
}

export default AddActivity;
