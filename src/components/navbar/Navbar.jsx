import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setActive('navBar activeNavbar')
  }

  // Function to remove the navbar
  const removeNavbar = () => {
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
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
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="Icon" />
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
