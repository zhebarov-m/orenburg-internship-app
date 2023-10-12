import React from "react";
import logo from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'}
      style={{
        textDecoration: 'none',
        fontSize: 25,
        fontWeight: 900,
        lineHeight: "31.37px",
        display: "flex",
        gap: 6,
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" />
      <span>
        <span style={{ color: "#3657CB", fontWeight: 800 }}>Kino</span>
        <span style={{ color: "white" }}>area</span>
      </span>
    </Link>
  );
};

export default Logo;
