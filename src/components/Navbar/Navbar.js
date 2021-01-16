import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">
        React <i className="fab fa-react"></i>{" "}
      </h1>
      <div className="navbar__menu-icon" onClick={handleClicked}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "navbar__menu active" : "navbar__menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.url}
                className={item.cName}
                onClick={handleClicked}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button>
        <Link to="/signup">sign up</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
