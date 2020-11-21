import React from "react";

/* Styling */
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="u-container footer">
        <p className="u-copyright-text">
          &copy; {new Date().getFullYear()} Travelize
        </p>
        <ul className="footer__items">
          <li className="footer__item">
            <a href="#!" className="footer__link">
              Privacy Policy
            </a>
          </li>
          <li className="footer__item">
            <a href="#!" className="footer__link">
              Terms and Condition
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
