import {Nav, Container, Navbar, NavLink, NavbarBrand} from 'react-bootstrap'

const NavigationBar = () => {
    return (
      <div className="myNB">
        <Navbar variant='dark'>
            <Container>
                <NavbarBrand>Restoran Keluarga Solo</NavbarBrand>
                <Nav>
                    <NavLink>Menu</NavLink>
                    <NavLink>Profile</NavLink>
                    <NavLink>FAQ</NavLink>
                    <NavLink>About Us</NavLink>
                </Nav>
            </Container>
            </Navbar>
      </div>
    );
  };
  
  export default NavigationBar;