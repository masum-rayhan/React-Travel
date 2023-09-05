import React from "react";

import "./navbar-styles.scss";

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>Travel.</h1>
          </a>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
