//import React from "react";
//import banner from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <ul className="list-unstyled d-flex justify-content-between unorderlist p-2 ps-5 pe-5 text-center">
        <li className="">
          <h6 className="heading">SQL Server</h6>
        </li>
        <li className="">
          <img src={logo} className="" width="75px" />
        </li>
      </ul>
    </div>
  );
}
