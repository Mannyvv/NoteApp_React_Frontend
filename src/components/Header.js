// Header.js
import { useState } from "react";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const whiteText = { color: "white" };

  return (
    <header className="header sticky-top" >
      <Navbar expand="md">
        <NavbarBrand style={whiteText} href="/">
          <img src={Logo} style={{ height: "50px" }} alt="logo" />
          Demo-Note
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar >

          <Nav className=" nav" style={{ marginLeft: "30%" }} navbar >
            <NavItem>
              <NavLink className="nav-link" style={whiteText} to="/">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                className="nav-link"
                style={{ color: "white" }}
                href="https://github.com/Mannyvv/NoteApp_React/blob/main/src/App.js"
              >
                <i className="fa fa-github fa-lg" /> GitHub Code
              </NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar style={{ color: "white" }}>
              <DropdownToggle nav caret style={{ color: "white" }}>
                <i className="fa fa-github fa-lg" /> GitHub Code
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <a
                    className="nav-link"
                    href="https://github.com/Mannyvv/NoteApp_React/blob/main/src/App.js"
                  >Front-End
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a
                    className="nav-link"
                    href="https://github.com/Mannyvv/NoteApp_React_Backend/blob/main/src/index.js"
                  >Back-End
                  </a>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
 
            <NavItem>
              <NavLink className="nav-link" style={whiteText} to="/TechStack">
                <i className="fa fa-list fa-lg" /> Tech-Stack
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> 
      </Navbar>


    </header>
  );
};

export default Header;
