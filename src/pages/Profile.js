import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className="container mt-3 d-flex">
        <div className="p-2 w-100">
          <h4 className="d-flex justify-content-between">My Profile</h4>
          <h2>
            Hi&nbsp;
            <span className="text-danger">{localStorage.getItem("users")}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Profile