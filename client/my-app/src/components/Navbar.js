import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const LogoutUser = () => {
    if (window.confirm("You wanna logout?")) {
      localStorage.clear();
      window.location.href = "/login";
    } else {
      window.location.href = "/recipes";
    }
  };

  const auth = localStorage.getItem("token");

  return (
    <div>
      <nav>
        <div className="nav-left">
          <h2>Recipe Sharing App</h2>
        </div>
        <div className="nav-right">
          <ul>
            {auth ? (
              <>
                <li>
                  <NavLink to="recipes">Recipes</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/">Home</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/addRecipe">Add Recipe</NavLink>{" "}
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
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
