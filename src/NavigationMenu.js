import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import React, { Component } from 'react';


class NavigationMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (

      <div>
        <Navbar color="light" light expand="lg">
          {/* Brandname */}
          <NavbarBrand href="/">
            Demo
            </NavbarBrand>
          {/* Add toggler to auto-collapse */}

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/*Pull left */}
            <Nav  navbar>
              <NavItem>
                <NavLink className="mr-auto" onClick={this.props.onClick}>
                  Add new contact
                </NavLink>
              </NavItem>
            </Nav>
          

            {/* Pull right */}
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown inNavbar>

                <DropdownToggle data-toggle="dropdown" nav caret>
                  Bob
                  </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>
                    Account
                  </DropdownItem>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavigationMenu;