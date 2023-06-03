import React from "react";
// import Logout from "../components/Logout/Logout";
// import { useNavigate } from "react-router";
// import { Button } from 'antd';

const Dashboard = () => {

  return (
    <div>
      <div className="container mt-3 d-flex">
        <div className="p-2 w-100">
          <h4 className="d-flex justify-content-between">Dashboard</h4>
          {/* <h2>
            Hi&nbsp;
            <span className="text-danger">{localStorage.getItem("users")}</span>
          </h2> */}
        </div>
        {/* <div className="p-2 flex-shrink-1">
          <Logout />
          <Button className="btn btn-danger" onClick={()=>{navigate('/login')}}>Login</Button>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
