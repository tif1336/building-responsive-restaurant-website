import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import risoles from '../asset/risoles.jpg'

function Category() {
    return (
      <div className='height-100vh'>
      <Row className='d-flex justify-content-center align-items-center height-100vh'>
        {/* First Card */}
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="center" src={risoles} alt='Hidangan Pembuka'/>
          <div className='bg-dark'>
            <div className='p-2 m-1 text-white'>
          <Card.Body>
            <Card.Title>Hidangan Pembuka</Card.Title>
            <Card.Text>
            Some quick example text for the second card.
            </Card.Text>
            <Button variant="primary">Lihat Menu</Button>
          </Card.Body>
          </div>
          </div>
        </Card>
  
        {/* Second Card */}
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="center" src={risoles} alt='Hidangan Pembuka'/>
          <div className='bg-dark'><div className='p-2 m-1 text-white'>
          <Card.Body>
            <Card.Title>Hidangan Utama</Card.Title>
            <Card.Text>
            Some quick example text for the second card.
            </Card.Text>
            <Button variant="primary">Lihat Menu</Button>
          </Card.Body>
          </div></div>
        </Card>

        {/* Third Card */}
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="center" src={risoles} alt='Hidangan Pembuka'/>
          <div className='bg-dark'><div className='p-2 m-1 text-white'>
          <Card.Body>
            <Card.Title>Hidangan Penutup</Card.Title>
            <Card.Text>
            Some quick example text for the second card.
            </Card.Text>
            <Button variant="primary">Lihat Menu</Button>
          </Card.Body>
          </div></div>
        </Card>
      </Row></div>
    );
  }

export default Category;