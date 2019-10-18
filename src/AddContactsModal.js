

import { FormGroup, Form, Col, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import React from 'react';


const AddContactsModal = (props) => {
  console.log(props);
  return (
    <Modal isOpen={props.show} toggle={props.onClose}>
      <ModalHeader toggle={props.onClose}>Add Contact</ModalHeader>

      <ModalBody>

        <Form>
          <FormGroup row>

            <Label sm={2}> Name </Label>
            <Col sm={10}>
              <Input type="text" placeholder="Name" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>
              Mobile
              </Label>

            <Col sm={10}>
              <Input type="text" placeholder="Mobile" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>
              Email
              </Label>
            <Col sm={10}>
              <Input type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup row >
            <Label sm={2}>
              Address
              </Label>
            <Col sm={10}>
              <Input type="textarea" placeholder="Address" />
            </Col>
          </FormGroup>


        </Form>

      </ModalBody>
      <ModalFooter>

        <Button color="success" type="submit">Save</Button>


        <Button onClick={props.onClose}>Cancel</Button>

      </ModalFooter>
    </Modal>
  )
}

export default AddContactsModal;