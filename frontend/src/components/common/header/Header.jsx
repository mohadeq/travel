import React, { useState, useContext } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const { user, clearUser } = useContext(UserContext);

  console.log(user);
  return (
    <>
      <header>
        <div className="container flex">
          {/* <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div> */}
          <h1>Travel Planner</h1>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => {
                if (list.private && !user) return "";
                if (list.text === "Login" && user)
                  return (
                    <li>
                      <Link to="" onClick={clearUser}>
                        Logout
                      </Link>
                    </li>
                  );
                return (
                  <li key={index}>
                    <Link to={list.path}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div className='btn-flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div> */}

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
