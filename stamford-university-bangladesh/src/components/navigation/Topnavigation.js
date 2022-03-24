import React, { Component } from 'react';
import { Container, Row, Col,Nav } from 'react-bootstrap';


export default class Topnavigation extends Component {
  render() {
    return (
      <div>
        
          <Container fluid>
  <Row className='topNavbg'>
            <Col>
              <Container >
                <Row>
                  <Col>
                    <Nav
                      className='anchorDiv'
                      activeKey="/home"
                      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
  <Nav.Item>
    <Nav.Link className='anchorDiv' href="/home">admission@stamford.university</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className='anchorDiv' eventKey="link-1">DEGREE VERIFICATION</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className='anchorDiv' eventKey="link-2">Library</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className='anchorDiv'  eventKey="link-3" >IQAC</Nav.Link>
  </Nav.Item>
                      
</Nav>
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
