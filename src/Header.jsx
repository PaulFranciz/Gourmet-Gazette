import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="Heading container">
          <img
            src="/public/logo.svg"
            alt="Gourmet Gazette Logo"
            className="logo"
          />
          <p className="title">Gourmet Gazette</p>
        </div>
      </header>
    </>
  );
}
