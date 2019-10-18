import React from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import { FaHeadphones, FaUser, FaEnvelope, FaHome } from 'react-icons/lib/fa'


const ContactCard = ({ contact }) => {

  return (
    <Container fluid>
      <Row>
        <Col xs={'auto'}>
          <img src={contact.photo} alt="avatar" className="rounded-circle" width="120" height="120" />
        </Col>
        <Col xs={'auto'}>
          <h4> <FaUser /> {contact.name + ' ' + contact.surname}</h4>
          <h5> <FaHeadphones /> {contact.phone}</h5>
          <h5> <FaEnvelope /> {contact.email}</h5>
          <p> <FaHome /> {contact.address}</p>
        </Col>
      </Row>

      <Row>

        <Col xs={{ size: 'auto' }}>
          <Button color="success"><FaHeadphones /> Call</Button>
        </Col>
        <Col sm={'auto'}>
          <Button color="warning"><FaEnvelope /> Message</Button>
        </Col>
        <Col sm={'auto'}>
          <Button color="default"><FaEnvelope /> Email</Button>
        </Col>
      </Row>

    </Container>
  )
}

export default ContactCard;