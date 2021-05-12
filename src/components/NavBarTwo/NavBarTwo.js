import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav2,
  NavbarContainer,
  NavLogo,
  MobileHamburger,
  NavMenu,
  NavPrimary,
  NavItem,
  NavLinks,
  NavContact,
} from "./NavBarTwo.elements";

const NavBarTwo = ({ blueBg, whiteBg, orangeBg, ref1 }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

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
    <div ref={ref1}>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav2 blueBg={blueBg} whiteBg={whiteBg} orangeBg={orangeBg}>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu} whiteBg={whiteBg}>
              {/* <NavIcon /> */}
              RY
            </NavLogo>
            <MobileHamburger onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileHamburger>
            <NavMenu onClick={handleClick} click={click}>
              <NavPrimary>
                <NavItem>
                  <NavLinks to="/code" whiteBg={whiteBg}>
                    Code
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/film" whiteBg={whiteBg}>
                    Film
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/chocolate" whiteBg={whiteBg}>
                    Chocolate
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/who" whiteBg={whiteBg}>
                    Who
                  </NavLinks>
                </NavItem>
              </NavPrimary>
              <NavContact onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks to="/contact" whiteBg={whiteBg}>
                    Contact
                  </NavLinks>
                </NavItem>
              </NavContact>
            </NavMenu>
          </NavbarContainer>
        </Nav2>
      </IconContext.Provider>
    </div>
  );
};

export default NavBarTwo;
