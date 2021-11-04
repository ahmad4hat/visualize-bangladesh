import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { HiMenuAlt2, HiMinus } from "react-icons/hi";
import MobileNav from "./MobileNav/MobileNav";
const NavEl = styled.div`
  display: flex;
  color: white;

  justify-content: space-between;
  overflow: hidden;
  padding: 2rem;
`;
const Brand = styled.div``;
const Div = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  position: sticky;
  top: 0;
`;

const NavContainer = styled.div``;

const Nav = (props) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Div theme={theme}>
      <NavEl>
        <Brand>Visualize Bangladesh</Brand>
        <NavContainer>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiMinus /> : <HiMenuAlt2 />}
          </button>
        </NavContainer>
      </NavEl>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} />
    </Div>
  );
};

export default Nav;
