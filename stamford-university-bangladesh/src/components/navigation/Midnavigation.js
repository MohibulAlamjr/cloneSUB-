import React, { Component } from 'react'
import { Container, Row, Col,Button,Form,FormControl } from 'react-bootstrap';
import StamfordLogo from '../../image/logo.png';
import SekhMujiburRahman from '../../image/mujib.png';
import Subornojoyonti from '../../image/suborno_50.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faTwitter,faGooglePlus,faYoutube } from '@fortawesome/free-brands-svg-icons';


export default class Midnavigation extends Component {
  render() {
    return (
      <div>
        <Container fluid>
            <Row className='midNavmainRow'>
                    <Col>
                    <Container>
                        <Row>
                                <Col  lg='4'> <img className="stamford" src={StamfordLogo} alt='logo' /> </Col>
                                <Col  lg='1'><Button className='midNavButton'>Online Admission</Button></Col>
                                <Col lg='2'>
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
                                <Col lg='5'>
                                    <FontAwesomeIcon  className='icon' icon={faFacebookF} />
                                    <FontAwesomeIcon className='icon' icon={faTwitter} />
                                    <FontAwesomeIcon className='icon' icon={faGooglePlus} />
                                    <FontAwesomeIcon className='icon' icon={faYoutube} />
                                   <img className="suborno" src={Subornojoyonti} alt='Sekh' />
                                   <img className="sekhMujib" src={SekhMujiburRahman} alt='Sekh' />
                                   
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
