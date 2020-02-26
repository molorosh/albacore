import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: true,  
    };
    // these are added to properly register the scope of 'this' in the methods
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleNavbar(){
    this.setState({ collapsed: !this.state.collapsed});
  }

  handleClick(newMode){
    // we will pass this to the parent object to propogate
    this.toggleNavbar();
    this.props.handleChangeSection(newMode);
  }

  render(){
    return (
      <div>
      <Navbar color="dark" dark>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto">albacore</NavbarBrand>
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
               className="menuClick"
               onClick={() => this.handleClick("intro")}
               >Intro</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="menuClick"
                onClick={() => this.handleClick("issues")} 
               >Issues</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="menuClick"
                onClick={() => this.handleClick("protoAlpha")} 
               >Proto: ἄλφα</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;