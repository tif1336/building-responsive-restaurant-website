import { Col, Row, Container } from "react-bootstrap"

const Intro = () => {
    return(
        <div className="intro">
            <Container className="d-flex justify-content-center align-items-center">
              <Row>
                <Col>
                  <h1 className="title">RESTORAN TERBAIK DI KOTA ANDA</h1>
                  <div className="introButton mt-4 text-center">
                  <button className='btn btn-light '>Lihat Semua List</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
    )
}
export default Intro