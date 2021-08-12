import React from 'react'

const User = ({data, display}) => {
    console.log(data, display)
    return (
        <div className={display? "user show" : "hide"} >
            <div>
                <img src={data.selectedFile} alt="..." />
            </div>
            <div>
                <p><strong>Your Name</strong> <p>{data.fname} {data.lname}</p></p>
            </div>
            <div>
                <p><strong>Your Email</strong> <p>{data.email}</p></p>
            </div>
            <div>
                <p><strong>Mobile Number</strong> <p>{data.mobile}</p></p>
            </div>
            <div>
                <p><strong>Your Age</strong> <p>{data.age}</p></p>
            </div>
        </div>
    )
}

export default User
