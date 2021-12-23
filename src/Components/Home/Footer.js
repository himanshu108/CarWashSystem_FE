import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-copyright text-center py-3">
        <h5>
          &copy; {new Date().getFullYear()} Copyright: By Anil Singh
        </h5>
      </div>
    </div>
  );
};

export default Footer;
