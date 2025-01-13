import React from "react";
import Link from "next/link";

const Header = ({ content }) => {
  return (
    <>
      <div className="section1 border border-4 d-flex justify-content-between">
        <Link className="h2 text-decoration-none" href="/">
          <strong>Traffixcion</strong>
        </Link>

        <p className="h3">
          {content}
          <em>
            <strong className="text-primary"> Kuningan</strong>
          </em>
        </p>
      </div>
    </>
  );
};

export default Header;
