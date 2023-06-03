import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "./../../Logout/Logout";

const NavMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [currentActive, setCurrentActive] = useState(pathname);

  useEffect(() => {
    setCurrentActive(pathname);
  }, [pathname, currentActive]);

  const handleClick = (e) => {
    setCurrentActive(e.key);
  };

  return (
    <div>
      <Menu
        mode="inline"
        theme="light"
        onClick={handleClick}
        selectedKeys={[currentActive]}
        className="mt-3"
      >
        <Menu.Item onClick={() => navigate("/")} key="/">
          Dashboard
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate("/profile")}
          key="/profile"
        >
          My Profile
        </Menu.Item>

        <Menu.Item
          onClick={() => navigate("/reset-password")}
          key="/reset-password"
        >
          Change Password
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavMenu;
