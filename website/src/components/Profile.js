import { Container, Button, Row, Col } from "react-bootstrap";
import logoIG from '../asset/logoIG.png'
import logoFB from '../asset/logoFB.png'
import logoTIKTOK from '../asset/logoTIKTOK.png'

const Profile = () => {
  return (
    <div className="outro">
    <Row>
      {/* Kolom Pertama */}
      <Col>
          <Container className="d-flex flex-column align-items-start justify-content-center " style={{ height: '75%', width: '25vh' }}>
            <h4 className="text-white">Tentang Kami</h4>
            <Button className="bg-transparent text-white mb-2">Phone</Button>
            <Button className="bg-transparent text-white mb-2">Email</Button>
            <Button className="bg-transparent text-white">Address</Button>
          </Container>
      </Col>
      {/* Kolom Kedua */}
      <Col>
      <Container className="d-flex flex-column align-items-start justify-content-center " style={{ height: '100%', width: '40vh'}}>
        <h4 className="text-white">Get in Touch</h4>
        <p className="text-white">Discover the timeless charm of, where the traditional cuisine never goes out of style.</p>
        <img className='myLogo' src={logoFB} alt="Facebook Account" />
        <img className='myLogo ' src={logoIG} alt="Instagram Account" />
        <img className='myLogo' src={logoTIKTOK} alt="Tiktok Account" />
      </Container>
      {/* Kolom Kedua */}
      </Col>
      <Col>
          <Container className="d-flex flex-column align-items-start justify-content-center " style={{ height: '75%', width: '25vh' }}>
            <h4 className="text-white">Opening Hours</h4>
            <Button className="bg-transparent text-white mb-2">Monday - Thursday</Button>
            <Button className="bg-transparent text-white mb-2">Friday</Button>
            <Button className="bg-transparent text-white">Saturday - Sunday</Button>
          </Container>
      </Col>
    </Row></div>
    
  );
};

export default Profile;
