import React from "react";

/* Styling */
import "./index.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="u-container">
        <div className="logo__box">
          <h1>
            Travelize <span>My Travelling Experiences</span>
          </h1>
        </div>

				<ul className="navbar__items">
					<li className="navbar__item">
						<a href="#!" className="navbar__link">Home</a>
					</li>

					<li className="navbar__item">
						<a href="#!" className="navbar__link">Blog</a>
					</li>

					<li className="navbar__item">
						<a href="#!" className="navbar__link navbar__link--active">About</a>
					</li>
				</ul>
      </div>
    </nav>
  );
};

export default Navbar;
