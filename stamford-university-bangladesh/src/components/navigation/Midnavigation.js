import React, { Component } from 'react'
import { Container, Row, Col,Button,Form,FormControl } from 'react-bootstrap';
import stamfordLogo from '../../image/logo.png';
import sekhMujiburRahman from'../../'

export default class Midnavigation extends Component {
  render() {
    return (
      <div>
        <Container fluid>
            <Row className='midNavmainRow'>
                    <Col>
                    <Container>
                        <Row>
                                <Col  lg='5'> <img src={stamfordLogo} alt='logo' /> </Col>
                                <Col  lg='2'><Button className='midNavButton'>Online Admission</Button></Col>
                                <Col lg='1'>
                                    <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Col>
                                <Col lg='4'>
                                    
                                </Col>
                        </Row>
                    </Container>
                    
                    
                    </Col>
            </Row>
        </Container>     
      </div>
    )
  }
}
