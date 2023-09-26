import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <img
            src="/public/logo.svg"
            alt="Gourmet Gazette Logo"
            className="logo"
          />
          <p className="title">Gourmet Gazette</p>
        </div>
      </footer>
    </>
  );
}
