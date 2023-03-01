import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ padding: "0 80px 0", background: "aqua" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          padding: "30px",
        }}
      >
        <li>
          <Link to="/">
            <span
              style={{
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              Products
            </span>
          </Link>
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
        >
          <Link to="/cart">
            <span
              style={{
                fontSize: "22px",
              }}
            >
              Cart 250$
            </span>
            <span
              style={{
                marginLeft: "5px",
                padding: "5px 10px",
                background: "#000",
                borderRadius: "50%",
                color: "#fff",
              }}
            >
              2
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
