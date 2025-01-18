import React from "react";
import Link from "next/link";

const Header = ({ content, city }) => {
  console.log("Header.js ", city);
  return (
    <>
      <div className="section1 d-flex justify-content-between">
        <Link className="h2 text-decoration-none" href="/">
          <strong>Traffixcion</strong>
        </Link>

        <p className="h3">
          {content}
          <em>
            <strong className="text-primary"> {city}</strong>
          </em>
        </p>
      </div>
    </>
  );
};

export default Header;
