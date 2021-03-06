import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  text-align: center;

  @media screen and (max-width: 480px) {
    // grid-template-rows: repeat(6, 60px);
    grid-template-rows: ${({ toggleDropDown }) =>
      toggleDropDown ? "repeat(6, 80px)" : "repeat(6, 60px)"};
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ down }) => (down ? "20px" : "0px")};
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${({ color }) => (color ? "#e9967a" : "#b5c1b4")};
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const LanguageButton = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #2c3c8c;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const TextLanguage = styled.div`
  margin-left: 2px;
`;

export const SidebarMiniLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const RowBttns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MiniSideBarContainer = styled.aside`
  height: 70%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 32px);
  /* position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0; */
  transition: 3s ease-in-out;
  display: grid;
  align-items: center;
  //transition: width 2s linear 1s;
  top: 0;
  left: 0;
  opacity: ${({ toggleDropDown }) => (toggleDropDown ? "100%" : "0")};
  top: ${({ toggleDropDown }) => (toggleDropDown ? "0" : "-100%")};
`;
