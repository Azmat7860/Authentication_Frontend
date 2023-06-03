import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link
      style={{color:"101010", textDecoration:"none"}}
        onClick={() => {
          localStorage.removeItem("token");

          navigate("/login");
        }}
      >
        Logout
      </Link>
    </div>
  );
};

export default Logout;
