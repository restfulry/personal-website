import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav2 = styled.nav`
  background: ${({ purpleBg, blueBg, whiteBg, orangeBg }) =>
    purpleBg
      ? "#622cad"
      : blueBg
      ? "#1147b0"
      : whiteBg
      ? "rgba(255,250,250,1)"
      : orangeBg
      ? "#dd6546"
      : "#622cad"};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  ${Container}
`;

export const MobileHamburger = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLogo = styled(Link)`
  color: ${({ whiteBg }) => (whiteBg ? "#080808" : "#fffafa")};
  font-weight: bold;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const NavContact = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;


  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const NavPrimary = styled.div`
  align-self: center;
  display: flex;
  list-style: none;
  text-align: center;
`

export const NavItem = styled.li`
  height: 50px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
    transition: all 0.9s ease;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: ${({ whiteBg }) => (whiteBg ? "#080808" : "#fffafa")};
  text-transform: uppercase;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
