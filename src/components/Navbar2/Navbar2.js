import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav2,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileHamburger,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar2.elements";

const Navbar2 = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }
    setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav2>
          <NavbarContainer>
            <NavLogo to="/">
              {/* <NavIcon /> */}
              RYAN LEE
            </NavLogo>
            <MobileHamburger onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileHamburger>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/code">Code</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/film">Film</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/chocolate">Chocolate</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact">
                    <Button primary>Contact</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contact">
                    <Button fontBig primary>
                      Contact
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav2>
      </IconContext.Provider>
    </>
  );
};

export default Navbar2;
