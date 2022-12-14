import React, { useState } from "react";
import { BiBarChart, BiMenu, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <BiBarChart />,
    },
    {
      path: "/alumnos",
      name: "Alumnos",
      icon: <BiUser />,
    },
  ];
  return (
    <div className="container-main">
      <div
        style={{ width: isOpen ? "200px" : "60px" }}
        className="sidebar"
        id="collapsed"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            UTT
          </h1>
          <button
            style={{ marginLeft: isOpen ? "50px" : "4px" }}
            className="bars"
          >
            <BiMenu onClick={toggle} />
          </button>
        </div>
        <div className="content">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
