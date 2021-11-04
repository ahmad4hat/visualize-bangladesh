import React from "react";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
