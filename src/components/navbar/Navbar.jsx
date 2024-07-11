import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setActive(!active);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>
        
        <div className={active ? 'navBar activeNavbar' : 'navBar'}>
          <ul className="navLists flex">
            <li className="navList">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navList">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navList">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navList">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navList">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navList">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navList">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>
          <div onClick={toggleNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={toggleNavbar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
