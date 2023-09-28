import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRotate } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [bool, setBool] = useState(false);
  const LogoutUser = () => {
    if (window.confirm("You wanna logout?")) {
      localStorage.clear();
      window.location.href = "/login";
    } else {
      window.location.href = "/recipes";
    }
  };

  const auth = localStorage.getItem("token");

  const toggleMenu = () => {
    setBool(!bool);
  };

  return (
    <div>
      <nav>
        <div className="nav-left">
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-icon"
            onClick={toggleMenu}
            style={
              bool
                ? { transform: "rotate(90deg)" }
                : { transform: "rotate(0deg)" }
            }
          />

          <h2>Recipe Sharing App</h2>
        </div>
        <div
          className="nav-right"
          style={
            bool
              ? { transform: "translateX(0px)" }
              : { transform: "translateX(-800px)" }
          }
        >
          <ul>
            {auth ? (
              <>
                <li>
                  <NavLink to="recipes">Recipes</NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/addRecipe">Add Recipe</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/favouriteRecipes">Favourites</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="login" onClick={LogoutUser}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="login">Login</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="signup">SignUp</NavLink>
                </li>
                <li>
                  <NavLink to="forgotPassword">Forgot Password</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
