import { Nav, Container, Navbar, NavLink, NavbarBrand } from 'react-bootstrap';
import logo from '../asset/logo.jpeg';
import '../style/landingpage.css';

const NavigationBar = () => {
  return (
    <div className="myNB">
    <Navbar variant='dark'>
    <Container>
      <NavbarBrand>
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Restoran Keluarga Solo Logo"
        />{' '}
        Restoran Keluarga Solo
      </NavbarBrand>
      <Nav>
        <NavLink className='text-white'>Menu</NavLink>
        <NavLink className='text-white'>Profile</NavLink>
        <NavLink className='text-white'>FAQ</NavLink>
        <NavLink className='text-white'>About Us</NavLink>
      </Nav>
    </Container>
  </Navbar>
</div>

  );
};

export default NavigationBar;
