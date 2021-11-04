import React from "react";

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavList = styled.ul`
  padding: 2rem;
  position: fixed;
  overflow: hidden;
  flex-direction: column;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-150%")});
  /* opacity: ${(props) => (props.isOpen ? "1" : "0")}; */
  width: 70%;
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.colors.primaryLowOpacity};

  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
    max-height 0.5s ease-in-out;
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 1rem 1rem;
  width: 100%;
`;
const MobileNav = ({ isOpen, setIsOpen, theme }) => {
  return (
    <NavList isOpen={isOpen} theme={theme}>
      <NavItem>
        <Link to={`/`} onClick={() => setIsOpen(!isOpen)}>
          {" "}
          Home
        </Link>
      </NavItem>
      <NavItem>
        {" "}
        <Link to={`/about`} onClick={() => setIsOpen(!isOpen)}>
          {" "}
          About
        </Link>
      </NavItem>
    </NavList>
  );
};

export default MobileNav;
