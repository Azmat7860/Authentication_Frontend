import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import NavMenu from "./../NavMenu/NavMenu";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Sider
        collapsible
        width={210}
        collapsedWidth={80}
        collapsed={collapsed}
        onCollapse={(c) => setCollapsed(c)}
        theme="light"
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          borderRight: `1px solid grey`,
        }}
      >
        <NavMenu collapsed={collapsed} />
      </Sider>
    </div>
  );
};

export default Sidebar;
